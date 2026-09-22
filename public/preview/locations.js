// Locations data — venue + exact Google Maps link preserved from original site
var LOCATIONS = [
  {city:"Buckeye", venue:"Holiday Inn Express & Suites Buckeye", addr:"445 S Watson Rd, Buckeye, AZ 85326", url:"https://www.google.com/maps/search/?api=1&query=445%20S%20Watson%20Rd%20Buckeye%2C%20AZ%2085326"},
  {city:"Casa Grande", venue:"Best Western Plus Casa Grande", addr:"1918 E Florence Blvd, Casa Grande, AZ 85122", url:"https://www.google.com/maps/search/?api=1&query=1918%20E%20Florence%20Blvd%2C%20Casa%20Grande%2C%20AZ%2085122"},
  {city:"Chandler", venue:"Homewood Suites Chandler", addr:"1221 S Spectrum Blvd, Chandler, AZ 85286", url:"https://www.google.com/maps/search/?api=1&query=1221%20S%20Spectrum%20Blvd%2C%20Chandler%2C%20AZ%2085286"},
  {city:"Chandler", venue:"Hyatt Place Chandler Fashion Center", addr:"3535 W Chandler Blvd, Chandler, AZ 85226", url:"https://www.google.com/maps/search/?api=1&query=3535%20W%20Chandler%20Blvd%2C%20Chandler%2C%20AZ%2085226"},
  {city:"Gilbert (Market St)", venue:"Hampton Inn & Suites", addr:"3265 S Market St, Gilbert, AZ 85297", url:"https://www.google.com/maps/search/?api=1&query=3265%20S%20Market%20St%2C%20Gilbert%2C%20AZ%2085297"},
  {city:"Glendale", venue:"Everhome Suites Glendale", addr:"9775 W Northern Ave, Glendale, AZ 85305", url:"https://www.google.com/maps/search/?api=1&query=9775%20W.%20Northern%20Ave%2C%20Glendale%2C%20AZ%2085305"},
  {city:"Goodyear", venue:"SpringHill Suites Goodyear", addr:"1370 N Bullard Ave, Goodyear, AZ 85338", url:"https://www.google.com/maps/search/?api=1&query=1370%20N%20Bullard%20Ave%2C%20Goodyear%2C%20AZ%2085338"},
  {city:"Happy Valley", venue:"Best Western Plus Executive Residency", addr:"2108 W Whispering Wind Dr, Phoenix, AZ 85085", url:"https://www.google.com/maps/search/?api=1&query=2108%20W%20Whispering%20Wind%20Dr%2C%20Phoenix%2C%20AZ%2085085"},
  {city:"Mesa / Chandler", venue:"Holiday Inn Mesa", addr:"1600 S Country Club Dr, Mesa, AZ 85210", url:"https://www.google.com/maps/search/?api=1&query=1600%20S%20Country%20Club%20Dr%2C%20Mesa%2C%20AZ%2085210"},
  {city:"Mesa Gateway", venue:"Holiday Inn Express & Suites Gilbert-Mesa Gateway", addr:"5530 S Power Rd, Gilbert, AZ 85295", url:"https://www.google.com/maps/search/?api=1&query=5530%20S%20Power%20Rd%2C%20Gilbert%2C%20AZ%2085295"},
  {city:"Peoria", venue:"Comfort Suites Peoria", addr:"8473 W Paradise Lane, Peoria, AZ 85382", url:"https://www.google.com/maps/search/?api=1&query=8473%20W%20Paradise%20Lane%2C%20Peoria%2C%20AZ%2085382"},
  {city:"Phoenix", venue:"MetroCenter Business Park", addr:"10000 31st Ave, Phoenix, AZ 85051", url:"https://www.google.com/maps/search/?api=1&query=10000%2031st%20Ave%2C%20Phoenix%2C%20AZ%2085051"},
  {city:"Queen Creek", venue:"Hampton Inn Queen Creek", addr:"20768 E Maya Rd, Queen Creek, AZ 85142", url:"https://www.google.com/maps/search/?api=1&query=20768%20E%20Maya%20rd%2C%20Queen%20Creek%2C%20AZ%2085142"},
  {city:"Scottsdale", venue:"Hampton Inn & Suites Scottsdale", addr:"10101 N Scottsdale Rd, Scottsdale, AZ 85253", url:"https://www.google.com/maps/search/?api=1&query=10101%20N%20Scottsdale%20Rd%2C%20Scottsdale%2C%20AZ%2085253"},
  {city:"Surprise", venue:"Best Western Plus Surprise", addr:"13337 W Grand Ave, Surprise, AZ 85374", url:"https://www.google.com/maps/search/?api=1&query=13337%20W%20Grand%20Ave%2C%20Surprise%2C%20AZ%2085374"},
  {city:"Tempe", venue:"Hampton Inn Tempe / Phx Airport", addr:"1550 S 52nd St, Tempe, AZ 85281", url:"https://www.google.com/maps/search/?api=1&query=1550%20S%2052nd%20St%2C%20Tempe%2C%20AZ%2085281"},
  {city:"Tolleson", venue:"Best Western Tolleson", addr:"8421 W McDowell Rd, Tolleson, AZ 85353", url:"https://www.google.com/maps/search/?api=1&query=8421%20W.%20McDowell%20Rd%2C%20Tolleson%2C%20AZ%2085353"},
  {city:"Tucson", venue:"Country Inn & Suites", addr:"705 N Freeway Blvd, Tucson, AZ 85745", url:"https://www.google.com/maps/search/?api=1&query=705%20N.%20Freeway%20Blvd%2C%20Tucson%2C%20AZ%2085745"},
  {city:"Wickenburg", venue:"Cobblestone Hotel & Suites", addr:"575 Bass Road, Wickenburg, AZ 85390", url:"https://www.google.com/maps/search/?api=1&query=575%20Bass%20Road%2C%20Wickenburg%2C%20AZ%2085390"},
  {city:"Yuma", venue:"Everhome Suites Yuma", addr:"2011 E 18th St, Yuma, AZ 85365", url:"https://www.google.com/maps/search/?api=1&query=2011%20E%2018th%20St%2C%20Yuma%2C%20AZ%2085365"}
];

