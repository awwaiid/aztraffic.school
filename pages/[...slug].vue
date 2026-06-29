<template>
  <div>
    <div class="topbar">
      <div class="wrap">
        <span>Licensed by the Arizona MVD &amp; trained by the AZ Chapter, National Safety Council</span>
        <span class="lang">
          <a href="/">English</a>
          <a href="/index.es">Español</a>
        </span>
      </div>
    </div>

    <header class="nav">
      <div class="wrap">
        <NuxtLink class="brand" to="/">
          <span class="mark">139</span>
          <span><b>AZ Discount Traffic Survival School</b><small>Creative Safety Solutions, LLC</small></span>
        </NuxtLink>
        <div class="nav-cta">
          <a class="btn btn-call" href="tel:6028923570">📞 (602) 892-3570</a>
        </div>
      </div>
    </header>

    <main class="inner-page">
      <div class="wrap">
        <ContentDoc />
        <hr style="margin: 2rem 0; border-color: var(--line)">
        <p style="font-size:.88rem; color: var(--muted)">
          © 2024–2025 Creative Safety Solutions, LLC ($139 Arizona Discount Traffic Survival School) —
          <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink> ·
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.inner-page {
  padding: 48px 0 64px;
}

.inner-page :deep(h1) { font-family: 'Fraunces', Georgia, serif; font-size: 2.2rem; margin: 0 0 1rem; color: var(--ink) }
.inner-page :deep(h2) { font-family: 'Fraunces', Georgia, serif; font-size: 1.5rem; margin: 2rem 0 .75rem; color: var(--ink) }
.inner-page :deep(h3) { font-family: 'Fraunces', Georgia, serif; font-size: 1.2rem; margin: 1.5rem 0 .5rem; color: var(--ink) }
.inner-page :deep(p) { margin: 0 0 1.2rem; color: #43352a }
.inner-page :deep(ul), .inner-page :deep(ol) { padding-left: 1.5rem; margin: 0 0 1.2rem; color: #43352a }
.inner-page :deep(li) { margin: .3rem 0 }
.inner-page :deep(a) { color: var(--clay-dk) }
</style>
