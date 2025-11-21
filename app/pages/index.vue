<template>
    <UPage>
        <!-- Hero Section -->
        <UPageHero orientation="horizontal">
          <template #headline>
            <div class="space-x-2 text-white text-center">
              <UIcon name="ic:round-star" class="bg-white size-5"></UIcon>
              <UIcon name="ic:round-star" class="bg-white size-5"></UIcon>
              <UIcon name="ic:round-star" class="bg-white size-5"></UIcon>
              <UIcon name="ic:round-star" class="bg-white size-5"></UIcon>
              <UIcon name="ic:round-star" class="bg-white size-5"></UIcon>
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
                <SelectBranch />
              </div>
              <p class="text-white">
                Contamos con 27 sedes a nivel nacional y una excelente reputación en alquiler de carros
                y camionetas que se adaptan a tu necesidad y presupuesto
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
            <div class="text-center">
              <div class="text-red-700">Hasta 60% de Descuento</div>
              <div class="text-black text-4xl">Reserva Ahora, Paga Después</div>
            </div>
          </template>
          <template #description>
            <div class="text-black text-center">
              Obtén hasta un 60% de descuento al reservar con anticipación.
              Aplica para todas las categorías: compactos, sedanes y camionetas.
              Reserva sin pago anticipado y asegura los mejores precios por
              planificar tu viaje con tiempo
            </div>
            
          </template>
          <template #body>
            <div class="text-center justify-items-center">
              <div class="font-bold text-lg">¿En que ciudad deseas recoger tu carro?</div>
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
            <div class="text-center lg:text-left">
              <div class="space-x-2">
                <span class="text-red-700">Requisitos</span>
                <span class="text-black">para tu alquiler</span>
              </div>
              
            </div>
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
                    icon="ic:baseline-location-on"
                    :ui="requisitosPageFeatureUIConfig"
                  />
                </li>
                <li>
                  <UPageFeature
                    title="DOCUMENTO DE IDENTIDAD"
                    description="(18+ Cédula o pasaporte original)"
                    icon="ic:baseline-location-on"
                    :ui="requisitosPageFeatureUIConfig"
                  />
                </li>
                <li>
                  <UPageFeature
                    title="TARJETA DE CRÉDITO"
                    description="(Única forma de pago)"
                    icon="ic:baseline-location-on"
                    :ui="requisitosPageFeatureUIConfig"
                  />
                </li>
                <li>
                  <UPageFeature
                    title="LICENCIA DE CONDUCIR"
                    icon="ic:baseline-location-on"
                    :ui="requisitosPageFeatureUIConfig"
                  />
                </li>
              </ul>
            </div>
            
          </template>
          <template #body>
            <div class="text-center justify-items-center">
              <div class="font-bold text-lg">¿En que ciudad deseas recoger tu carro?</div>
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
            <div class="text-center">
              <div class="space-x-2">
                <span class="text-red-700">Tipos de Vehículos</span>
                <span class="text-black">ideales para tu necesidad</span>
              </div>
              
            </div>
          </template>
          <template #description>
            <div class="text-black justify-items-center">
              <p class="mb-4">
                Cada estilo de vida tiene su vehículo perfecto. Ya sea la agilidad
                para la ciudad, la comodidad para los viajes largos o la potencia
                para la aventura, tenemos la llave para tus necesidades.  <br />
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
                          <div class="mb-4 text-white text-2xl">¿En que ciudad deseas recoger tu carro?</div>
                          <div class="min-w-80 my-3">
                            <SelectBranch />
                          </div>
                        </template>
                        <UButton color="info" class="text-white">Ver disponibilidad</UButton>
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
                          <div class="mb-4 text-white text-2xl">¿En que ciudad deseas recoger tu carro?</div>
                          <div class="min-w-80 my-3">
                            <SelectBranch />
                          </div>
                        </template>
                        <UButton color="info" class="text-white">Ver disponibilidad</UButton>
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
                          <div class="mb-4 text-white text-2xl">¿En que ciudad deseas recoger tu carro?</div>
                          <div class="min-w-80 my-3">
                            <SelectBranch />
                          </div>
                        </template>
                        <UButton color="info" class="text-white">Ver disponibilidad</UButton>
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
          title="Lo que dicen nuestros clientes"
          description="Descubre por qué somos la opción preferida para alquilar carros en Colombia. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar."
          :ui="testimoniosPageSectionUIConfig"
        >
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
                  <UIcon name="ic:round-star" class="bg-yellow-500 size-6"></UIcon>
                  <UIcon name="ic:round-star" class="bg-yellow-500 size-6"></UIcon>
                  <UIcon name="ic:round-star" class="bg-yellow-500 size-6"></UIcon>
                  <UIcon name="ic:round-star" class="bg-yellow-500 size-6"></UIcon>
                  <UIcon name="ic:round-star" class="bg-yellow-500 size-6"></UIcon>
                </template>
              </UPageCard>
            </UPageGrid>
          </template>
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
    </UPage>
