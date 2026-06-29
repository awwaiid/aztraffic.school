<template>
  <div>
    <!-- Top bar -->
    <div class="topbar">
      <div class="wrap">
        <span>Licensed by the Arizona MVD &amp; trained by the AZ Chapter, National Safety Council</span>
        <span class="lang">
          <a class="active" href="/">English</a>
          <a href="/index.es">Español</a>
        </span>
      </div>
    </div>

    <!-- Nav -->
    <header class="nav">
      <div class="wrap">
        <a class="brand" href="#top">
          <span class="mark">139</span>
          <span><b>AZ Discount Traffic Survival School</b><small>Creative Safety Solutions, LLC</small></span>
        </a>
        <nav class="menu" id="menu">
          <a href="#why">Why us</a>
          <a href="#expect">What to expect</a>
          <a href="#locations">Locations</a>
          <a href="#details">Class details</a>
          <a href="#reviews">Reviews</a>
          <a href="#register">Register</a>
        </nav>
        <div class="nav-cta">
          <a class="btn btn-ghost" href="#register">Find a class</a>
          <a class="btn btn-call" href="tel:6028923570">📞 (602) 892-3570</a>
          <button class="hamb" id="hamb" aria-label="Open menu" @click="toggleMenu">☰</button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero" id="top" style="padding:0">
      <div class="wrap">
        <div>
          <p class="eyebrow">Arizona Traffic Survival School · Statewide</p>
          <h1>Get it done in <span class="em">one day</span> — with people who actually want to help.</h1>
          <p class="lead">A friendly, MVD-licensed class to get you back on track. One day, one flat price, twenty-plus locations across Arizona — plus virtual. English &amp; Spanish.</p>
          <div class="actions">
            <a class="btn btn-call" href="tel:6028923570">📞 Call to register — (602) 892-3570</a>
            <a class="btn btn-ghost" href="#locations">See locations</a>
          </div>
          <p class="reassure"><span>💬</span><span>Nervous or not sure if you need to be here? That's okay. Call us and we'll walk you through everything live on the phone — no judgment, just help.</span></p>
        </div>
        <div class="price-card">
          <span class="tag">Flat rate · no surprises</span>
          <div class="big"><sup>$</sup>139</div>
          <p class="sub">In-person. One day, 8 hours. <em>(Virtual adds a small handling fee.)</em></p>
          <ul>
            <li><span class="check">✓</span> One-day class, 8:00 a.m.–4:30 p.m.</li>
            <li><span class="check">✓</span> In person or virtual via Zoom</li>
            <li><span class="check">✓</span> English &amp; Spanish</li>
            <li><span class="check">✓</span> We notify the Arizona MVD for you</li>
            <li><span class="check">✓</span> Certificate provided for your records</li>
          </ul>
          <a class="btn btn-call" href="tel:6028923570">📞 Call (602) 892-3570</a>
          <p class="callnote">We'll go over the current schedule and get you booked, live on the phone.</p>
        </div>
      </div>
    </section>

    <!-- Trust strip -->
    <div class="trust">
      <div class="wrap">
        <span><b>MVD-licensed</b> · School #5175</span>
        <span><b>20+</b> locations statewide</span>
        <span><b>$139</b> flat — not cheap, just fair</span>
        <span><b>English &amp; Spanish</b></span>
        <span><b>In person or virtual</b></span>
      </div>
    </div>

    <!-- Why us -->
    <section id="why">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Welcome</p>
          <h2>We're licensed, we're experienced — and we love what we do.</h2>
          <p>Most people don't choose to be here. We get that. So we've built the kind of class we'd want to attend ourselves: clear, respectful, and run by instructors who treat you like a person, not a case number. Prepared people save lives — and we're here to help you become one.</p>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="ic">🤝</div>
            <h3>Genuine care</h3>
            <p>We use your name, we answer your questions, and we make a long day feel a whole lot shorter. You're a person here, not a number.</p>
          </div>
          <div class="why-card">
            <div class="ic">🎓</div>
            <h3>Expert instructors</h3>
            <p>NSC-trained and MVD-licensed. Our team knows the material cold and knows how to teach it so it actually sticks.</p>
          </div>
          <div class="why-card">
            <div class="ic">💵</div>
            <h3>Fair, flat pricing</h3>
            <p>$139, every class, every location. Not cheap — fair. No upsells, no surprises waiting at check-in.</p>
          </div>
          <div class="why-card">
            <div class="ic">📍</div>
            <h3>Close to home</h3>
            <p>Twenty-plus locations from Buckeye to Yuma to Tucson, plus a virtual option. There's almost certainly one near you.</p>
          </div>
          <div class="why-card">
            <div class="ic">💻</div>
            <h3>In person or virtual</h3>
            <p>Join us in a comfortable hotel conference room or attend live from home via Zoom. Your choice.</p>
          </div>
          <div class="why-card">
            <div class="ic">🗣️</div>
            <h3>English &amp; Spanish</h3>
            <p>Clases en inglés y español. Take the class in the language you're most comfortable in.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What to expect -->
    <section class="expect" id="expect">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">No surprises</p>
          <h2>Here's exactly how the day works.</h2>
          <p>Walking in not knowing what to expect is the worst part. So here's the whole thing, start to finish.</p>
        </div>
        <div class="steps">
          <div class="step">
            <div class="n">1</div>
            <h3>Call &amp; schedule</h3>
            <p>Ring us at (602) 892-3570. We'll find a date and location that works and get you on the list.</p>
          </div>
          <div class="step">
            <div class="n">2</div>
            <h3>Check in</h3>
            <p>Arrive at 7:45 a.m. with a valid photo ID and your $139 payment. We'll get you settled.</p>
          </div>
          <div class="step">
            <div class="n">3</div>
            <h3>Attend the class</h3>
            <p>8:00 a.m.–4:30 p.m. of interactive learning — presentations, videos, and workbook activities.</p>
          </div>
          <div class="step">
            <div class="n">4</div>
            <h3>You're done</h3>
            <p>We notify the Arizona MVD electronically and hand you a certificate for your records. That's it.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations -->
    <section id="locations">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">20+ locations statewide</p>
          <h2>Find the class nearest you.</h2>
          <p>We hold classes in comfortable hotel conference rooms all across Arizona. Type a city or zip to filter, then tap a location for directions.</p>
        </div>
        <div class="loc-tools">
          <div class="search">
            <span class="mag">🔍</span>
            <input type="text" v-model="locSearch" placeholder="Search by city or zip — e.g. Mesa, 85210, Tucson…" aria-label="Search locations">
          </div>
          <span class="loc-count">{{ filteredLocations.length === locations.length ? 'Showing all ' + locations.length + ' locations' : 'Showing ' + filteredLocations.length + ' of ' + locations.length + ' locations' }}</span>
        </div>
        <div class="loc-grid">
          <div class="loc" v-for="loc in filteredLocations" :key="loc.addr">
            <span class="city">{{ loc.city }}</span>
            <span class="venue">{{ loc.venue }}</span>
            <span class="addr">{{ loc.addr }}</span>
            <a class="map" :href="loc.url" target="_blank" rel="noopener">📍 Get directions →</a>
          </div>
        </div>
        <div class="virtual-note">
          <div>
            <h3>💻 Prefer to attend from home?</h3>
            <p>We offer the full class live online via Zoom, in English and Spanish. A one-time NSC waiver is required first — call us and we'll explain the simple steps.</p>
          </div>
          <a class="btn btn-call" href="tel:6028923570" style="background:#fff;color:var(--clay-dk)">📞 Ask about virtual</a>
        </div>
      </div>
    </section>

    <!-- Class details -->
    <section class="details" id="details">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Class details &amp; requirements</p>
          <h2>Everything you need to know before class day.</h2>
          <p>Tap any topic to expand. Still have a question? Call (602) 892-3570 — we're happy to help.</p>
        </div>

        <details class="acc" open>
          <summary>General information <span class="plus">+</span></summary>
          <div class="body">
            <p>Arizona Traffic Survival School is a one-day, eight-hour class for people who voluntarily attend or are required to attend by the MVD or a court. Classes run <strong>8:00 a.m. to 4:30 p.m.</strong> and are offered in English and Spanish, both in person and virtually via Zoom.</p>
            <p>This interactive course includes presentations, videos, and workbook exercises. <strong>Active participation is mandatory for course credit.</strong> We electronically notify the Arizona MVD upon completion, and your instructor provides a completion certificate for your records.</p>
          </div>
        </details>

        <details class="acc">
          <summary>In-person class details <span class="plus">+</span></summary>
          <div class="body">
            <ul>
              <li><strong>Arrival time:</strong> 7:45 a.m. for check-in</li>
              <li><strong>Cost:</strong> $139 (exact amount required)</li>
            </ul>
            <p><strong>Required at check-in:</strong></p>
            <ul>
              <li>Valid photo ID</li>
              <li>Payment or proof of payment</li>
            </ul>
            <p><strong>Payment options:</strong></p>
            <ul>
              <li>Invoice (must be requested in advance)</li>
              <li>Money order (payable to $139 AZ Discount TSS)</li>
              <li>Cash (exact amount only — no change provided)</li>
            </ul>
          </div>
        </details>

        <details class="acc">
          <summary>Virtual class requirements <span class="plus">+</span></summary>
          <div class="body">
            <p><strong>Prerequisites:</strong></p>
            <ul>
              <li>A one-time waiver from the Arizona Chapter, National Safety Council (602-222-3381)</li>
              <li>Contact us after receiving waiver approval to register</li>
            </ul>
            <p><strong>Cost structure:</strong></p>
            <ul>
              <li>Base cost: $139</li>
              <li>Shipping &amp; handling: $10 (for workbook delivery)</li>
              <li>Typical total: $149</li>
            </ul>
            <p><strong>Required materials:</strong> A physical workbook (no digital version available).</p>
            <p><strong>Workbook pickup options:</strong></p>
            <ul>
              <li>In-person pickup ($139 payment required)</li>
              <li>FedEx delivery to a physical address (no PO boxes)</li>
            </ul>
          </div>
        </details>

        <details class="acc">
          <summary>Technology requirements (virtual) <span class="plus">+</span></summary>
          <div class="body">
            <ul>
              <li><strong>Check-in deadline:</strong> 7:30 a.m. (Phoenix, Arizona MST)</li>
              <li><strong>Equipment:</strong> Computer or tablet (preferred over phone), reliable internet, webcam and microphone</li>
              <li><strong>Power:</strong> A power source for the full 8-hour duration</li>
              <li><strong>Software:</strong> The latest version of Zoom</li>
            </ul>
          </div>
        </details>

        <details class="acc">
          <summary>Virtual class conduct guidelines <span class="plus">+</span></summary>
          <div class="body">
            <p><strong>Environment:</strong></p>
            <ul>
              <li>A quiet, distraction-free space with a neutral background</li>
              <li>Professional attire (no offensive content)</li>
              <li>Must be at a desk or table (no participating from bed)</li>
              <li>No simultaneous activities (work, childcare, etc.)</li>
            </ul>
            <p><strong>Participation:</strong></p>
            <ul>
              <li>Must be visible and audible throughout class</li>
              <li>Full attention required; class may be monitored or recorded</li>
            </ul>
            <p><strong>Important:</strong> You must arrange childcare in advance, as full attention and participation are required throughout the class.</p>
            <p>The instructor reserves the right to enforce the dress code and participation requirements. Technical preparation, including Zoom familiarity, is the participant's responsibility. Zoom video tutorials are available for reference.</p>
          </div>
        </details>
      </div>
    </section>

    <!-- Reviews -->
    <section id="reviews">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">What students say</p>
          <h2>Nobody wants to be here — and they leave glad they came.</h2>
          <p>A few words from people who walked in dreading the day.</p>
        </div>
        <div class="rev-grid">
          <div class="rev">
            <div class="stars">★★★★★</div>
            <p>"I was dreading this all week and it turned out to be the easiest part of my whole situation. The instructor was kind, the price was exactly what they said, and I was out by 4:30. Highly recommend."</p>
            <div class="who"><span class="av">M</span><span><b>Maria G.</b><span>Mesa, AZ</span></span></div>
          </div>
          <div class="rev">
            <div class="stars">★★★★★</div>
            <p>"Called and got everything explained in five minutes. No hidden fees, no runaround. They even notified the MVD for me so I didn't have to worry about it. Worth every penny."</p>
            <div class="who"><span class="av">J</span><span><b>James T.</b><span>Tucson, AZ</span></span></div>
          </div>
          <div class="rev">
            <div class="stars">★★★★★</div>
            <p>"Did the virtual class from home and it was so convenient. The instructor actually made the day interesting and used everyone's names. Best $139 I've spent on something I didn't want to do."</p>
            <div class="who"><span class="av">D</span><span><b>Denise R.</b><span>Phoenix, AZ</span></span></div>
          </div>
        </div>
        <p class="rev-note">★★★★★ &nbsp;Find us on Google to read more reviews and leave your own.</p>
      </div>
    </section>

    <!-- Register -->
    <section class="register" id="register">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Search &amp; register</p>
          <h2>Find a class and sign up.</h2>
          <p>Use the official Arizona Chapter, National Safety Council tool below to search classes and register. The fastest way, though, is simply to call us.</p>
        </div>
        <div class="reg-tip">
          <b>Good news:</b> contrary to what the form says, you do <b>not</b> need a TSS Order letter, Suspension letter, Proof of Assignment, or a copy of your Motor Vehicle Record to enroll. You may ignore that part of the form.
        </div>
        <div class="reg-frame">
          <iframe title="Search for classes and register — Arizona Chapter, National Safety Council"
            src="https://azstatetss.org/remote/student-reg-search.php?school_id=5175&key=ffd2257b"
            loading="lazy"></iframe>
        </div>
        <p class="reg-or">Rather talk to a real person? <a href="tel:6028923570">📞 Call (602) 892-3570</a> and we'll get you booked.</p>
      </div>
    </section>

    <!-- CTA band -->
    <section class="cta-band">
      <div class="wrap">
        <h2>Ready to get it behind you?</h2>
        <p>One call. One day. One flat price. We'll take it from here.</p>
        <a class="btn btn-call" href="tel:6028923570">📞 Call (602) 892-3570</a>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="wrap">
        <div class="cols">
          <div style="max-width:300px">
            <b style="font-family:'Fraunces',Georgia,serif;font-size:1.1rem;display:block;margin-bottom:8px">$139 AZ Discount Traffic Survival School</b>
            <span>Licensed by the Arizona MVD and trained by the AZ Chapter, National Safety Council. A service of Creative Safety Solutions, LLC.</span>
          </div>
          <div>
            <h4>Get in touch</h4>
            <div class="ft-links">
              <a href="tel:6028923570">📞 (602) 892-3570</a>
              <a href="mailto:kandy.trafficsafety@gmail.com">✉️ kandy.trafficsafety@gmail.com</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <div class="ft-links">
              <a href="#locations">Locations</a>
              <a href="#details">Class details</a>
              <a href="#register">Register</a>
              <a href="/index.es">Español</a>
            </div>
          </div>
          <div>
            <h4>Legal</h4>
            <div class="ft-links">
              <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
              <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            </div>
          </div>
        </div>
        <div class="legal">
          <span>© 2024–2025 Creative Safety Solutions, LLC — $139 Arizona Discount Traffic Survival School. School #5175.</span>
          <span>Prepared people save lives.</span>
        </div>
      </div>
    </footer>

    <!-- Floating mobile call button -->
    <a class="btn btn-call float-call" href="tel:6028923570" aria-label="Call to register">📞 Call now</a>
  </div>
