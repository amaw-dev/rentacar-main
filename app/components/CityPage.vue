<template>
  <UPage>
    <!-- Hero Section -->
    <div class="hero-section">
      <UPageHero
        orientation="horizontal"
      >
      <template #headline>
        <div
          class="flex flex-row space-x-0.5 text-white text-center justify-center items-center -mt-8"
        >
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <span class="text-xs ml-1">4.9 (2,000 reviews)</span>
        </div>
      </template>
      <template #title>
        <h1 class="text-white text-center uppercase">
          <span class="block text-2xl md:text-3xl lg:text-4xl">
            <span class="block font-bold">ALQUILER</span>
            <span class="block">DE CARROS EN</span>
          </span>
          <span class="flex flex-row justify-center items-baseline gap-2 text-4xl md:text-5xl lg:text-7xl font-bold">
            <span class="size-8 md:size-10 lg:size-14" aria-hidden="true"></span>
            {{ city?.name }}
            <LocationIcon cls="text-red-600 size-8 md:size-10 lg:size-14 translate-y-1" />
          </span>
          <span class="block text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide colombia-sweep">Colombia</span>
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
          <Searcher />
        </div>
        <!-- Buscador solo en mobile/tablet -->
        <div class="lg:hidden">
          <Searcher />
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
    <UPageSection id="descripcion" class="bg-white text-black descripcion-section">
      <UPageGrid>
        <UPageCard variant="ghost">
          <LazyImagesCiudadesChica :city-name="city?.name" />
        </UPageCard>
        <UPageCard variant="ghost">
          <div class="flex flex-col gap-2 text-center font-extrabold">
            <div class="text-red-600 text-3xl">
              En {{ franchise.shortname }}
            </div>
            <div class="text-red-600 text-5xl" v-text="city?.name"></div>
            <p class="text-black text-4xl">
              la libertad <br />
              de moverte <br />
              a tu manera <br />
              es realidad
            </p>
            <u-separator
              size="lg"
              icon="lucide:square"
              class="w-full"
              :ui="{ icon: 'bg-black rotate-45' }"
            />
          </div>
        </UPageCard>
        <UPageCard variant="ghost">
          <p
            class="text-black text-center font-semibold"
            v-text="city?.description"
          ></p>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- Testimonials Section -->
    <UPageSection
      id="testimonios"
      orientation="vertical"
      class="bg-white text-black"
      :ui="testimoniosPageSectionUIConfig"
    >
      <template #title>
        <h2 class="text-2xl md:text-3xl text-black">Lo que dicen nuestros clientes en {{ city?.name }}</h2>
      </template>
      <template #description>
        <p class="text-black">Descubre por qué somos la opción preferida para alquilar carros en {{ city?.name }}. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.</p>
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
              <div class="flex flex-row space-x-2">
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

const Searcher = defineAsyncComponent(() => import("./Searcher.vue"));
const PlaceholdersSearcher = defineAsyncComponent(
  () => import("./Placeholders/Searcher.vue")
);
const LazyImagesCiudadesChica = defineAsyncComponent(
  () => import("./Images/Ciudades/Chica.vue")
);

</script>

