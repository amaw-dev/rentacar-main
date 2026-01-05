<template>
  <div class="justify-items-center">
    <h1 class="text-white text-5xl mt-12">Blog en construcción</h1>
    <p class="text-white text-xl mt-4">Próximamente encontrarás contenido sobre alquiler de carros en Colombia</p>
  </div>
</template>

<script setup lang="ts">
const { franchise } = useAppConfig()

useHead({
  title: `Blog | ${franchise.shortname}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

useSeoMeta({
  description: 'Blog de Alquilatucarro - Próximamente tips y guías sobre alquiler de carros en Colombia.',
})
</script>
