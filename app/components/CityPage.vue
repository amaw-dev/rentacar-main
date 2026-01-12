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
      v-if="pendingSearch || filteredCategories.length > 0"
      :ui="{ container: 'pt-0' }"
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

    <!-- Delivery Points Section -->
    <section v-if="cityBranches.length > 0" id="puntos-entrega" class="bg-gray-50 text-black py-8 md:py-12 px-4 md:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">
          <span class="text-red-700">Puntos de entrega</span>
          <span class="text-black">en {{ city?.name }}</span>
        </h2>
        <div class="flex flex-wrap justify-center gap-3 md:gap-4">
          <div
            v-for="branch in cityBranches"
            :key="branch.code"
            class="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm"
          >
            <LocationIcon cls="text-red-600 size-5" />
            <span class="font-medium text-gray-800">{{ branch.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Expanded Content Sections (only for cities with rich content) -->
    <template v-if="hasExpandedContent && expandedContent">
      <!-- Intro Section -->
      <section id="introduccion" class="bg-white text-black py-8 md:py-12 px-4 md:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">
            <span class="text-red-700">Explora {{ city?.name }}</span>
            <span class="text-black"> en carro</span>
          </h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {{ expandedContent.intro }}
          </p>
        </div>
      </section>

      <!-- Destinations Section -->
      <section id="destinos" class="bg-gray-50 text-black py-8 md:py-12 px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
            <span class="text-red-700">Destinos populares</span>
            <span class="text-black"> desde {{ city?.name }}</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="destination in expandedContent.destinations"
              :key="destination.name"
              class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900">{{ destination.name }}</h3>
                <span class="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {{ destination.time }}
                </span>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">{{ destination.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Driving Tips Section -->
      <section id="consejos-conduccion" class="bg-white text-black py-8 md:py-12 px-4 md:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
            <span class="text-red-700">Consejos</span>
            <span class="text-black"> para conducir en {{ city?.name }}</span>
          </h2>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span class="text-red-600 font-bold text-lg">🚗</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Pico y Placa</h3>
                <p class="text-gray-600 text-sm">{{ expandedContent.drivingTips.picoPlaca }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span class="text-red-600 font-bold text-lg">💰</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Peajes</h3>
                <p class="text-gray-600 text-sm">{{ expandedContent.drivingTips.tolls }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span class="text-red-600 font-bold text-lg">🅿️</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Parqueaderos</h3>
                <p class="text-gray-600 text-sm">{{ expandedContent.drivingTips.parking }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Best Season Section -->
      <section id="mejor-temporada" class="bg-gray-50 text-black py-8 md:py-12 px-4 md:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">
            <span class="text-red-700">Mejor época</span>
            <span class="text-black"> para viajar</span>
          </h2>
          <p class="text-gray-700 text-base md:text-lg leading-relaxed">
            {{ expandedContent.bestSeason }}
          </p>
        </div>
      </section>
    </template>

    <!-- FAQ Section -->
    <UPageSection id="faqs" class="bg-gray-100 text-black">
      <div class="max-w-7xl mx-auto px-1 sm:px-2 lg:px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 space-x-2">
          <span class="text-red-700">Preguntas Frecuentes</span>
          <span class="text-black">sobre alquiler en {{ city?.name }}</span>
        </h2>
        <p class="text-base text-center mb-4">
          Resolvemos tus dudas más comunes sobre el alquiler de carros en {{ city?.name }}.
        </p>
        <UAccordion :items="cityFAQs" :ui="faqAccordionUIConfig" class="max-w-4xl mx-auto">
          <template #default="{ item }">
            <div class="text-base font-medium text-gray-800 px-4" v-text="item.label"></div>
          </template>
          <template #content="{ item }">
            <div class="text-base text-gray-600 py-3 bg-gray-50 px-4 rounded-lg" v-text="item.content"></div>
          </template>
        </UAccordion>
      </div>
    </UPageSection>

    <!-- Testimonials Section -->
    <section id="testimonios" class="bg-white text-black py-12 md:py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl text-black text-center mb-4">Lo que dicen nuestros clientes en {{ city?.name }}</h2>
        <p class="text-black text-center mb-8">Descubre por qué somos la opción preferida para alquilar carros en {{ city?.name }}. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonio in testimonios"
            :key="testimonio.user.name"
            class="border border-gray-100 rounded-lg bg-gray-50 shadow-sm p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
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
import { useCityExpandedContent, hasCityExpandedContent } from "~/composables/useCityContent";

/** stores */
const storeSearch = useStoreSearchData();


/** refs */
const { franchise, branches } = useAppConfig();
const {
  pending: pendingSearch,
  filteredCategories,
} = storeToRefs(storeSearch);

/** props */
const props = defineProps<{
  city: City;
}>();

// Filter branches for current city (handle ID mapping inconsistencies)
const cityIdMapping: Record<string, string> = {
  'santamarta': 'santa-marta',
};
const branchCityId = cityIdMapping[props.city?.id] || props.city?.id;
const cityBranches = computed(() =>
  branches.filter((branch: { city: string }) => branch.city === branchCityId)
);

const testimonios: Testimonial[] | undefined = props.city?.testimonials;

// Get expanded content for major cities (Bogotá, Medellín)
const expandedContent = props.city?.name ? useCityExpandedContent(props.city.name) : null;
const hasExpandedContent = props.city?.name ? hasCityExpandedContent(props.city.name) : false;

// Add AggregateRating schema for city-specific testimonials (shows stars in Google SERPs)
if (props.city?.name && testimonios) {
  useCityAggregateRating(props.city.name, testimonios)
}

// Get city-specific FAQs for UI display
const cityFAQs = props.city?.name ? useCityFAQs(props.city.name) : []

const testimonioUserUIConfig = {
  name: "text-black",
  description: "text-gray-600",
};

const faqAccordionUIConfig = {
  item: "bg-white rounded-lg mb-2 px-2 pb-2 !border-0 !border-b-0",
  body: "!border-none",
  trailingIcon: "mr-2 transition-transform duration-200",
};

const Searcher = defineAsyncComponent(() => import("./Searcher.vue"));
const PlaceholdersSearcher = defineAsyncComponent(
  () => import("./Placeholders/Searcher.vue")
);
const LazyImagesCiudadesChica = defineAsyncComponent(
  () => import("./Images/Ciudades/Chica.vue")
);

</script>

