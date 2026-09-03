// Make the "call" and "email" links useful on devices that can't act on them.
//
// On a phone, tel: and mailto: links work and nothing here changes.
//
// On a laptop or desktop they are often dead ends: a tel: link has nothing
// to dial with, and a mailto: link does nothing at all unless a desktop
// mail program is set up — which it isn't for anyone reading mail in a
// browser tab. So instead we copy the number or address to the clipboard,
// show it in a notice the visitor can read, and for email offer to open a
// compose window in the webmail they actually use.
(function(){
  // Phones and tablets: coarse pointer, no hover. Everything else is
  // treated as a device that cannot dial or open a mail program.
  var canDial = window.matchMedia &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if(canDial) return;

  var es = (document.documentElement.lang || '').toLowerCase().indexOf('es') === 0;
  var t = es ? {
    hintTel:   'Haga clic para copiar el número',
    hintMail:  'Haga clic para copiar la dirección',
    copied:    'Copiado a su portapapeles',
    failedTel: 'Nuestro número de teléfono',
    failedMail:'Nuestra dirección de correo',
    dial:      'Márquelo desde su teléfono',
    or:        ' o ',
    email:     'mándenos un correo',
    openIn:    'Escríbanos desde',
    mailApp:   'su aplicación de correo',
    close:     'Cerrar'
  } : {
    hintTel:   'Click to copy this number',
    hintMail:  'Click to copy this address',
    copied:    'Copied to your clipboard',
    failedTel: 'Our phone number',
    failedMail:'Our email address',
    dial:      'Dial it from your phone',
    or:        ', or ',
    email:     'email us',
    openIn:    'Write to us in',
    mailApp:   'your mail app',
    close:     'Close'
  };

  // Format 6239999911 as (623) 999-9911; leave anything unexpected alone.
  function pretty(href){
    var d = href.replace(/[^0-9]/g, '').replace(/^1/, '');
    return d.length === 10
      ? '(' + d.slice(0,3) + ') ' + d.slice(3,6) + '-' + d.slice(6)
      : href.replace(/^(tel|sms):/, '');
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

  function esc(s){
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  }

  // data-raw marks a link this script must leave alone, so the "your mail
  // app" option can still hand off to a real mail program.
  function out(href, text){
    return '<a data-raw href="' + esc(href) + '" target="_blank" rel="noopener">' + text + '</a>';
  }

  var toast, hideTimer;

  function show(value, isEmail, copied){
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'call-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
      // Don't yank the notice away while it's being read or used.
      toast.addEventListener('mouseenter', function(){ clearTimeout(hideTimer); });
      toast.addEventListener('mouseleave', arm);
    }

    var sub;
    if(isEmail){
      var to = encodeURIComponent(value);
      sub = t.openIn + ' ' +
        out('https://mail.google.com/mail/?view=cm&fs=1&to=' + to, 'Gmail') + ' · ' +
        out('https://outlook.live.com/mail/0/deeplink/compose?to=' + to, 'Outlook') + ' · ' +
        '<a data-raw href="mailto:' + esc(value) + '">' + t.mailApp + '</a>';
    } else {
      // Reuse whatever email address the page already publishes.
      var mail = document.querySelector('a[href^="mailto:"]:not([data-raw])');
      sub = t.dial + (mail
        ? t.or + '<a href="' + esc(mail.getAttribute('href')) + '">' + t.email + '</a>'
        : '') + '.';
    }

    toast.innerHTML =
      '<button class="ct-x" type="button" aria-label="' + t.close + '">&times;</button>' +
      '<span class="ct-eyebrow">' +
        (copied ? t.copied : (isEmail ? t.failedMail : t.failedTel)) + '</span>' +
      '<span class="ct-num' + (isEmail ? ' is-email' : '') + '">' + esc(value) + '</span>' +
      '<span class="ct-sub">' + sub + '</span>';

    toast.querySelector('.ct-x').addEventListener('click', hide);

    // Force a reflow so the transition runs when the toast is reused.
    void toast.offsetWidth;
    toast.classList.add('open');
    arm();
  }

  function arm(){
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 12000);
  }

  function hide(){
    clearTimeout(hideTimer);
    if(toast) toast.classList.remove('open');
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') hide();
  });

  document.addEventListener('click', function(e){
    if(!e.target.closest) return;
    var link = e.target.closest('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"]');
    if(!link || link.hasAttribute('data-raw')) return;
    e.preventDefault();
    var href = link.getAttribute('href');
    var isEmail = href.indexOf('mailto:') === 0;
    var value = isEmail
      ? href.slice(7).split('?')[0]
      : pretty(href);
    show(value, isEmail, copy(value));
  });

  // Let people know the click does something before they click it.
  document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"]');
    for(var i = 0; i < links.length; i++){
      if(links[i].hasAttribute('data-raw') || links[i].getAttribute('title')) continue;
      links[i].setAttribute('title',
        links[i].getAttribute('href').indexOf('mailto:') === 0 ? t.hintMail : t.hintTel);
    }
  });
})();
