// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/scss/app.scss'],
  devtools: { enabled: true },
  ssr: true,
  app: {
    // baseURL: '/',
    // buildAssetsDir: '/assets/'
  },
  nitro: {
    // output: {
    //   publicDir: 'docs'
    // }
  }
})
