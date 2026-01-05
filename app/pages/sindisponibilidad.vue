<template>
  <div class="text-white max-w-5xl mx-auto text-center pt-4">
    <div class="pb-2 justify-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px" fill="#ff0000" aria-hidden="true">
        <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
      </svg>
    </div>
    <h1 class="text-2xl font-bold mb-3">Sin Disponibilidad</h1>
    <p class="pt-4">
      Lamentamos notificarle que la gama solicitada no se encuentra disponible para la ciudad y fecha solicitadas.
    </p>
    <h2 class="text-xl font-semibold pt-4">¿Necesita Aprobación Inmediata?</h2>
    <p>
      Si requieres un vehículo con aprobación inmediata intenta reservar: <br/>
      Gama C - Compacto Mecánico <br> Gama F - Sedán Mecánico <br> Gama FX - Sedán Automático
    </p>
    <h2 class="text-xl font-semibold pt-4">Contáctanos</h2>
    <p class="pb-4">Si necesita asistencia adicional, estamos aquí para ayudarle.</p>
  </div>
</template>

<script setup lang="ts">
const { franchise } = useAppConfig()

useHead({
  title: `Sin Disponibilidad | ${franchise.shortname}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

useSeoMeta({
  description: 'La gama de vehículo solicitada no está disponible. Prueba con otras opciones de alquiler de carros.',
})
</script>