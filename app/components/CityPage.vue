<template>
  <UPage>
    <!-- Hero Section -->
    <div class="hero-section">
      <UPageHero
        orientation="horizontal"
      >
      <template #headline>
        <div
          class="flex flex-row space-x-0.5 text-white text-center justify-center items-center text-sm"
        >
          <StarIcon v-for="i in [1,2,3,4,5]" cls="w-2.5 h-2.5 md:w-4 md:h-4" />
          <span class="ml-2">4.9 reviews</span>
        </div>
      </template>
      <template #title>
        <h1 class="text-white text-center uppercase font-bold">
          <span class="block text-2xl md:text-3xl lg:text-4xl">
            <span class="block">ALQUILER</span>
            <span class="block">DE CARROS EN</span>
          </span>
          <span class="flex flex-row justify-center items-baseline gap-2 text-4xl md:text-5xl lg:text-7xl lg:whitespace-nowrap">
            <span class="size-8 md:size-10 lg:size-14" aria-hidden="true"></span>
            {{ city?.name }}
            <LocationIcon cls="text-red-600 size-8 md:size-10 lg:size-14 translate-y-1" />
          </span>
          <span class="block text-2xl md:text-3xl lg:text-4xl tracking-wide colombia-sweep">Colombia</span>
        </h1>
      </template>
      <template #body>
        <!-- Solo visible en mobile -->
        <div class="text-center justify-items-center -mt-4 -mb-4 lg:hidden">
          <div class="mb-1 text-white text-xl">
            Consulta disponibilidad y precios
          </div>
          <p class="text-white text-sm">
            Elige ciudades, fechas y horarios y renta un vehículo por días, semanas o el tiempo que necesites
          </p>
        </div>
      </template>
      <template #default>
        <!-- Contenedor para texto + formulario alineados - solo desktop -->
        <div class="hidden lg:flex lg:flex-col lg:items-center w-full">
          <div class="w-4/6 text-center mb-2">
            <div class="mb-1 text-white text-xl">
              Consulta disponibilidad y precios
            </div>
            <p class="text-white text-sm">
              Elige ciudades, fechas y horarios y renta un vehículo por días, semanas o el tiempo que necesites
            </p>
          </div>
          <ClientOnly>
            <Searcher />
            <template #fallback>
              <PlaceholdersSearcher />
            </template>
          </ClientOnly>
        </div>
        <!-- Buscador solo en mobile/tablet -->
        <div class="lg:hidden">
          <ClientOnly>
            <Searcher />
            <template #fallback>
              <PlaceholdersSearcher />
            </template>
          </ClientOnly>
        </div>
      </template>
    </UPageHero>
    </div>

    <!-- Result Section -->
    <UPageSection
      id="seleccion-categorias"
      class="border-t-2 border-white"
      v-if="pendingSearch || filteredCategories.length > 0"
    >
      <CategorySelectionSection />
    </UPageSection>

    <!-- Description Section -->
    <section id="descripcion" class="bg-white text-black py-4 md:py-12 px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
        <div class="md:self-start flex justify-center">
          <LazyImagesCiudadesChica :city-name="city?.name" />
        </div>
        <div class="flex flex-col gap-0 text-center font-extrabold">
          <div class="text-red-600 text-xl md:text-3xl">
            En {{ franchise.shortname }}
          </div>
          <div class="text-red-600 text-3xl md:text-5xl" v-text="city?.name"></div>
          <p class="text-black text-2xl md:text-4xl mb-0">
            la libertad <br />
            de moverte <br />
            a tu manera <br />
            es realidad
          </p>
          <div class="flex items-center w-full my-2 md:my-4">
            <div class="flex-grow border-t border-gray-300"></div>
            <div class="mx-4 w-3 h-3 bg-black rotate-45"></div>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
        <div>
          <p
            class="text-black text-center font-semibold"
            v-text="city?.description"
          ></p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonios" class="bg-white text-black py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl text-black text-center mb-4">Lo que dicen nuestros clientes en {{ city?.name }}</h2>
        <p class="text-black text-center mb-8">Descubre por qué somos la opción preferida para alquilar carros en {{ city?.name }}. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonio in testimonios"
            :key="testimonio.user.name"
            class="border border-gray-100 rounded-lg bg-gray-50 shadow p-6"
          >
            <UUser
              size="3xl"
              v-bind="testimonio.user"
              :ui="testimonioUserUIConfig"
              loading="lazy"
            >
              <template #avatar>
                <ImagesAvatar :avatar="testimonio.user.avatar" />
              </template>
            </UUser>
            <p class="mt-4 text-gray-700">{{ testimonio.quote }}</p>
            <div class="flex flex-row space-x-2 mt-4">
              <StarIcon v-for="i in [1,2,3,4,5]" :key="i" cls="text-yellow-500 size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </UPage>
</template>

<script setup lang="ts">
/** types */
import type { Testimonial, City } from "#imports";

/** imports */
import { defineAsyncComponent } from "vue";
import {
  IconsStarIcon as StarIcon,
  IconsLocationIcon as LocationIcon,
} from "#components";

/** stores */
const storeSearch = useStoreSearchData();


/** refs */
const { franchise } = useAppConfig();
const {
  pending: pendingSearch,
  filteredCategories,
} = storeToRefs(storeSearch);

/** props */
const props = defineProps<{
  city: City;
}>();

const testimonios: Testimonial[] | undefined = props.city?.testimonials;

// Add AggregateRating schema for city-specific testimonials (shows stars in Google SERPs)
if (props.city?.name && testimonios) {
  useCityAggregateRating(props.city.name, testimonios)
}

const testimonioUserUIConfig = {
  name: "text-black",
  description: "text-gray-600",
};

const Searcher = defineAsyncComponent(() => import("./Searcher.vue"));
const PlaceholdersSearcher = defineAsyncComponent(
  () => import("./Placeholders/Searcher.vue")
);
const LazyImagesCiudadesChica = defineAsyncComponent(
  () => import("./Images/Ciudades/Chica.vue")
);

</script>

