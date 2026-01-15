<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero orientation="horizontal">
      <template #headline>
        <div
          class="flex flex-row items-center justify-center space-x-0.5 text-white text-center"
        >
          <StarIcon cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <StarIcon cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <StarIcon cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <StarIcon cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <StarIcon cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <span class="ml-2 text-xs md:text-base">4.9 reviews</span>
        </div>
      </template>
      <template #title>
        <div class="hero-h1-critical text-white text-4xl text-center font-bold">
          <span class="block">
            <span class="block uppercase">ALQUILER</span>
            <span class="block">DE CARROS EN</span>
          </span>
          <span class="block tracking-wide colombia-sweep">COLOMBIA</span>
        </div>
      </template>
      <template #body>
        <div class="text-center justify-items-center">
          <div class="mb-4 text-white text-lg font-bold">
            ¿En que ciudad deseas recoger tu carro?
          </div>
          <div class="min-w-80 my-3">
            <SelectBranch />
          </div>
          <p class="text-base text-white">
            Contamos con 27 sedes a nivel nacional y una excelente reputación en
            alquiler de carros y camionetas que se adaptan a tu necesidad y
            presupuesto
          </p>
        </div>
      </template>
      <template #default>
        <ImagesFamily />
      </template>
    </UPageHero>

    <!-- Video Section -->
    <UPageSection
      id="video"
      orientation="horizontal"
      :reverse="true"
      class="bg-white text-black"
    >
      <template #title>
        <div class="text-2xl md:text-3xl text-center">
          <span class="block text-red-700">Hasta 60% de Descuento</span>
          <span class="block text-black">Reserva Ahora, Paga Después</span>
        </div>
      </template>
      <template #description>
        <div class="text-black text-center">
          Obtén hasta un 60% de descuento al reservar con anticipación. Aplica
          para todas las categorías: compactos, sedanes y camionetas. Reserva
          sin pago anticipado y asegura los mejores precios por planificar tu
          viaje con tiempo
        </div>
      </template>
      <template #default>
        <LazyImagesVideo hydrate-on-visible />
      </template>
    </UPageSection>

    <!-- Persona Section -->
    <UPageSection
      id="requisitos"
      orientation="horizontal"
      :reverse="true"
      class="bg-gray-200 text-black"
    >
      <template #title>
        <div class="text-2xl md:text-3xl text-center space-x-2">
          <span class="text-red-700">Requisitos</span>
          <span class="text-black">para tu alquiler</span>
        </div>
      </template>
      <template #description>
        <div class="text-black justify-items-center">
          <div class="mb-4 text-center">
            En {{ franchise.shortname }} tu experiencia es sin complicaciones...
          </div>
          <ul class="flex flex-col gap-4">
            <li class="flex items-start gap-2">
              <LocationIcon cls="text-red-600 size-5 mt-0.5" />
              <div>
                <div class="font-bold text-black">RESERVA PREVIA</div>
                <div class="text-black text-sm">(más anticipación más descuento)</div>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <LocationIcon cls="text-red-600 size-5 mt-0.5" />
              <div>
                <div class="font-bold text-black">DOCUMENTO DE IDENTIDAD</div>
                <div class="text-black text-sm">(18+ Cédula o pasaporte original)</div>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <LocationIcon cls="text-red-600 size-5 mt-0.5" />
              <div>
                <div class="font-bold text-black">TARJETA DE CRÉDITO</div>
                <div class="text-black text-sm">(Única forma de pago)</div>
              </div>
            </li>
            <li class="flex items-start gap-2">
              <LocationIcon cls="text-red-600 size-5 mt-0.5" />
              <div>
                <div class="font-bold text-black">LICENCIA DE CONDUCIR</div>
                <div class="text-black text-sm">(física y vigente)</div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template #default>
        <LazyImagesPersona hydrate-on-visible />
      </template>
    </UPageSection>

    <!-- Vehicle Category Section -->
    <UPageSection
      id="categorias"
      orientation="vertical"
      class="bg-white text-black"
      :ui="categoriasPageSectionUIConfig"
    >
      <template #title>
        <div class="text-2xl md:text-3xl text-center space-x-2">
          <span class="text-red-700">Tipos de Vehículos</span>
          <span class="text-black">ideales para tu necesidad</span>
        </div>
      </template>
      <template #description>
        <div class="text-black justify-items-center">
          <p>
            Cada estilo de vida tiene su vehículo perfecto. Ya sea la agilidad
            para la ciudad, la comodidad para los viajes largos o la potencia
            para la aventura, tenemos la llave para tus necesidades. <br />
            Descubre el que fue hecho para tí.
          </p>
        </div>
      </template>
      <template #default>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-0">
          <!-- Compacto -->
          <div class="flex flex-col items-center text-center">
            <LazyImagesCategoriasCompacto hydrate-on-visible />
            <h3 class="font-bold text-black text-lg mt-0">COMPACTO</h3>
            <p class="text-black mt-2">Practicidad urbana con estilo. La agilidad que necesitas en la ciudad</p>
            <LazyUModal hydrate-on-interaction class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-bold uppercase transition-colors">Ver disponibilidad</UButton>
            </LazyUModal>
          </div>
          <!-- Sedan -->
          <div class="flex flex-col items-center text-center">
            <LazyImagesCategoriasSedan hydrate-on-visible />
            <h3 class="font-bold text-black text-lg mt-0">SEDAN</h3>
            <p class="text-black mt-2">Confort y espacio. Disfruta cada viaje con la máxima comodidad</p>
            <LazyUModal hydrate-on-interaction class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-bold uppercase transition-colors">Ver disponibilidad</UButton>
            </LazyUModal>
          </div>
          <!-- Camioneta -->
          <div class="flex flex-col items-center text-center">
            <LazyImagesCategoriasSUV hydrate-on-visible />
            <h3 class="font-bold text-black text-lg mt-0">CAMIONETA</h3>
            <p class="text-black mt-2">Robustez y tamaño. Capacidad para dominar cualquier camino</p>
            <LazyUModal hydrate-on-interaction class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-bold uppercase transition-colors">Ver disponibilidad</UButton>
            </LazyUModal>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Testimonials Section -->
    <section id="testimonios" class="bg-gray-200 text-black py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl text-center space-x-2 mb-4">
          <span class="text-red-700">Testimonios</span>
          <span class="text-black">que comparten nuestros clientes</span>
        </h2>
        <p class="text-black text-center mb-8">Descubre por qué somos la opción preferida para alquilar carros en Colombia. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonio in testimonios"
            :key="testimonio.user.name"
            class="border border-gray-100 rounded-lg bg-gray-50 shadow-sm p-5 md:p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <!-- CLS fix: reservar espacio para avatar (48x48 = size 3xl) -->
            <div class="min-h-[48px]">
              <UUser
                size="3xl"
                v-bind="testimonio.user"
                :ui="testimonioUserUIConfig"
                loading="lazy"
              />
            </div>
            <p class="mt-4 text-gray-700">{{ testimonio.quote }}</p>
            <div class="flex flex-row mt-4">
              <StarIcon v-for="i in [1,2,3,4,5]" :key="i" cls="text-yellow-500 size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <UPageSection id="faqs" class="bg-white text-black">
      <div class="max-w-7xl mx-auto px-1 sm:px-2 lg:px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 space-x-2">
          <span class="text-red-700">Preguntas Frecuentes</span>
          <span class="text-black">sobre alquiler de carros</span>
        </h2>
        <p class="text-base text-center mb-4">
          Encuentra respuestas a las consultas más comunes sobre nuestro servicio de alquiler. Si tienes otra pregunta, contáctanos directamente.
        </p>
        <LazyUAccordion hydrate-on-interaction :items="faqs" :ui="faqAccordionUIConfig" class="max-w-4xl mx-auto">
          <template #default="{ item }">
            <div class="text-base font-medium text-gray-800 px-4" v-text="item.label"></div>
          </template>
          <template #content="{ item }">
            <div class="text-base text-gray-600 py-3 bg-gray-50 px-4 rounded-lg" v-text="item.content"></div>
          </template>
        </LazyUAccordion>
      </div>
    </UPageSection>
  </UPage>
