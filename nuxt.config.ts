// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-gtag'],
  content: {
    documentDriven: true
  },

  routeRules: {
    '/': { prerender: true },
    '/index.es': { prerender: true },
  },

  tailwindcss: {
    config: {
      plugins: [
        require('@tailwindcss/typography')
      ]
    }
  },

  gtag: {
    id: 'G-14DSKD6GXC'
  },

  compatibilityDate: '2024-11-29',

  app: {
    head: {
      title: "$129 Arizona Discount Traffic Survival School",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }

})
