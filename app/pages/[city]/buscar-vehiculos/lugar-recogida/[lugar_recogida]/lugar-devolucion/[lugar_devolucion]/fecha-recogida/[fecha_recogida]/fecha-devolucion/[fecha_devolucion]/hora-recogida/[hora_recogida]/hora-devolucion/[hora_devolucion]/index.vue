<template>
    <CityPage v-if="city" :city="city" />
</template>

<script setup lang="ts">

import { useSearchByRouteParams, useCityPageSEO } from '#imports';

definePageMeta({
  middleware: ['validate-search-params', 'validate-city-params']
});

const { city } = useCityPageSEO();

useSearchByRouteParams()

// [city]/buscar-vehiculos/lugar-recogida/[lugar_recogida]/lugar-devolucion/[lugar_devolucion]/fecha-recogida/[fecha_recogida]/fecha-devolucion/[fecha_devolucion]/hora-recogida/[hora_recogida]/hora-devolucion/[hora_devolucion]
// [city]/buscar-vehiculos/referido/[referido]/lugar-recogida/[lugar_recogida]/lugar-devolucion/[lugar_devolucion]/fecha-recogida/[fecha_recogida]/fecha-devolucion/[fecha_devolucion]/hora-recogida/[hora_recogida]/hora-devolucion/[hora_devolucion]
</script>
