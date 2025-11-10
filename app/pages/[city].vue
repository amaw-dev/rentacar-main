<template>
    <div class="justify-items-center">
        <div class="text-white text-5xl mt-12">En construcción</div>
    </div>
</template>

<script setup lang="ts">
const { getCityById } = useData();
const { franchise } = useAppConfig();

const route = useRoute();
const cityParam = route.params.city;
const city = cityParam ? getCityById(cityParam as string) : undefined

useBaseSEO()

useHead({
  title: `${franchise.title} | ${city?.name}`,
  htmlAttrs: {
      lang: "es",
  },
  link: [
    {
      rel: 'canonical',
      href: `${franchise.website}/${cityParam}`
    }
  ]
})

definePageMeta({
    colorMode: 'dark',
    middleware: ['validate-city-params']
})

</script>
