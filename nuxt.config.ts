// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true
  },

  routeRules: {
    '/': { prerender: true }
  },

  tailwindcss: {
    config: {
      plugins: [
        require('@tailwindcss/typography')
      ]
    }
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
