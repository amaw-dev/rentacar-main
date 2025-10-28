<template>
    <UPage>
        <!-- Hero Section -->
        <UPageHero class="bg-[url(https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fcuerpo.png?alt=media&token=371eab4a-87ae-4a12-a9ef-34aacb24270a)] text-white px-6 text-center">
          <template #title>
            <span class="bg-blue-900 text-white text-4xl font-bold uppercase mb-6">ALQUILER DE CARROS EN COLOMBIA</span>
            <!-- <NuxtImg src="/img/carros.png" alt="carros" class="mx-auto mb-6 w-full "/> -->
             <picture>
              <img src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fcarros.png?alt=media&token=e1bb5ce1-cc29-4a52-be78-76963eda7530" alt="carros">
             </picture>
          </template>
          <template #default>
            <!-- <img src="https://via.placeholder.com/600x300?text=Imagen+Cliente" alt="Imagen Cliente" class="mx-auto mb-6 rounded-lg shadow-lg w-full max-w-md">
            <img src="https://via.placeholder.com/600x300?text=Imagen+Cliente" alt="Imagen Cliente" class="mx-auto mb-6 rounded-lg shadow-lg w-full max-w-md"> -->
          </template>
          <template #body>
            <h3 class="text-3xl font-bold mb-4 text-blue-700">LOS MEJORES PRECIOS EN ALQUILER DE AUTOS COLOMBIA</h3>
            <p class="text-lg mb-6 text-black">
              ALQUILATUCARRO a la red de agencias de alquiler de autos Colombia mas importante de la región, obtenga promociones y descuentos de temporada y un trato amable de nuestro personal, alquile nuestros autos con su Documento de identidad, una licencia de conducción y una tarjeta de crédito con cupo disponible. Reserve su vehículo sin anticipo (No requerimos pagos previos), Aproveche nuestros descuentos para reservas de 7 y 30 días. Vehículos como nuevos, renovamos nuestra flota cada 2 años.
            </p>
          </template>
        </UPageHero>
    
        <!-- Locations Section -->
        <UPageSection class="locations py-12 px-6 text-white">
          <UContainer>
            <h2 class="text-3xl font-bold text-center mb-8">¿Dónde desea alquilar un carro?</h2>
            <p class="text-lg text-center mb-6">
              Alquilatucarro es una agencia de alquiler de carros en Colombia con sedes en las principales ciudades del país.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <ULink v-for="city in cities" :key="city.id" :to="city.link" target="_blank" class="justify-center justify-items-center">
                <picture>
                  <img :src='`https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2F${city.id}.png?alt=media`' class="w-40"></img>
                </picture>
                <!-- <NuxtImg :src="'/img/avatares/' + city.avatar" class="w-40" /> -->
              </ULink>
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
                <picture>
                  <img src="https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fquienes.png?alt=media&token=9bd1ea78-b079-4d46-afcf-095a33fb27e3" alt="quienes">
                </picture>
                <!-- <NuxtImg src="/img/quienes.png" /> -->
              </template>
            </UPageCard>
        </UPageSection>
    
        <!-- FAQ Section -->
        <UPageSection class="faq px-6 text-white">
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

        <UPageSection class="bg-green-500">
          <div class="justify-items-center space-y-2">
            <div class="text-center text-2xl text-white">
              <a href="https://www.alquilame.co/" class="hover:underline">Alquiler de Carros en Colombia</a> . Comunícate Ahora!
            </div>
            <div class="text-center text-2xl text-white font-medium flex flex-row gap-2 items-center">
              <UIcon name="circle-flags:co"></UIcon>
              <span>Teléfono Colombia</span>
            </div>
            <ULink href="tel:+573016729250" class="text-center text-2xl w-full md:w-auto text-white flex flex-row gap-2 items-center">
              <UIcon name="logos:whatsapp-icon"></UIcon>
              <span>+57 301 672 9250</span>
            </ULink>
          </div>
        </UPageSection>
    </UPage>
</template>

<script setup>
const { cities, faqs } = useData();

definePageMeta({
  colorMode: 'light',
})
</script>

