<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 font-sans text-gray-800">
    <!-- Header -->
    <UHeader
      class="bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 shadow-md z-50 py-6 md:py-12 px-6 border-none"
      mode="slideover"
     >
      <template #left>
        <NuxtLink to="/" aria-label="alquilatucarro">
          <Logo />
        </NuxtLink>
      </template>
      <template #body>
        <UNavigationMenu color="neutral" orientation="vertical" :items="items" />
      </template>
      <template #right>
        <div class="hidden lg:block">
          <UNavigationMenu color="neutral" :items="items" />
        </div>
      </template>
    </UHeader>

    <slot></slot>

    <!-- Footer -->
    <UFooter class="text-white py-8 px-6 text-center">
      <div class="flex flex-col space-y-2">
        <p>
          <NuxtLink v-for="city in cities" :to="city.link" class="text-xs text-blue-500">
            Alquiler de carros en {{ city.name }} |
          </NuxtLink>
        </p>
        <p class="text-white">
          Copyright 2016 | Alquiler de carros en Colombia - rentar carro colombia
        </p>
        <p class="text-blue-500">
          <NuxtLink 
            to="https://storage.googleapis.com/alquilatucarro/rentacar-landing/2023/pdf/POL%C3%8DTICA%20DE%20PRIVACIDAD.pdf"
            target="_blank"
          >
            Términos y condiciones
          </NuxtLink>
          |
          <NuxtLink 
            to="https://storage.googleapis.com/alquilatucarro/rentacar-landing/2023/pdf/tratamiento-datos-alquilatucarro.pdf"
            target="_blank"
          >
            Política de tratamiento de datos personales
          </NuxtLink>
          |
          <NuxtLink 
            to="https://docs.google.com/forms/d/e/1FAIpQLSe5NLCil5hQNqsdPhwDM3DYe3wbGiUyr-2VK4RBTYE3YQbcug/viewform"
            target="_blank"
          >
            Quejas y reclamos
          </NuxtLink>
        </p>
      </div>
    </UFooter>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Requisitos',
    to: '/#requisitos',
    active: route.path.startsWith('#requisitos'),
    class: "text-white",
  },
  {
    label: 'Sedes',
    to: '/#sedes',
    active: route.path.startsWith('#sedes'),
    class: "text-highlighted",
  },
  {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith('/blog'),
    class: "text-highlighted",
  },
  {
    label: 'Preguntas frecuentes',
    to: '/#faqs',
    active: route.path.startsWith('#faqs'),
    class: "text-highlighted",
  },
])

const { cities } = useData();

</script>