</template>

<script setup>
useHead({
  title: '$139 Arizona Discount Traffic Survival School | MVD-Licensed, Statewide',
  meta: [
    { name: 'description', content: "Arizona's friendly, MVD-licensed Traffic Survival School. One-day class, flat $139, 20+ locations statewide plus virtual. English & Spanish. Call (602) 892-3570 to register." }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap' },
  ]
})

const locSearch = ref('')

const locations = [
  { city: 'Buckeye', venue: 'Holiday Inn Express & Suites Buckeye', addr: '445 S Watson Rd, Buckeye, AZ 85326', url: 'https://www.google.com/maps/search/?api=1&query=445%20S%20Watson%20Rd%20Buckeye%2C%20AZ%2085326' },
  { city: 'Casa Grande', venue: 'Best Western Plus Casa Grande', addr: '1918 E Florence Blvd, Casa Grande, AZ 85122', url: 'https://www.google.com/maps/search/?api=1&query=1918%20E%20Florence%20Blvd%2C%20Casa%20Grande%2C%20AZ%2085122' },
  { city: 'Chandler', venue: 'Hampton Inn & Suites Chandler', addr: '1231 S Spectrum Blvd, Chandler, AZ 85286', url: 'https://www.google.com/maps/search/?api=1&query=1231%20S%20Spectrum%20Blvd%2C%20Chandler%2C%20AZ%2085286' },
  { city: 'Chandler', venue: 'Hyatt Place Chandler Fashion Center', addr: '3535 W Chandler Blvd, Chandler, AZ 85226', url: 'https://www.google.com/maps/search/?api=1&query=3535%20W%20Chandler%20Blvd%2C%20Chandler%2C%20AZ%2085226' },
  { city: 'Gilbert (Market St)', venue: 'Hampton Inn & Suites', addr: '3265 S Market St, Gilbert, AZ 85297', url: 'https://www.google.com/maps/search/?api=1&query=3265%20S%20Market%20St%2C%20Gilbert%2C%20AZ%2085297' },
  { city: 'Glendale', venue: 'Everhome Suites Glendale', addr: '9775 W Northern Ave, Glendale, AZ 85305', url: 'https://www.google.com/maps/search/?api=1&query=9775%20W.%20Northern%20Ave%2C%20Glendale%2C%20AZ%2085305' },
  { city: 'Goodyear', venue: 'SpringHill Suites Goodyear', addr: '1370 N Bullard Ave, Goodyear, AZ 85338', url: 'https://www.google.com/maps/search/?api=1&query=1370%20N%20Bullard%20Ave%2C%20Goodyear%2C%20AZ%2085338' },
  { city: 'Happy Valley', venue: 'Best Western Plus Executive Residency', addr: '2108 W Whispering Wind Dr, Phoenix, AZ 85085', url: 'https://www.google.com/maps/search/?api=1&query=2108%20W%20Whispering%20Wind%20Dr%2C%20Phoenix%2C%20AZ%2085085' },
  { city: 'Mesa / Chandler', venue: 'Holiday Inn Mesa', addr: '1600 S Country Club Dr, Mesa, AZ 85210', url: 'https://www.google.com/maps/search/?api=1&query=1600%20S%20Country%20Club%20Dr%2C%20Mesa%2C%20AZ%2085210' },
  { city: 'Mesa Gateway', venue: 'Holiday Inn Express & Suites Gilbert-Mesa Gateway', addr: '5530 S Power Rd, Gilbert, AZ 85295', url: 'https://www.google.com/maps/search/?api=1&query=5530%20S%20Power%20Rd%2C%20Gilbert%2C%20AZ%2085295' },
  { city: 'Peoria', venue: 'Comfort Suites Peoria', addr: '8473 W Paradise Lane, Peoria, AZ 85382', url: 'https://www.google.com/maps/search/?api=1&query=8473%20W%20Paradise%20Lane%2C%20Peoria%2C%20AZ%2085382' },
  { city: 'Phoenix', venue: 'MetroCenter Business Park', addr: '10000 31st Ave, Phoenix, AZ 85051', url: 'https://www.google.com/maps/search/?api=1&query=10000%2031st%20Ave%2C%20Phoenix%2C%20AZ%2085051' },
  { city: 'Queen Creek', venue: 'Hampton Inn Queen Creek', addr: '20768 E Maya Rd, Queen Creek, AZ 85142', url: 'https://www.google.com/maps/search/?api=1&query=20768%20E%20Maya%20rd%2C%20Queen%20Creek%2C%20AZ%2085142' },
  { city: 'Scottsdale', venue: 'Hampton Inn & Suites Scottsdale', addr: '10101 N Scottsdale Rd, Scottsdale, AZ 85253', url: 'https://www.google.com/maps/search/?api=1&query=10101%20N%20Scottsdale%20Rd%2C%20Scottsdale%2C%20AZ%2085253' },
  { city: 'Surprise', venue: 'Best Western Plus Surprise', addr: '13337 W Grand Ave, Surprise, AZ 85374', url: 'https://www.google.com/maps/search/?api=1&query=13337%20W%20Grand%20Ave%2C%20Surprise%2C%20AZ%2085374' },
  { city: 'Tempe', venue: 'Hampton Inn Tempe / Phx Airport', addr: '1550 S 52nd St, Tempe, AZ 85281', url: 'https://www.google.com/maps/search/?api=1&query=1550%20S%2052nd%20St%2C%20Tempe%2C%20AZ%2085281' },
  { city: 'Tolleson', venue: 'Best Western Tolleson', addr: '8421 W McDowell Rd, Tolleson, AZ 85353', url: 'https://www.google.com/maps/search/?api=1&query=8421%20W.%20McDowell%20Rd%2C%20Tolleson%2C%20AZ%2085353' },
  { city: 'Tucson', venue: 'Country Inn & Suites', addr: '705 N Freeway Blvd, Tucson, AZ 85745', url: 'https://www.google.com/maps/search/?api=1&query=705%20N.%20Freeway%20Blvd%2C%20Tucson%2C%20AZ%2085745' },
  { city: 'Wickenburg', venue: 'Cobblestone Hotel & Suites', addr: '575 Bass Road, Wickenburg, AZ 85390', url: 'https://www.google.com/maps/search/?api=1&query=575%20Bass%20Road%2C%20Wickenburg%2C%20AZ%2085390' },
  { city: 'Yuma', venue: 'Everhome Suites Yuma', addr: '2011 E 18th St, Yuma, AZ 85365', url: 'https://www.google.com/maps/search/?api=1&query=2011%20E%2018th%20St%2C%20Yuma%2C%20AZ%2085365' },
]

