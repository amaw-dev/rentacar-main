<template>
  <div class="min-h-screen bg-gradient-to-b from-[#000073] via-blue-800 to-blue-900 font-sans text-gray-800">
    <!-- Header -->
    <UHeader
      class="bg-[#000073] z-50 py-6 md:py-12 px-6 border-none relative"
      mode="slideover"
      :ui="{
        button: 'text-white hover:text-white',
        slideover: 'bg-[#000073]'
      }"
     >
      <template #left>
        <div class="hidden md:block">
          <ImagesCol100 />
        </div>
        <div class="hidden md:block">
          <ImagesCol224 />
        </div>
        <NuxtLink to="/" aria-label="alquilatucarro" class="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
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

    <!-- Enlaces ciudades -->
    <section id="sedes" class="bg-blue-700 text-white text-center py-12 lg:py-20">
      <UContainer class="space-y-6">
        <div>
          <NuxtLink to="/" aria-label="alquilatucarro">
            <Logo class="mx-auto" />
          </NuxtLink>
        </div>
        <div class="text-2xl font-bold">Ciudades donde ofrecemos alquiler de carros</div>
        <div >
          Estamos presentes en más de 19 ciudades de Colombia como Bogotá, Medellín, Cali y Cartagena. Explora cada destino y reserva en la sede que más te convenga.
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <UButton 
            v-for="city in cities" 
            :to="city.link" 
            class="text-white justify-center bg-blue-600 hover:bg-blue-800 rounded-lg py-1 w-fit"
          >
            Alquiler de carros en {{ city.name }}
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Enlaces -->
    <section class="text-white py-4 lg:py-6">
      <UContainer>
        <div class="flex flex-col md:flex-row items-center justify-center space-x-4">
          <template v-for="(footerLink, index) in franchise.footerLinks">
            <NuxtLink 
              :to="footerLink.link"
              v-text="footerLink.label"
              class="hover:underline"
            >
            </NuxtLink>
            <span class="hidden md:block" v-if="index != franchise.footerLinks.length - 1">|</span>
          </template>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <UFooter class="bg-black text-white text-center">
      <p class="text-white">
        copyright 2025 © Alquilatucarro renta car Colombia
      </p>
    </UFooter>

    <!-- Widget chat -->
    <UModal
      title="¿Chateamos?"
    >
      <template #body>
        <div class="text-center space-y-6">
          <div class="space-y-2">
            <p class="font-bold text-2xl">¿Chateamos?</p>
            <p>Estamos a un mensaje de distancia</p>
            <UButton 
              size="xl" 
              class="text-white"
              label="Whatsapp"
              target="_blank"
              :external="true"
              :to="franchise.whatsapp"
            >
              <template #leading>
                <WhatsappIcon cls="size-5" />
              </template>
            </UButton>
          </div>
          <div class="space-y-2">
            <p class="font-bold text-2xl">¿Charlamos?</p>
            <p>LLamanos y Hablamos!</p>
            <UButton 
              color="info" 
              size="xl" 
              class="text-white"
              :external="true"
              :label="franchise.phone"
              :to="`tel:${franchise.phone}`"
            >
              <template #leading>
                <PhoneIcon cls="size-5" />
              </template>
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
import { 
  IconsWhatsappIcon as WhatsappIcon,
  IconsPhoneIcon as PhoneIcon,
} from '#components'

</script>