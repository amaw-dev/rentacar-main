<template>
  <div class="max-w-5xl mx-auto text-center text-white">
    
    <div class="pt-4 justify-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="green" width="50px" height="50px">
      <!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. -->
      <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
      </svg>
      
    </div>
    <h5 class="pt-2">
      <strong>Reserva Confirmada</strong>
    </h5>
    <h5>Código:</h5>
    <h2>
      <strong>{{ reserveCode }}</strong>
    </h2>
    <p class="font-bold">
      <b>¡Gracias por tu reserva!</b>
    </p>
    <p>
      Recibiras todos los detalles en tu correo, si no lo encuentras, revisa SPAM o correo no deseado
    </p>
    <p>
      <b>Necesita ayuda</b> <br>
      <b>Modificar:</b> Haz una nueva reserva y la anterior se cancelará automáticamente. <br>
      <b>Cancelar:</b> Responde al correo que te enviemos solicitando la cancelación de reserva.
    </p>
    <p>
      <b>Contactanos</b>  <br>
      Si necesitas asistencia adicional, estamos aquí para ayudarte.
    </p>
    <p class="pb-5">¡Buen viaje y disfruta de la aventura!</p>

  </div>
</template>

<script setup lang="ts">

const { $confetti } = useNuxtApp();

const route = useRoute();
const reserveCode = route.params.reserveCode;

onMounted(() => $confetti().addConfetti() )

</script>
