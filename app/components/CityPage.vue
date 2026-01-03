<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero orientation="horizontal">
      <template #headline>
        <div
          class="flex flex-row space-x-0.5 text-white text-center justify-center items-center -mt-4"
        >
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <StarIcon cls="size-3" />
          <span class="text-sm ml-1">4.9 (2,000 reviews)</span>
        </div>
      </template>
      <template #title>
        <div class="text-white text-center">
          <div class="text-2xl md:text-3xl">
            <div class="font-bold uppercase">ALQUILER</div>
            <div>DE CARROS EN</div>
          </div>
          <div class="flex flex-row justify-center items-center gap-2 text-4xl md:text-5xl font-bold uppercase">
            <span class="size-8 md:size-10" aria-hidden="true"></span>
            {{ city?.name }}
            <LocationIcon cls="text-red-600 size-8 md:size-10" />
          </div>
          <div class="italic text-2xl md:text-3xl font-light tracking-wide">Colombia</div>
        </div>
      </template>
      <template #body>
        <div class="text-center justify-items-center">
          <div class="mb-3 text-white text-xl">
            Consulta disponibilidad y precios
          </div>
          <p class="text-white text-sm">
            Elige ciudades, fechas y horarios y renta un vehículo por días, semanas o el tiempo que necesites
          </p>
        </div>
      </template>
      <template #default>
        <!-- Buscador -->
        <Searcher />
      </template>
    </UPageHero>

    <!-- Result Section -->
    <UPageSection
      id="seleccion-categorias"
      class="border-t-2 border-white"
      v-if="pendingSearch || filteredCategories.length > 0"
    >
      <CategorySelectionSection />
    </UPageSection>

    <!-- Description Section -->
    <UPageSection id="descripcion" class="bg-white text-black">
      <UPageGrid>
        <UPageCard variant="ghost">
          <LazyImagesCiudadesChica />
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
      title="Lo que dicen nuestros clientes"
      :description="`Descubre por qué somos la opción preferida para alquilar carros en ${city?.name}. Nuestros clientes destacan nuestra atención, precios competitivos y la facilidad para explorar.`"
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

const Searcher = defineAsyncComponent(() => import("./Searcher.vue"));
const PlaceholdersSearcher = defineAsyncComponent(
  () => import("./Placeholders/Searcher.vue")
);
const LazyImagesCiudadesChica = defineAsyncComponent(
  () => import("./Images/Ciudades/Chica.vue")
);

</script>