const filteredLocations = computed(() => {
  const q = locSearch.value.trim().toLowerCase()
  if (!q) return locations
  return locations.filter(l => (l.city + ' ' + l.venue + ' ' + l.addr).toLowerCase().includes(q))
})

function toggleMenu() {
  const menu = document.getElementById('menu')
  menu?.classList.toggle('open')
}

if (process.client) {
  document.addEventListener('click', (e) => {
    if (e.target.closest('#menu a')) {
      document.getElementById('menu')?.classList.remove('open')
    }
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ink:     #241a14;
  --night:   #2c2118;
  --sand:    #fbf6ee;
  --sand-2:  #f3e9da;
  --clay:    #c25a2b;
  --clay-dk: #a4471f;
  --ember:   #e08a3c;
  --gold:    #d9a441;
  --sage:    #5e6b54;
  --line:    #e3d6c2;
  --muted:   #6f6256;
  --white:   #ffffff;
  --shadow:  0 1px 2px rgba(60,40,20,.06), 0 8px 28px rgba(120,70,30,.10);
  --radius:  16px;
}

* { box-sizing: border-box }
html { scroll-behavior: smooth }

body {
  margin: 0;
  background: var(--sand);
  color: var(--ink);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; line-height: 1.08; font-weight: 600; letter-spacing: -.01em; margin: 0 }
a { color: var(--clay-dk) }
img { max-width: 100% }
.wrap { max-width: 1140px; margin: 0 auto; padding: 0 24px }
.eyebrow { font-family: 'Inter'; font-size: .78rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--clay); margin: 0 0 14px }

/* Top bar */
.topbar { background: var(--night); color: #f6ecdd; font-size: .84rem }
.topbar .wrap { display: flex; flex-wrap: wrap; gap: 8px 22px; align-items: center; justify-content: space-between; padding-top: 9px; padding-bottom: 9px }
.topbar a { color: #f6ecdd; text-decoration: none }
.topbar a:hover { color: var(--gold) }
.topbar .lang a { padding: 2px 8px; border-radius: 999px }
.topbar .lang a.active { background: var(--gold); color: var(--night); font-weight: 700 }

/* Sticky nav */
header.nav { position: sticky; top: 0; z-index: 50; background: rgba(251,246,238,.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line) }
header.nav .wrap { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; padding-bottom: 14px; gap: 16px }
.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--ink) }
.brand .mark { flex: none; width: 42px; height: 42px; border-radius: 11px; background: linear-gradient(135deg,var(--gold),var(--clay)); display: grid; place-items: center; color: #fff; font-family: 'Fraunces', Georgia, serif; font-weight: 700; font-size: 1.18rem; box-shadow: var(--shadow) }
.brand b { font-family: 'Fraunces', Georgia, serif; font-weight: 700; font-size: 1.06rem; display: block; line-height: 1.05 }
.brand small { font-size: .74rem; color: var(--muted); letter-spacing: .02em }
nav.menu { display: flex; gap: 26px; align-items: center }
nav.menu a { text-decoration: none; color: var(--ink); font-weight: 500; font-size: .95rem }
nav.menu a:hover { color: var(--clay) }
.btn { display: inline-flex; align-items: center; gap: 9px; font-weight: 700; text-decoration: none; border-radius: 999px; padding: 13px 22px; font-size: .98rem; border: 0; cursor: pointer; transition: transform .12s ease, box-shadow .12s ease }
.btn:hover { transform: translateY(-1px) }
.btn-call { background: var(--clay); color: #fff; box-shadow: 0 6px 18px rgba(194,90,43,.32) }
.btn-call:hover { background: var(--clay-dk) }
.btn-ghost { background: transparent; color: var(--ink); border: 1.5px solid var(--line) }
.btn-ghost:hover { border-color: var(--clay); color: var(--clay) }
.nav-cta { display: flex; gap: 10px; align-items: center }
.hamb { display: none; background: none; border: 0; font-size: 1.5rem; cursor: pointer; color: var(--ink) }

/* Hero */
.hero {
  position: relative; overflow: hidden;
  background: radial-gradient(120% 80% at 88% -10%, rgba(224,138,60,.30), transparent 55%),
    radial-gradient(90% 70% at 0% 110%, rgba(94,107,84,.16), transparent 60%),
    var(--sand);
  border-bottom: 1px solid var(--line)
}
.hero .wrap { display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px; align-items: center; padding-top: 64px; padding-bottom: 64px }
.hero h1 { font-size: clamp(2.3rem,5vw,3.5rem); margin: 0 0 18px }
.hero h1 .em { color: var(--clay); font-style: italic }
.hero p.lead { font-size: 1.18rem; color: #43352a; margin: 0 0 26px; max-width: 34ch }
.hero .actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center }
.hero .reassure { margin-top: 22px; font-size: .92rem; color: var(--muted); display: flex; gap: 8px; align-items: flex-start }
.price-card { position: relative; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow) }
.price-card .tag { position: absolute; top: -14px; left: 28px; background: var(--sage); color: #fff; font-size: .72rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px }
.price-card .big { font-family: 'Fraunces', Georgia, serif; font-size: 3.6rem; font-weight: 700; color: var(--ink); line-height: 1 }
.price-card .big sup { font-size: 1.4rem; vertical-align: super; color: var(--clay) }
.price-card .sub { color: var(--muted); margin: 2px 0 18px }
.price-card ul { list-style: none; padding: 0; margin: 0 0 22px }
.price-card li { display: flex; gap: 11px; align-items: flex-start; padding: 7px 0; font-size: .97rem; border-bottom: 1px dashed var(--line) }
.price-card li:last-child { border-bottom: 0 }
.check { flex: none; width: 22px; height: 22px; border-radius: 50%; background: var(--sand-2); color: var(--sage); display: grid; place-items: center; font-size: .8rem; margin-top: 1px }
.price-card .btn-call { width: 100%; justify-content: center; font-size: 1.05rem; padding: 15px }
.price-card .callnote { text-align: center; font-size: .82rem; color: var(--muted); margin: 10px 0 0 }

/* Trust strip */
.trust { background: var(--night); color: #f2e6d6 }
.trust .wrap { display: flex; flex-wrap: wrap; gap: 14px 40px; justify-content: center; padding-top: 18px; padding-bottom: 18px; font-size: .92rem }
.trust b { color: var(--gold) }

/* Sections */
section { padding: 74px 0 }
.section-head { max-width: 62ch; margin: 0 0 40px }
.section-head h2 { font-size: clamp(1.9rem,3.6vw,2.7rem); margin: 0 0 14px }
.section-head p { color: var(--muted); font-size: 1.08rem; margin: 0 }

/* Why cards */
.why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px }
.why-card { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow) }
.why-card .ic { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; font-size: 1.4rem; margin-bottom: 16px; background: var(--sand-2) }
.why-card h3 { font-size: 1.22rem; margin: 0 0 8px }
.why-card p { margin: 0; color: var(--muted); font-size: .97rem }

/* Steps */
.expect { background: var(--sand-2) }
.steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px }
.step { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px 22px }
.step .n { font-family: 'Fraunces', Georgia, serif; font-weight: 700; font-size: 1.05rem; color: #fff; background: var(--clay); width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; margin-bottom: 14px }
.step h3 { font-size: 1.08rem; margin: 0 0 6px }
.step p { margin: 0; font-size: .92rem; color: var(--muted) }

/* Locations */
.loc-tools { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 26px }
.search { flex: 1 1 260px; position: relative }
.search input { width: 100%; padding: 13px 16px 13px 44px; border: 1.5px solid var(--line); border-radius: 999px; font-size: 1rem; font-family: inherit; background: var(--white) }
.search input:focus { outline: none; border-color: var(--clay) }
.search .mag { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--muted) }
.loc-count { font-size: .9rem; color: var(--muted) }
.loc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px }
.loc { background: var(--white); border: 1px solid var(--line); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 4px; transition: transform .12s ease, box-shadow .12s ease }
.loc:hover { transform: translateY(-2px); box-shadow: var(--shadow) }
.loc .city { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 1.12rem; color: var(--ink) }
.loc .venue { font-size: .95rem; color: #4a3c30 }
.loc .addr { font-size: .86rem; color: var(--muted); margin-bottom: 10px }
.loc .map { margin-top: auto; font-size: .88rem; font-weight: 600; color: var(--clay); text-decoration: none; display: inline-flex; gap: 6px; align-items: center }
.loc .map:hover { color: var(--clay-dk) }
.virtual-note { margin-top: 24px; background: var(--sage); color: #f2f4ee; border-radius: var(--radius); padding: 24px 28px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between }
.virtual-note h3 { color: #fff; font-size: 1.25rem; margin: 0 0 4px }
.virtual-note p { margin: 0; opacity: .92; font-size: .95rem }

/* Accordion */
.details { background: var(--sand-2) }
.acc { background: var(--white); border: 1px solid var(--line); border-radius: 14px; margin-bottom: 12px; overflow: hidden }
.acc summary { cursor: pointer; list-style: none; padding: 20px 24px; font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 1.16rem; display: flex; justify-content: space-between; align-items: center; gap: 16px }
.acc summary::-webkit-details-marker { display: none }
.acc summary .plus { flex: none; width: 28px; height: 28px; border-radius: 50%; background: var(--sand-2); color: var(--clay); display: grid; place-items: center; font-size: 1.2rem; transition: transform .2s }
.acc[open] summary .plus { transform: rotate(45deg) }
.acc .body { padding: 0 24px 22px }
.acc .body p { margin: 0 0 12px; color: #43352a }
.acc .body ul { margin: 0 0 12px; padding-left: 20px; color: #43352a }
.acc .body li { margin: 5px 0 }
.acc .body strong { color: var(--ink) }

/* Reviews */
.rev-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px }
.rev { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; box-shadow: var(--shadow); display: flex; flex-direction: column }
.stars { color: var(--gold); font-size: 1.05rem; letter-spacing: 2px; margin-bottom: 12px }
.rev p { margin: 0 0 18px; font-size: 1.02rem; color: #3a2e24; font-style: italic; line-height: 1.6 }
.rev .who { margin-top: auto; display: flex; align-items: center; gap: 12px }
.rev .av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg,var(--ember),var(--clay)); color: #fff; display: grid; place-items: center; font-weight: 700; font-family: 'Fraunces', Georgia, serif }
.rev .who b { display: block; font-size: .95rem }
.rev .who span { font-size: .82rem; color: var(--muted) }
.rev-note { text-align: center; margin-top: 30px; color: var(--muted); font-size: .92rem }

/* Register */
.register { background: var(--night); color: #f4ead9 }
.register .section-head h2 { color: #fff }
.register .section-head p { color: #d6c6b2 }
.reg-tip { background: rgba(217,164,65,.14); border: 1px solid rgba(217,164,65,.4); border-radius: 14px; padding: 18px 22px; margin-bottom: 24px; font-size: .96rem; color: #f4ead9 }
.reg-tip b { color: var(--gold) }
.reg-frame { background: #fff; border-radius: var(--radius); padding: 8px; box-shadow: var(--shadow) }
.reg-frame iframe { width: 100%; min-height: 560px; border: 0; border-radius: 10px; display: block }
.reg-or { text-align: center; margin: 26px 0 0; font-size: 1.02rem; color: #d6c6b2 }
.reg-or a { color: var(--gold); font-weight: 700; text-decoration: none }

/* CTA band */
.cta-band { background: linear-gradient(135deg,var(--clay),var(--ember)); color: #fff; text-align: center }
.cta-band h2 { font-size: clamp(1.9rem,4vw,2.8rem); color: #fff; margin: 0 0 12px }
.cta-band p { font-size: 1.12rem; opacity: .95; margin: 0 0 26px }
.cta-band .btn-call { background: #fff; color: var(--clay-dk); font-size: 1.15rem; padding: 16px 30px; box-shadow: 0 8px 24px rgba(0,0,0,.18) }
.cta-band .btn-call:hover { background: var(--sand) }

/* Footer */
footer { background: var(--night); color: #c9b9a6; padding: 46px 0 30px; font-size: .92rem; border-top: 1px solid rgba(255,255,255,.08) }
footer .cols { display: flex; flex-wrap: wrap; gap: 36px; justify-content: space-between; margin-bottom: 30px }
footer a { color: #e3d3bf; text-decoration: none }
footer a:hover { color: var(--gold) }
footer h4 { color: #fff; font-family: 'Inter', sans-serif; font-size: .82rem; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 12px }
footer .ft-links { display: flex; flex-direction: column; gap: 8px }
footer .legal { border-top: 1px solid rgba(255,255,255,.08); padding-top: 20px; display: flex; flex-wrap: wrap; gap: 14px; justify-content: space-between; font-size: .84rem; color: #9c8d7c }

/* Floating mobile call */
.float-call { position: fixed; right: 18px; bottom: 18px; z-index: 60; display: none; box-shadow: 0 10px 26px rgba(194,90,43,.5) }

@media (max-width: 900px) {
  .hero .wrap { grid-template-columns: 1fr; gap: 34px; padding-top: 44px; padding-bottom: 44px }
  .why-grid, .rev-grid, .steps, .loc-grid { grid-template-columns: 1fr 1fr }
  nav.menu { display: none }
  .hamb { display: block }
  nav.menu.open { display: flex; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; background: var(--sand); border-bottom: 1px solid var(--line); padding: 16px 24px; gap: 14px }
}

@media (max-width: 620px) {
  .why-grid, .rev-grid, .steps, .loc-grid { grid-template-columns: 1fr }
  section { padding: 54px 0 }
  .nav-cta .btn-ghost { display: none }
  .float-call { display: inline-flex }
}

@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto; transition: none !important }
}
</style>
