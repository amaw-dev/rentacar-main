// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Auto-imports desde logic package
  imports: {
    dirs: [
      '../logic/src/composables/**',
      '../logic/src/stores/**',
      '../logic/src/utils/**'
    ]
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  // Configuración específica de alquicarros
  app: {
    head: {
      title: 'Alquicarros - Alquiler de vehículos',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
