<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 font-sans text-gray-800">
    <!-- Header -->
    <UHeader class="sticky top-0 bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 shadow-md z-50 py-12 px-6 border-none" :toggle="false">
      <template #left>
        <picture>
          <img src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Flogo.png?alt=media&token=975cfe04-c619-44bc-964a-e6231ca92dfe" width="206" height="60"></img>
        </picture>
      </template>
      <template #right>
        <div class="mt-4 md:mt-0">
          <p class="text-lg text-white font-medium text-center md:text-right flex flex-row gap-2 items-center">
            <UIcon name="circle-flags:co"></UIcon>
            <span>Teléfono Colombia</span>
          </p>
          <ULink href="tel:+573016729250" class="w-full md:w-auto text-white flex flex-row gap-2 items-center">
            <UIcon name="logos:whatsapp-icon"></UIcon>
            <span>+57 301 672 9250</span>
          </ULink>
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
const { cities } = useData();
</script>