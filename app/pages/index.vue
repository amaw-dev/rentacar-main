<template>
    <UPage>
        <!-- Hero Section -->
        <UPageHero orientation="horizontal">
          <template #headline>
            <div class="space-x-2 text-white text-center">
              <UIcon name="ic:round-star" class="bg-white"></UIcon>
              <UIcon name="ic:round-star" class="bg-white"></UIcon>
              <UIcon name="ic:round-star" class="bg-white"></UIcon>
              <UIcon name="ic:round-star" class="bg-white"></UIcon>
              <UIcon name="ic:round-star" class="bg-white"></UIcon>
              <span>4.9 reviews</span>
            </div>
          </template>
          <template #title>
            <div class="text-white text-4xl text-center">
              <div class="">
                <div class="font-bold uppercase">ALQUILER</div>
                <div>DE CARROS EN</div>
              </div>
              <div class="italic">COLOMBIA</div>
            </div>
          </template>
          <template #body>
            <div class="text-center justify-items-center">
              <div class="mb-4 text-white text-2xl">¿En que ciudad deseas recoger tu carro?</div>
              <div class="min-w-80 my-3">
                <SelectBranch/>
              </div>
              <p class="text-white">
                Contamos con 27 sedes a nivel nacional y una excelente reputación en alquiler de carros
                y camionetas que se adaptan a tu necesidad y presupuesto
              </p>
            </div>
          </template>
          <picture>
            <source 
              type="image/avif"
              media="(min-width: 768px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.avif?alt=media&token=a14e3f1c-428e-40b2-ad1e-0d724579e487"
              alt="carros"
              width="2000"
              height="1620"
              loading="eager"
              fetchpriority="high"
            />
            <source 
              type="image/avif"
              media="(max-width: 767px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia-movil.avif?alt=media&token=09ef76e8-4f99-4188-8d9a-57e13e198c4b"
              alt="carros"
              width="333"
              height="270"
              loading="eager"
              fetchpriority="high"
            />
            
            <source 
              type="image/webp"
              media="(min-width: 768px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.webp?alt=media&token=3a180793-69a9-471f-a1d1-8f720ba14662"
              alt="carros"
              width="2000"
              height="1620"
              loading="eager"
              fetchpriority="high"
            />
            <source 
              type="image/webp"
              media="(max-width: 767px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia-movil.webp?alt=media&token=ba908a15-bfaa-4c82-88e4-538fee298fae"
              alt="carros"
              width="333"
              height="270"
              loading="eager"
              fetchpriority="high"
            />
            
            <source 
              type="image/png"
              media="(min-width: 768px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.png?alt=media&token=5b5675e2-3c7d-4076-b0e9-7bf74c085ef9"
              alt="carros"
              width="2000"
              height="1620"
              loading="eager"
              fetchpriority="high"
            />
            <source 
              type="image/png"
              media="(max-width: 767px)"
              srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia-movil.png?alt=media&token=769cd789-8e38-4cd8-b650-863a02dfa8ce"
              alt="carros"
              width="333"
              height="270"
              loading="eager"
              fetchpriority="high"
            />
            
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.png?alt=media&token=5b5675e2-3c7d-4076-b0e9-7bf74c085ef9" 
              alt="carros"
              width="2000"
              height="1620"
              loading="eager"
              class="mx-auto"
              fetchpriority="high"
            />
          </picture>
        </UPageHero>
    
        <!-- Locations Section -->
        <UPageSection id="sedes" class="locations py-12 px-6 text-white">
          <UContainer>
            <h2 class="text-3xl font-bold text-center mb-8">¿Dónde desea alquilar un carro?</h2>
            <p class="text-lg text-center mb-6">
              Alquilatucarro es una agencia de alquiler de carros en Colombia con sedes en las principales ciudades del país.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
              <NuxtLink v-for="city in cities" :key="city.id" :to="city.link" target="_blank" class="justify-center">
                <picture>
                  <source
                    type="image/avif"
                    :srcset='`https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2F${city.id}.avif?alt=media`' 
                    :alt="city.id"
                    class="w-40"
                    width="161"
                    height="162"
                    loading="lazy"
                  />
                  <source
                    type="image/avif"
                    :srcset='`https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2F${city.id}.webp?alt=media`' 
                    :alt="city.id"
                    class="w-40"
                    width="161"
                    height="162"
                    loading="lazy"
                  />
                  <img 
                    :src='`https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2F${city.id}.png?alt=media`' 
                    :alt="city.id"
                    class="w-40"
                    width="161"
                    height="162"
                    loading="lazy"
                  />
                </picture>
                <!-- <NuxtImg :src="'/img/avatares/' + city.avatar" class="w-40" /> -->
              </NuxtLink>
            </div>
          </UContainer>
        </UPageSection>

        <!-- Main Content Section -->
        <UPageSection class="py-0 px-6 bg-white">
            <UPageCard
              variant="ghost"
              orientation="horizontal"
              reverse
            >
              <template #header>
                <h2 class="text-3xl font-bold text-center mb-2 text-blue-800">
                  Alquilatucarro - Renta Autos Colombia
                </h2>
              </template>
              <template #body>
                <p class="text-lg mb-6 text-black">
                  A través de los años la renta de carros en Colombia se ha convertido en un negocio que impulsa y promueve el turismo en la región, uno de los principales ejes de la Economía colombiana por eso nuestra misión es prestar un servicio de alquiler de autos en Colombia con las tarifas mas bajas del mercado, con amplia gama, variedad y calidad de vehículos, cuando piense en alquiler de carros Colombia piense en nosotros como su mejor opción, por confiabilidad, por disponibilidad y precio.
                </p>
              </template>
              <template #default>
                <div class="mx-auto">
                  <picture>
                    <source
                      type="image/avif" 
                      srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fquienes.avif?alt=media&token=5fa0eeaa-9cf3-4cdb-940d-4cf360408024"
                      alt="quienes"
                      width="333"
                      height="333"
                      loading="lazy"
                    />
                    <source
                      type="image/webp"
                      srcset="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fquienes.webp?alt=media&token=1b322555-06db-4cca-a005-fdeb3725a8af"
                      alt="quienes"
                      width="333"
                      height="333"
                      loading="lazy"
                    />
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fquienes.png?alt=media&token=9bd1ea78-b079-4d46-afcf-095a33fb27e3" 
                      alt="quienes"
                      width="333"
                      height="333"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <!-- <NuxtImg src="/img/quienes.png" /> -->
              </template>
            </UPageCard>
        </UPageSection>
    
        <!-- FAQ Section -->
        <UPageSection id="faqs" class="faq px-6 text-white">
          <UContainer>
            <h2 class="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <p class="text-lg mb-6">
              Ahora es muy fácil alquilar carro en Colombia, ya sea para vacaciones o para negocios, por días o por meses, sólo requiere ser mayor de edad, tener licencia de conducción y una tarjeta de crédito con cupo disponible no lo piense mas, con un alquiler de carros para viajar en Colombia le sera mas fácil trasladarse por la ciudades, conocer hermosos lugares y disfrutar de nuestra gastronomía y la gente amable de cada región, ALQUILATUCARRO RENTA AUTOS COLOMBIA, le ofrece variedad de vehículos y precios que se adaptan a sus necesidades, la calidad de nuestros coches y la atención de nuestro personal es inigualable compruébelo reservando ahora mismo
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

        <UPageSection class="bg-green-700">
          <div class="justify-items-center space-y-2">
            <div class="text-center text-2xl text-white">
              <NuxtLink to="/" class="hover:underline" >Alquiler de Carros en Colombia.</NuxtLink>
              Comunícate Ahora!
            </div>
            <div class="text-center text-2xl text-white font-medium flex flex-row gap-2 items-center">
              <UIcon name="circle-flags:co"></UIcon>
              <span>Teléfono Colombia</span>
            </div>
            <NuxtLink to="tel:+573016729250" class="text-center text-2xl w-full md:w-auto text-white hover:underline flex flex-row gap-2 items-center justify-center">
              <UIcon name="logos:whatsapp-icon"></UIcon>
              <span>+57 301 672 9250</span>
            </NuxtLink>
          </div>
        </UPageSection>
    </UPage>
</template>

<script lang="ts" setup>
import type { FAQPage } from 'schema-dts'
const { cities, faqs, franchise } = useAppConfig();

useSeoMeta({
  ogType: "website",
  ogTitle: franchise.title,
  ogDescription: franchise.description,
  ogImage: franchise.logo,
  ogImageAlt: franchise.shortname,
  ogImageType: 'image/png',
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
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => (defineQuestion({
          name: faq.label,
          acceptedAnswer: faq.content
      })))
  }
])

useHead({
  link: [
    { rel: 'canonical', href: franchise.website },
    { rel: 'preload', as: 'image', href: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.avif?alt=media&token=a14e3f1c-428e-40b2-ad1e-0d724579e487", fetchpriority: 'high' }
  ]
})

definePageMeta({
    colorMode: 'dark',
})

</script>

