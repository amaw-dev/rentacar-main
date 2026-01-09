<template>
  <div class="min-h-screen bg-gradient-to-b from-[#000073] via-blue-800 to-blue-900 font-sans text-gray-800">
    <!-- Header -->
    <UHeader
      v-model:open="mobileMenuOpen"
      class="bg-[#000073] z-50 py-4 md:py-6 px-6 border-none relative"
      mode="slideover"
      :toggle="{
        color: 'white',
        size: 'xl',
        class: 'absolute right-4 top-4',
        'aria-label': 'Abrir menú de navegación'
      }"
      :ui="{
        root: 'gap-4',
        content: 'bg-white',
        header: 'bg-white relative',
        body: 'bg-white'
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
        <!-- Botón cerrar manual -->
        <UButton
          icon="lucide:x"
          color="neutral"
          variant="solid"
          size="sm"
          class="absolute top-4 right-4 bg-black text-white rounded-full hover:bg-gray-800"
          aria-label="Cerrar menú"
          @click="mobileMenuOpen = false"
        />
        <UNavigationMenu
          orientation="vertical"
          :items="mobileItems"
          :ui="{
            link: 'text-lg py-3 font-medium',
            linkLabel: 'text-lg'
          }"
        />
      </template>
      <template #right>
        <div class="hidden lg:block">
          <UNavigationMenu color="neutral" :items="items" />
        </div>
      </template>
    </UHeader>

    <main>
      <slot></slot>
    </main>

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
              class="bg-[#25D366] hover:bg-[#128C7E] text-white mt-3 transition-colors"
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
        aria-label="Abrir chat de contacto"
      />
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute();

// Estado del menú móvil slideover
const mobileMenuOpen = ref(false);

// Items para menú desktop
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    to: '/',
    class: "text-white hover:text-white hover:bg-white/10",
  },
  {
    label: 'Programa Referidos',
    to: '/gana',
    active: route.path.startsWith('/gana'),
    class: "text-white hover:text-white hover:bg-white/10",
  },
  {
    label: 'Preguntas frecuentes',
    to: '/gana#preguntas',
    class: "text-white hover:text-white hover:bg-white/10",
  },
])

// Items para menú móvil
const mobileItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Programa Referidos',
    to: '/gana',
    active: route.path.startsWith('/gana'),
  },
  {
    label: 'Preguntas frecuentes',
    to: '/gana#preguntas',
  },
])

const { franchise } = useAppConfig();
import {
  IconsWhatsappIcon as WhatsappIcon,
  IconsPhoneIcon as PhoneIcon,
} from '#components'
</script>