</template>

<script lang="ts" setup>
/** types */
import type { FAQPage } from "schema-dts";
import type { Testimonial } from "#imports";

/** components */
import {
  IconsStarIcon as StarIcon,
  IconsLocationIcon as LocationIcon,
} from "#components";

const { faqs, franchise } = useAppConfig();

useBaseSEO();
useHomeBreadcrumb();

useSeoMeta({
  ogType: "website",
  ogTitle: franchise.title,
  ogDescription: franchise.description,
  ogImage: franchise.logo,
  ogImageAlt: franchise.shortname,
  ogImageType: "image/png",
  ogImageUrl: franchise.logo,
  ogImageWidth: "206",
  ogImageHeight: "60",
  ogUrl: franchise.website,
  ogLocale: "es_CO",
  ogSiteName: franchise.shortname,
  twitterCard: "summary_large_image",
  twitterTitle: franchise.title,
  twitterDescription: franchise.description,
  twitterImage: franchise.logo,
  twitterImageAlt: franchise.shortname,
});

useSchemaOrg([
  <FAQPage>{
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) =>
      defineQuestion({
        name: faq.label,
        acceptedAnswer: faq.content,
      })
    ),
  },
]);

useHead({
  link: [
    { rel: "canonical", href: franchise.website },
    // Preloads de imagen hero movidos a nuxt.config.ts para estar en HTML inicial
  ],
});

definePageMeta({
  colorMode: "dark",
});

const categoriasPageSectionUIConfig = {
  body: "mt-4 sm:mt-6",
};

const testimonios: Testimonial[] = franchise.testimonials;

// Add AggregateRating schema for testimonials (shows stars in Google SERPs)
useHomeAggregateRating()

// Add VideoObject schema for promotional video (enables video rich snippets)
usePromoVideoSchema()

// Add Promotion schema for 60% discount offer (promotional rich snippets)
useEarlyBookingPromotion()

const testimonioUserUIConfig = {
  name: "text-black",
  description: "text-gray-600",
};

const faqAccordionUIConfig = {
  item: "bg-gray-200 rounded-lg mb-2 px-2 pb-2 !border-0 !border-b-0",
  body: "!border-none",
  trailingIcon: "mr-2 transition-transform duration-200",
};

</script>