</template>

<script lang="ts" setup>
import type { FAQPage } from 'schema-dts'
const { faqs, franchise } = useAppConfig();

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

const requisitosPageFeatureUIConfig = {
  leadingIcon:'bg-red-600', 
  title: 'text-black',
  description: 'text-black'
}

const categoriasPageCardUIConfig = {
  title: 'text-center text-black',
  description: 'text-center text-black',
  footer: 'mx-auto'
}

const testimonios = [
  {
    user: {
      name: 'Stephany M. García',
      description: 'Peru',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image5.webp?alt=media&token=b6467738-4692-48dd-937c-16c81f715926",
        alt: 'Stephany M. García'
      }
    },
    quote: "Durante nuestra estadía en Bogotá, tuvimos la oportunidad de visitar Monserrate y La Candelaria. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la vista panorámica a nuestro propio ritmo."
  },
  {
    user: {
      name: 'Sandra Milena Barona',
      description: 'Colombia',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image4.webp?alt=media&token=5d545267-03e6-4e83-a081-4a16259805e2",
        alt: 'Sandra Milena Barona'
      }
    },
    quote: "Hicimos una parada en el Metrocable de Medellín al final de la tarde, después de explorar Comuna 13. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la transformación urbana."
  },
  {
    user: {
      name: 'Luis Javier Rodríguez M.',
      description: 'Honduras',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image3.webp?alt=media&token=54d9ed05-162a-4b20-a485-bdc87aaeb27f",
        alt: 'Luis Javier Rodríguez M.'
      }
    },
    quote: "En Cali, visitamos el Zoológico y subimos a Cristo Rey para ver la ciudad desde arriba. Tener un auto nos permitió movernos con facilidad y disfrutar de la salsa y el ambiente sin preocupaciones."
  },
  {
    user: {
      name: 'Carlos Andrés Mejía',
      description: 'Colombia',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image2.webp?alt=media&token=24560311-369e-4f54-9a1a-36f0da7ec9f7",
        alt: 'Carlos Andrés Mejía'
      }
    },
    quote: "Me encantó el servicio en Barranquilla. Todo muy puntual y el carro en excelente estado. Pude conocer el Carnaval Museum y Bocas de Ceniza sin complicaciones. ¡Totalmente recomendado!"
  },
  {
    user: {
      name: 'Ana Lucía Torres',
      description: 'Ecuador',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-human-image6.webp?alt=media&token=bb28b34b-f738-40ee-be58-e5fd35751da2",
        alt: 'Ana Lucía Torres'
      }
    },
    quote: "Viajar en familia a Cartagena fue muy fácil gracias a este servicio de alquiler. Recorrimos la Ciudad Amurallada y el Castillo San Felipe, con buen precio y excelente atención."
  },
  {
    user: {
      name: 'Esteban Páez',
      description: 'Colombia',
      avatar: {
        src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image.webp?alt=media&token=556252eb-f9e0-4cc5-832a-0e97d691b4d0",
        alt: 'Esteban Páez'
      }
    },
    quote: "Excelente alternativa para recorrer Bucaramanga. El auto fue perfecto para ir al Cañón del Chicamocha y Girón, muy limpio, seguro y con buen consumo de gasolina."
  },
]

const testimoniosPageSectionUIConfig = {
  title: 'text-black'
}

const testimonioPageCardUIConfig = {
  root: 'border-1 border-gray-100 rounded-lg bg-gray-50 shadow',
  description: 'mt-4'
}

const testimonioUserUIConfig = {
  name: 'text-black',
}

</script>

