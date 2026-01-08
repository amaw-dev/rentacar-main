<template>
  <div class="min-h-screen bg-gradient-to-b from-[#000073] via-blue-800 to-blue-900 font-sans text-gray-800">
    <!-- Header -->
    <UHeader
      class="bg-[#000073] z-50 py-4 md:py-6 px-6 border-none relative"
      mode="slideover"
      :toggle="{
        color: 'white',
        size: 'xl',
        class: 'text-white absolute right-4 top-4'
      }"
      :ui="{
        root: 'gap-4',
        slideover: 'bg-[#000073]'
      }"
     >
      <template #left>
        <!-- Móvil: Bandera diagonal en esquina + Logo centrado -->
        <div class="md:hidden">
          <IconsColombiaFlag cls="absolute top-0 left-0 h-14 w-auto -rotate-45 -translate-x-[40%] -translate-y-[40%]" />
          <NuxtLink to="/" aria-label="alquilatucarro" class="absolute left-1/2 -translate-x-1/2">
            <Logo cls="h-8 w-auto" />
          </NuxtLink>
        </div>
        <!-- Desktop: Bandera + Logo juntos como unidad -->
        <NuxtLink to="/" aria-label="alquilatucarro" class="hidden md:flex items-center gap-3">
          <IconsColombiaFlag cls="h-6 w-auto" />
          <Logo cls="h-10 w-auto" />
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
      <div class="max-w-7xl mx-auto px-4 space-y-6">
        <div>
          <NuxtLink to="/" aria-label="alquilatucarro">
            <Logo cls="h-10 w-auto mx-auto" />
          </NuxtLink>
        </div>
        <div class="text-2xl font-bold">Ciudades donde ofrecemos alquiler de carros</div>
        <div >
          Estamos presentes en más de 19 ciudades de Colombia como Bogotá, Medellín, Cali y Cartagena. Explora cada destino y reserva en la sede que más te convenga.
        </div>
        <div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-1 md:gap-3">
          <UButton
            v-for="city in cities"
            :to="city.link"
            class="text-white justify-center bg-blue-600 hover:bg-blue-800 rounded-lg py-3 w-full md:w-fit font-normal"
          >
            Alquiler de carros en <span class="font-bold">{{ city.name }}</span>
          </UButton>
        </div>
      </div>
    </section>

    <!-- Enlaces -->
    <section class="bg-[#000073] text-white py-8 lg:py-6">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <template v-for="(footerLink, index) in franchise.footerLinks">
            <NuxtLink
              :to="footerLink.link"
              v-text="footerLink.label"
              class="underline hover:no-underline"
            >
            </NuxtLink>
            <span class="hidden md:block" v-if="index != franchise.footerLinks.length - 1">|</span>
          </template>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <UFooter class="bg-black text-white text-center">
      <p class="text-white">
        copyright 2025 © Alquilatucarro renta car Colombia
      </p>
    </UFooter>

    <!-- Widget chat -->
    <UModal
      :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }"
    >
      <template #body>
        <div class="text-center space-y-10 pb-4 md:pb-6">
          <div>
            <p class="font-bold text-2xl text-black">¡Escríbenos!</p>
            <p class="text-gray-600">Estamos a un mensaje de distancia</p>
            <UButton
              size="xl"
              class="bg-[#25D366] hover:bg-[#128C7E] text-white mt-3"
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
          <div>
            <p class="font-bold text-2xl text-black">¡Llámanos!</p>
            <p class="text-gray-600">Hablemos por llamada local</p>
            <UButton
              color="info"
              size="xl"
              class="text-white mt-3"
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
        class="fixed bottom-4 right-4 md:bottom-8 z-50 rounded-full text-white"
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
    class: "text-white hover:text-white hover:bg-white/10",
  },
  {
    label: 'Sedes',
    to: '/#sedes',
    active: route.path.startsWith('#sedes'),
    class: "text-white hover:text-white hover:bg-white/10",
  },
  {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith('/blog'),
    class: "text-white hover:text-white hover:bg-white/10",
  },
  {
    label: 'Preguntas frecuentes',
    to: '/#faqs',
    active: route.path.startsWith('#faqs'),
    class: "text-white hover:text-white hover:bg-white/10",
  },
])

const { cities } = useData();
const { franchise } = useAppConfig();
import {
  IconsWhatsappIcon as WhatsappIcon,
  IconsPhoneIcon as PhoneIcon,
} from '#components'

</script>