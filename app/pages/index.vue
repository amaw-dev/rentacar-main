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
        <h1 class="text-white text-4xl text-center">
          <span class="block">
            <span class="block font-bold uppercase">ALQUILER</span>
            <span class="block">DE CARROS EN</span>
          </span>
          <span class="block italic">COLOMBIA</span>
        </h1>
      </template>
      <template #body>
        <div class="text-center justify-items-center">
          <div class="mb-4 text-white text-2xl">
            ¿En que ciudad deseas recoger tu carro?
          </div>
          <div class="min-w-80 my-3">
            <SelectBranch />
          </div>
          <p class="text-white">
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
        <h2 class="text-center">
          <span class="block text-red-700">Hasta 60% de Descuento</span>
          <span class="block text-black text-4xl">Reserva Ahora, Paga Después</span>
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
            <SelectBranch></SelectBranch>
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
        <h2 class="text-center lg:text-left space-x-2">
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
    >
      <template #title>
        <h2 class="text-center space-x-2">
          <span class="text-red-700">Tipos de Vehículos</span>
          <span class="text-black">ideales para tu necesidad</span>
        </h2>
      </template>
      <template #description>
        <div class="text-black justify-items-center">
          <p class="mb-4">
            Cada estilo de vida tiene su vehículo perfecto. Ya sea la agilidad
            para la ciudad, la comodidad para los viajes largos o la potencia
            para la aventura, tenemos la llave para tus necesidades. <br />
            Descubre el que fue hecho para tí.
          </p>
        </div>
      </template>
      <template #default>
        <UPageGrid>
          <template #default>
            <UPageCard
              title="COMPACTO"
              description="Practicidad urbana con estilo. La agilidad que necesitas en la ciudad"
              variant="ghost"
              :ui="categoriasPageCardUIConfig"
              orientation="vertical"
              reverse
            >
              <template #footer>
                <UModal title="Selecciona ciudad">
                  <template #body>
                    <div class="mb-4 text-white text-2xl">
                      ¿En que ciudad deseas recoger tu carro?
                    </div>
                    <div class="min-w-80 my-3">
                      <SelectBranch />
                    </div>
                  </template>
                  <UButton color="info" class="text-white"
                    >Ver disponibilidad</UButton
                  >
                </UModal>
              </template>
              <template #default>
                <ImagesCategoriasCompacto />
              </template>
            </UPageCard>
            <UPageCard
              title="SEDAN"
              description="Confort y espacio. Disfruta cada viaje con la máxima comodidad"
              variant="ghost"
              :ui="categoriasPageCardUIConfig"
              orientation="vertical"
              reverse
            >
              <template #footer>
                <UModal title="Selecciona ciudad">
                  <template #body>
                    <div class="mb-4 text-white text-2xl">
                      ¿En que ciudad deseas recoger tu carro?
                    </div>
                    <div class="min-w-80 my-3">
                      <SelectBranch />
                    </div>
                  </template>
                  <UButton color="info" class="text-white"
                    >Ver disponibilidad</UButton
                  >
                </UModal>
              </template>
              <template #default>
                <ImagesCategoriasSedan />
              </template>
            </UPageCard>
            <UPageCard
              title="CAMIONETA"
              description="Robustez y tamaño. Capacidad para dominar cualquier camino"
              variant="ghost"
              :ui="categoriasPageCardUIConfig"
              orientation="vertical"
              reverse
            >
              <template #footer>
                <UModal title="Selecciona ciudad">
                  <template #body>
                    <div class="mb-4 text-white text-2xl">
                      ¿En que ciudad deseas recoger tu carro?
                    </div>
                    <div class="min-w-80 my-3">
                      <SelectBranch />
                    </div>
                  </template>
                  <UButton color="info" class="text-white"
                    >Ver disponibilidad</UButton
                  >
                </UModal>
              </template>
              <template #default>
                <ImagesCategoriasSUV />
              </template>
            </UPageCard>
          </template>
        </UPageGrid>
      </template>
    </UPageSection>

    <!-- Testimonials Section -->
    <UPageSection
      id="testimonios"
      orientation="vertical"
      class="bg-white text-black"
      :ui="testimoniosPageSectionUIConfig"
    >
      <template #title>
        <h2 class="text-black">Lo que dicen nuestros clientes</h2>
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
    <UPageSection id="faqs" class="faq px-6 text-white">
      <UContainer>
        <h2 class="text-3xl font-bold text-center mb-8">
          Preguntas Frecuentes
        </h2>
        <p class="text-lg mb-6">
          Ahora es muy fácil alquilar carro en Colombia, ya sea para vacaciones
          o para negocios, por días o por meses, sólo requiere ser mayor de
          edad, tener licencia de conducción y una tarjeta de crédito con cupo
          disponible no lo piense mas, con un alquiler de carros para viajar en
          Colombia le sera mas fácil trasladarse por la ciudades, conocer
          hermosos lugares y disfrutar de nuestra gastronomía y la gente amable
          de cada región, ALQUILATUCARRO RENTA AUTOS COLOMBIA, le ofrece
          variedad de vehículos y precios que se adaptan a sus necesidades, la
          calidad de nuestros coches y la atención de nuestro personal es
          inigualable compruébelo reservando ahora mismo
        </p>
        <UAccordion :items="faqs">
          <template #default="{ item }">
            <div class="text-2xl" v-text="item.label"></div>
          </template>
          <template #content="{ item }">
            <div class="text-xl py-3" v-text="item.content"></div>
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

const categoriasPageCardUIConfig = {
  title: "text-center text-black",
  description: "text-center text-black",
  footer: "mx-auto",
};

const testimonios: Testimonial[] = franchise.testimonials;

// Add AggregateRating schema for testimonials (shows stars in Google SERPs)
useHomeAggregateRating()

// Add VideoObject schema for promotional video (enables video rich snippets)
usePromoVideoSchema()

const testimoniosPageSectionUIConfig = {
  title: "text-black",
};

const testimonioPageCardUIConfig = {
  root: "border-1 border-gray-100 rounded-lg bg-gray-50 shadow",
  description: "mt-4",
};

const testimonioUserUIConfig = {
  name: "text-black",
};

</script>
