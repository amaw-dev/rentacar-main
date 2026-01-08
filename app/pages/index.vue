<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero orientation="horizontal">
      <template #headline>
        <div
          class="flex flex-row justify-center space-x-2 text-white text-center"
        >
          <StarIcon cls="size-5" />
          <StarIcon cls="size-5" />
          <StarIcon cls="size-5" />
          <StarIcon cls="size-5" />
          <StarIcon cls="size-5" />
          <span>4.9 reviews</span>
        </div>
      </template>
      <template #title>
        <h1 class="text-white text-4xl text-center font-bold">
          <span class="block">
            <span class="block uppercase">ALQUILER</span>
            <span class="block">DE CARROS EN</span>
          </span>
          <span class="block tracking-wide colombia-sweep">COLOMBIA</span>
        </h1>
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
        <h2 class="text-2xl md:text-3xl text-center">
          <span class="block text-red-700">Hasta 60% de Descuento</span>
          <span class="block text-black">Reserva Ahora, Paga Después</span>
        </h2>
      </template>
      <template #description>
        <div class="text-black text-center">
          Obtén hasta un 60% de descuento al reservar con anticipación. Aplica
          para todas las categorías: compactos, sedanes y camionetas. Reserva
          sin pago anticipado y asegura los mejores precios por planificar tu
          viaje con tiempo
        </div>
      </template>
      <template #body>
        <div class="text-center justify-items-center">
          <div class="font-bold text-lg">
            ¿En que ciudad deseas recoger tu carro?
          </div>
          <div class="min-w-80 my-3">
            <SelectBranch variant="gray" />
          </div>
        </div>
      </template>
      <template #default>
        <ImagesVideo />
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
        <h2 class="text-2xl md:text-3xl text-center lg:text-left space-x-2">
          <span class="text-red-700">Requisitos</span>
          <span class="text-black">para tu alquiler</span>
        </h2>
      </template>
      <template #description>
        <div class="text-black justify-items-center">
          <div class="mb-4">
            En {{ franchise.shortname }} tu experiencia es sin complicaciones...
          </div>
          <ul class="flex flex-col gap-1">
            <li>
              <UPageFeature
                title="RESERVA PREVIA"
                description="(más anticipación más descuento)"
                :ui="requisitosPageFeatureUIConfig"
              >
                <template #leading>
                  <LocationIcon cls="text-red-600 size-5" />
                </template>
              </UPageFeature>
            </li>
            <li>
              <UPageFeature
                title="DOCUMENTO DE IDENTIDAD"
                description="(18+ Cédula o pasaporte original)"
                :ui="requisitosPageFeatureUIConfig"
              >
                <template #leading>
                  <LocationIcon cls="text-red-600 size-5" />
                </template>
              </UPageFeature>
            </li>
            <li>
              <UPageFeature
                title="TARJETA DE CRÉDITO"
                description="(Única forma de pago)"
                :ui="requisitosPageFeatureUIConfig"
              >
                <template #leading>
                  <LocationIcon cls="text-red-600 size-5" />
                </template>
              </UPageFeature>
            </li>
            <li>
              <UPageFeature
                title="LICENCIA DE CONDUCIR"
                :ui="requisitosPageFeatureUIConfig"
              >
                <template #leading>
                  <LocationIcon cls="text-red-600 size-5" />
                </template>
              </UPageFeature>
            </li>
          </ul>
        </div>
      </template>
      <template #body>
        <div class="text-center justify-items-center">
          <div class="font-bold text-lg">
            ¿En que ciudad deseas recoger tu carro?
          </div>
          <div class="min-w-80 my-3">
            <SelectBranch />
          </div>
        </div>
      </template>
      <template #default>
        <ImagesPersona />
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
        <h2 class="text-2xl md:text-3xl text-center space-x-2">
          <span class="text-red-700">Tipos de Vehículos</span>
          <span class="text-black">ideales para tu necesidad</span>
        </h2>
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
            <ImagesCategoriasCompacto />
            <h3 class="font-bold text-black text-lg mt-0">COMPACTO</h3>
            <p class="text-black mt-2">Practicidad urbana con estilo. La agilidad que necesitas en la ciudad</p>
            <UModal class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-[#000073] hover:bg-[#000090] text-white px-8 py-3">Ver disponibilidad</UButton>
            </UModal>
          </div>
          <!-- Sedan -->
          <div class="flex flex-col items-center text-center">
            <ImagesCategoriasSedan />
            <h3 class="font-bold text-black text-lg mt-0">SEDAN</h3>
            <p class="text-black mt-2">Confort y espacio. Disfruta cada viaje con la máxima comodidad</p>
            <UModal class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-[#000073] hover:bg-[#000090] text-white px-8 py-3">Ver disponibilidad</UButton>
            </UModal>
          </div>
          <!-- Camioneta -->
          <div class="flex flex-col items-center text-center">
            <ImagesCategoriasSUV />
            <h3 class="font-bold text-black text-lg mt-0">CAMIONETA</h3>
            <p class="text-black mt-2">Robustez y tamaño. Capacidad para dominar cualquier camino</p>
            <UModal class="mt-4" :ui="{ content: 'bg-white', close: 'bg-black text-white rounded-full' }">
              <template #body>
                <div class="mb-4 text-black text-lg">
                  ¿En que ciudad<br>deseas recoger tu carro?
                </div>
                <div class="min-w-80 my-3">
                  <SelectBranch variant="gray" />
                </div>
              </template>
              <UButton class="bg-[#000073] hover:bg-[#000090] text-white px-8 py-3">Ver disponibilidad</UButton>
            </UModal>
          </div>
        </div>
      </template>
    </UPageSection>

    <!-- Testimonials Section -->
    <UPageSection
      id="testimonios"
      orientation="vertical"
      class="bg-gray-200 text-black"
      :ui="testimoniosPageSectionUIConfig"
    >
      <template #title>
        <h2 class="text-2xl md:text-3xl text-center space-x-2">
          <span class="text-red-700">Testimonios</span>
          <span class="text-black">que comparten nuestros clientes</span>
        </h2>
      </template>
      <template #description>
        <p class="text-black">Descubre por qué somos la opción preferida para alquilar carros en Colombia. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.</p>
      </template>
      <template #default>
        <UPageGrid>
          <UPageCard
            v-for="testimonio in testimonios"
            :description="testimonio.quote"
            variant="solid"
            :ui="testimonioPageCardUIConfig"
          >
            <template #title>
              <UUser
                size="3xl"
                v-bind="testimonio.user"
                :ui="testimonioUserUIConfig"
                loading="lazy"
              />
            </template>
            <template #footer>
              <div class="flex flex-row">
                <StarIcon cls="text-yellow-500 size-6" />
                <StarIcon cls="text-yellow-500 size-6" />
                <StarIcon cls="text-yellow-500 size-6" />
                <StarIcon cls="text-yellow-500 size-6" />
                <StarIcon cls="text-yellow-500 size-6" />
              </div>
            </template>
          </UPageCard>
        </UPageGrid>
      </template>
    </UPageSection>

    <!-- FAQ Section -->
    <UPageSection id="faqs" class="bg-white text-black">
      <UContainer class="px-1 sm:px-2 lg:px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 space-x-2">
          <span class="text-red-700">Preguntas Frecuentes</span>
          <span class="text-black">resolvemos tus dudas</span>
        </h2>
        <p class="text-base text-center mb-6">
          Encuentra respuestas a las consultas más comunes sobre nuestro servicio de alquiler. Si tienes otra pregunta, contáctanos directamente.
        </p>
        <UAccordion :items="faqs" :ui="faqAccordionUIConfig">
          <template #default="{ item }">
            <div class="text-base font-medium text-gray-800 px-4" v-text="item.label"></div>
          </template>
          <template #content="{ item }">
            <div class="text-base text-gray-600 py-3 bg-gray-50 px-4 rounded-lg" v-text="item.content"></div>
          </template>
        </UAccordion>
      </UContainer>
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
    {
      rel: "preload",
      as: "image",
      href: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.avif?alt=media&token=a14e3f1c-428e-40b2-ad1e-0d724579e487",
      fetchpriority: "high",
    },
  ],
});

