<template>
  <CityPage v-if="city" :city/>
</template>
<script lang="ts" setup>
const { city } = useCityPageSEO()
</script>


