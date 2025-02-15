export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: true,
    editorSupport: true
  },
  css: [
    // Otras hojas de estilo
    '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ],
  runtimeConfig: {
    // Variables públicas (accesibles en el cliente y el servidor)
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000',
    }, 
  },
})