definePageMeta({
  colorMode: "dark",
});

const requisitosPageFeatureUIConfig = {
  leadingIcon: "bg-red-600",
  title: "text-black",
  description: "text-black",
};

const categoriasPageSectionUIConfig = {
  body: "mt-4 sm:mt-6",
};

const categoriasPageCardUIConfig = {
  root: "flex flex-col",
  body: "order-2",
  footer: "order-3 mx-auto",
  container: "order-1",
};

const testimonios: Testimonial[] = franchise.testimonials;

// Add AggregateRating schema for testimonials (shows stars in Google SERPs)
useHomeAggregateRating()

// Add VideoObject schema for promotional video (enables video rich snippets)
usePromoVideoSchema()

// Add Promotion schema for 60% discount offer (promotional rich snippets)
useEarlyBookingPromotion()

const testimoniosPageSectionUIConfig = {
  title: "text-black",
};

const testimonioPageCardUIConfig = {
  root: "border-1 border-gray-100 rounded-lg bg-gray-50 shadow",
  description: "mt-4 text-gray-700",
};

const testimonioUserUIConfig = {
  name: "text-black",
  description: "text-gray-600",
};

const faqAccordionUIConfig = {
  item: "bg-gray-200 rounded-lg mb-2 px-2 pb-2 border-none",
  body: "border-none",
  trailingIcon: "mr-2",
};

</script>
