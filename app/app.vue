<template>
  <UApp :locale="es" :toaster>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script lang="ts" setup>
import { es } from '@nuxt/ui/locale'
const toaster =  { expand: true, position: "top-center", duration: 10000 }
useBaseSEO();
</script>