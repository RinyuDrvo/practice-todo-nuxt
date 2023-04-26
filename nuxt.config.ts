// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vitest'],
  runtimeConfig: {
    public: {
      environment: process.env.NODE_ENV,
    },
  },
})
