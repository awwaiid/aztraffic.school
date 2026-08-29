// Make the "call" buttons useful on devices that can't place a phone call.
//
// On a phone, tel: links work and nothing here changes.
// On a laptop or desktop, tapping a tel: link does nothing (or pops up a
// broken "choose an app" dialog), so instead we copy the number to the
// clipboard and show it in a small notice the visitor can read and dial
// from their phone.
(function(){
  // Phones and tablets: coarse pointer, no hover. Everything else is
  // treated as a device that cannot dial.
  var canDial = window.matchMedia &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if(canDial) return;

  var es = (document.documentElement.lang || '').toLowerCase().indexOf('es') === 0;
  var t = es ? {
    hint:   'Haga clic para copiar el número',
    copied: 'Copiado a su portapapeles',
    failed: 'Nuestro número de teléfono',
    sub:    'Márquelo desde su teléfono',
    or:     ' o ',
    email:  'mándenos un correo',
    close:  'Cerrar'
  } : {
    hint:   'Click to copy this number',
    copied: 'Copied to your clipboard',
    failed: 'Our phone number',
    sub:    'Dial it from your phone',
    or:     ', or ',
    email:  'email us',
    close:  'Close'
  };

  // Format 6028923570 as (602) 892-3570; leave anything unexpected alone.
  function pretty(href){
    var d = href.replace(/[^0-9]/g, '').replace(/^1/, '');
    return d.length === 10
      ? '(' + d.slice(0,3) + ') ' + d.slice(3,6) + '-' + d.slice(6)
      : href.replace(/^tel:/, '');
  }

  function copy(text){
    try {
      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(text);
        return true;
      }
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch(e){
      return false;
    }
  }

  var toast, hideTimer;

  function show(number, copied){
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'call-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    // Reuse whatever email address the page already publishes.
    var mail = document.querySelector('a[href^="mailto:"]');
    var sub = t.sub + (mail
      ? t.or + '<a href="' + mail.getAttribute('href') + '">' + t.email + '</a>'
      : '') + '.';

    toast.innerHTML =
      '<button class="ct-x" type="button" aria-label="' + t.close + '">&times;</button>' +
      '<span class="ct-eyebrow">' + (copied ? t.copied : t.failed) + '</span>' +
      '<span class="ct-num">' + number + '</span>' +
      '<span class="ct-sub">' + sub + '</span>';

    toast.querySelector('.ct-x').addEventListener('click', hide);

    // Force a reflow so the transition runs when the toast is reused.
    void toast.offsetWidth;
    toast.classList.add('open');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 9000);
  }

  function hide(){
    clearTimeout(hideTimer);
    if(toast) toast.classList.remove('open');
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') hide();
  });

  document.addEventListener('click', function(e){
    var link = e.target.closest && e.target.closest('a[href^="tel:"]');
    if(!link) return;
    e.preventDefault();
    var number = pretty(link.getAttribute('href'));
    show(number, copy(number));
  });

  // Let people know the click does something before they click it.
  document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('a[href^="tel:"]');
    for(var i = 0; i < links.length; i++){
      if(!links[i].getAttribute('title')) links[i].setAttribute('title', t.hint);
    }
  });
})();
