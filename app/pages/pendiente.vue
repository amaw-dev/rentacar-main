<template>
  <div class="text-white max-w-5xl mx-auto text-center pt-4">
    <div class="pb-2 justify-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50px" height="50px" fill="#ff8a00" aria-hidden="true">
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
      </svg>
    </div>
    <h1 class="text-2xl font-bold">Reserva en Proceso</h1>
    <p class="pt-4">
      <strong>Gracias por elegirnos.</strong> <br/>
      Tu reserva está siendo procesada y pronto recibirás la confirmación por correo.
    </p>
    <h2 class="text-xl font-semibold pt-4">Próximos Pasos</h2>
    <p>
      Revisa tu correo y SPAM para ver la confirmación <br/>
      (tiempo de respuesta promedio 5 horas) <br>
      ¡¡Pronto te confirmaremos!!
    </p>
    <h2 class="text-xl font-semibold pt-4">¿Necesita Aprobación Inmediata?</h2>
    <p class="pb-4">
      Si requieres un vehículo con aprobación inmediata intenta reservar: <br/>
      Gama C - Compacto Mecánico <br> Gama F - Sedán Mecánico <br> Gama FX - Sedán Automático
    </p>
  </div>
</template>

<script setup lang="ts">
const { franchise } = useAppConfig()

useHead({
  title: `Reserva en Proceso | ${franchise.shortname}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

useSeoMeta({
  description: 'Tu reserva de alquiler de carro está siendo procesada. Recibirás confirmación por correo.',
})
</script>