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
      <UModal>
        <template #body>
          <div class="text-center space-y-6">
            <div class="space-y-2">
              <p class="font-bold text-2xl">¿Chateamos?</p>
              <p>Estamos a un mensaje de distancia</p>
              <UButton 
                icon="logos:whatsapp-icon" 
                size="xl" 
                class="text-white"
                label="Whatsapp"
                target="_blank"
                :external="true"
                :to="franchise.whatsapp"
              >
              </UButton>
            </div>
            <div class="space-y-2">
              <p class="font-bold text-2xl">¿Charlamos?</p>
              <p>LLamanos y Hablamos!</p>
              <UButton 
                color="info" 
                icon="lucide:phone" 
                size="xl" 
                class="text-white"
                :external="true"
                :label="franchise.phone"
                :to="`tel:${franchise.phone}`"
              >
              </UButton>
            </div>
          </div>
        </template>
        <UButton
          icon="lucide:message-circle-plus"
          square
          class="fixed bottom-4 right-4 z-50 rounded-full animate-bounce text-white"
          size="2xl"
          color="primary"
        />
      </UModal>
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
const { franchise } = useAppConfig();

</script>