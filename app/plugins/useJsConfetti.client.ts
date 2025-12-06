// plugins/confetti.client.ts
import JSConfetti from 'js-confetti'

export default defineNuxtPlugin((nuxtApp) => {
  // Inicializa la instancia de JSConfetti
  const confetti = new JSConfetti()

  // Inyecta la instancia en la aplicación para que esté disponible globalmente
  return {
    provide: {
      confetti: () => confetti
    }
  }
})