// Upcoming virtual class dates.
// To add a class, add a line: "YYYY-MM-DD", (year, then 2-digit month, then 2-digit day).
// To remove one, delete its line. Nothing else here needs to change —
// past dates drop off the page on their own, and the day of the week is
// calculated automatically so it can never be wrong.
var VIRTUAL_CLASS_DATES = [
  "2026-09-04",
  "2026-09-05",
  "2026-09-09",
  "2026-09-12",
  "2026-09-13",
  "2026-09-18",
  "2026-09-19",
  "2026-09-23",
  "2026-09-26",
  "2026-09-27"
];

// Renders the upcoming virtual class schedule, grouped by month, soonest first.
// labels: { dayNames[7] (Sun-first), monthNames[12], next, empty }
function renderSchedule(labels){
  var el = document.getElementById('scheduleList');
  if(!el) return;

  var today = new Date();
  today.setHours(0,0,0,0);

  var dates = VIRTUAL_CLASS_DATES.map(function(s){
    var p = s.split('-');
    return new Date(parseInt(p[0],10), parseInt(p[1],10)-1, parseInt(p[2],10));
  }).filter(function(d){
    return d >= today;
  }).sort(function(a,b){
    return a - b;
  });

  if(!dates.length){
    el.innerHTML = '<p class="sched-empty">'+labels.empty+'</p>';
    return;
  }

  var html = '';
  var monthKey = '';
  dates.forEach(function(d, i){
    var key = d.getFullYear()+'-'+d.getMonth();
    if(key !== monthKey){
      if(monthKey !== '') html += '</div>';
      monthKey = key;
      html += '<h4 class="sched-month">'+labels.monthNames[d.getMonth()]+' '+d.getFullYear()+'</h4><div class="sched-grid">';
    }
    html += '<div class="sched-card">'+
      (i === 0 ? '<span class="sched-flag">'+labels.next+'</span>' : '')+
      '<span class="sched-day">'+labels.dayNames[d.getDay()]+'</span>'+
      '<span class="sched-date">'+labels.monthNames[d.getMonth()]+' '+d.getDate()+'</span>'+
    '</div>';
  });
  html += '</div>';
  el.innerHTML = html;
}

// Initialize the searchable locations grid + mobile menu.
// labels: { all, showing, of, locations, directions, schedule }
function initSite(labels){
  if(labels.schedule) renderSchedule(labels.schedule);
  var grid = document.getElementById('locGrid');
  var countEl = document.getElementById('locCount');
  function render(list){
    grid.innerHTML = list.map(function(l){
      return '<div class="loc">'+
        '<span class="city">'+l.city+'</span>'+
        '<span class="venue">'+l.venue+'</span>'+
        '<span class="addr">'+l.addr+'</span>'+
        '<a class="map" href="'+l.url+'" target="_blank" rel="noopener">📍 '+labels.directions+'</a>'+
      '</div>';
    }).join('');
    countEl.textContent = list.length === LOCATIONS.length
      ? labels.all.replace('{n}', LOCATIONS.length)
      : labels.showing.replace('{n}', list.length).replace('{total}', LOCATIONS.length);
  }
  render(LOCATIONS);

  document.getElementById('locSearch').addEventListener('input', function(e){
    var q = e.target.value.trim().toLowerCase();
    if(!q){ render(LOCATIONS); return; }
    render(LOCATIONS.filter(function(l){
      return (l.city+' '+l.venue+' '+l.addr).toLowerCase().indexOf(q) !== -1;
    }));
  });

  // Mobile menu
  var hamb = document.getElementById('hamb');
  var menu = document.getElementById('menu');
  if(hamb && menu){
    hamb.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.addEventListener('click', function(e){ if(e.target.tagName==='A') menu.classList.remove('open'); });
  }
}
