<template>
  <div v-if="noAvailableCategories" class="text-center">
    <div class="text-white text-center">
      <div class="text-3xl">¡Oops!</div>
      <div class="text-lg">
        Nos quedamos sin carritos en {{city?.name}} para el {{ humanFormattedPickupDate }}.
      </div>
      <p class="text-lg">
        pero no te preocupes, nuestro sistema se actualiza cada hora, <br>
        puedes intentar más tarde o intenta cambiar la fecha o el lugar de recogida
      </p>
    </div>
  </div>
  <template v-if="!pendingSearch">
    <div v-if="filteredCategories.length > 0 && !noAvailableCategories" class="text-white text-center">
      <div class="text-lg md:text-xl font-bold">¡Vehículos Disponibles!</div>
      <div class="text-sm md:text-base">
        <span>En <span class="text-yellow-400 font-semibold">{{city?.name}}</span> para el <span class="text-yellow-400 font-semibold">{{ humanFormattedPickupDate }}</span>.</span>
        <span class="block md:inline"> ¡No te quedes sin el tuyo, Reserva ahora!</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="category in filteredCategories">
        <template
          v-if="
            category.estimatedTotalAmount == 999999999 &&
            vehicleCategories[category.categoryCode]
          "
        >
          <placeholders-unable-category-card
            :category
            :vehicleCategory="vehicleCategories[category.categoryCode]"
          />
        </template>
        <template v-else-if="vehicleCategories[category.categoryCode]">
          <category-card
            :category
            :vehicle-category="vehicleCategories[category.categoryCode]"
            :key="`category-${category.categoryCode}`"
            @selected-category="setSelectedCategory"
          />
        </template>
      </template>
    </div>
    <u-slideover
      v-model:open="slideoverReservationResume"
      title="Resumen de la reserva"
      description="Antes de continuar revisa la información"
      :overlay="false"
      :close="{ color: 'neutral', variant: 'outline', class: 'text-gray-700 border-gray-300 hover:bg-gray-100' }"
      :ui="{
        content: 'bg-white',
        header: 'bg-white',
        title: 'text-gray-900 text-2xl font-bold',
        description: 'text-gray-600',
        body: 'bg-white text-gray-900',
        footer: 'bg-white gap-2 border-t-0',
        close: 'absolute top-4 end-4 z-10',
      }"
    >
      <template #body>
        <reservation-resume :category="selectedCategory"></reservation-resume>
      </template>
      <template #footer>
        <u-button
          label="Volver"
          color="neutral"
          variant="solid"
          size="xl"
          class="flex-1 py-4 justify-center bg-gray-200 !text-black hover:bg-gray-300"
          @click="slideoverReservationResume = false"
        />
        <u-slideover
          v-model:open="slideoverReservationForm"
          title="Datos para reservas"
          description="Completa tus datos y solicita la reserva"
          :overlay="false"
          :close="{ color: 'neutral', variant: 'outline', class: 'text-gray-700 border-gray-300 hover:bg-gray-100' }"
          :ui="{
            content: 'bg-white',
            header: 'bg-white',
            title: 'text-gray-900 text-2xl font-bold',
            description: 'text-gray-600',
            body: 'bg-white text-gray-900',
            footer: 'bg-white gap-2 border-t-0',
            close: 'absolute top-4 end-4 z-10',
          }"
        >
          <u-button label="Siguiente" color="neutral" size="xl" class="flex-1 py-4 justify-center bg-green-700 hover:bg-green-800 text-white">
            <template #trailing>
              <ChevronRightIcon cls="size-5" />
            </template>
          </u-button>

          <template #body>
            <reservation-form
              ref="reservationFormComponent"
              @submit="submitForm"
            />
          </template>

          <template #footer>
            <u-button
              label="Volver"
              color="neutral"
              variant="solid"
              size="xl"
              class="flex-1 py-4 justify-center bg-gray-200 !text-black hover:bg-gray-300"
              @click="slideoverReservationForm = false"
            />
            <u-button
              color="neutral"
              size="xl"
              class="flex-1 py-4 justify-center bg-green-700 hover:bg-green-800 text-white"
              :loading="isSubmittingForm"
              :disabled="isSubmittingForm"
              @click="reservationFormComponent.submit()"
              >Solicitar reserva
              <template #trailing>
                <ChevronRightIcon cls="size-5" />
              </template>
            </u-button>
          </template>
        </u-slideover>
      </template>
    </u-slideover>
  </template>
  <template v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <placeholders-category-card />
      <placeholders-category-card class="hidden md:block" />
      <placeholders-category-card class="hidden lg:block" />
    </div>
  </template>
</template>

<script setup lang="ts">
/** components */
import {
  PlaceholdersCategoryCard,
  PlaceholdersUnableCategoryCard,
  CategoryCard,
  ReservationResume,
  ReservationForm,
  IconsChevronRightIcon as ChevronRightIcon
} from "#components";

/** imports */
import {
  useStoreSearchData,
  useStoreReservationForm,
  useCategory,
  useVehicleCategories,
  useRoute,
  watch,
  nextTick,
  computed,
} from "#imports";

/** stores */
const storeSearch = useStoreSearchData();
const storeForm = useStoreReservationForm();

/** refs */
const {
  pending: pendingSearch,
  selectedCategory,
  filteredCategories,
  noAvailableCategories,
} = storeToRefs(storeSearch);
const { vehiculo, humanFormattedPickupDate, isSubmittingForm } = storeToRefs(storeForm);
const { vehicleCategories } = useVehicleCategories();
const slideoverReservationResume = ref<boolean>(false);
const slideoverReservationForm = ref<boolean>(false);
const reservationFormComponent = ref(null);

/** query params para deep-linking:
 * ?resumen=CODIGO  → abre resumen de reserva
 * ?reservar=CODIGO → abre formulario de datos directamente
 */
const route = useRoute();
const resumenParam = computed(() => route.query.resumen as string | undefined);
const reservarParam = computed(() => route.query.reservar as string | undefined);
const codigoCategoria = computed(() => resumenParam.value || reservarParam.value);
const abrirFormularioDirecto = computed(() => !!reservarParam.value);

// Auto-abrir slideover cuando se carguen las categorías y exista el param
watch(
  [filteredCategories, codigoCategoria],
  ([categories, codigo]) => {
    if (!codigo || categories.length === 0) return;

    const categoryData = categories.find(c => c.categoryCode === codigo);
    if (!categoryData || !vehicleCategories[codigo]) return;

    // Seleccionar categoría
    const category = useCategory(categoryData, vehicleCategories[codigo]);
    vehiculo.value = category.categoryCode.value;
    selectedCategory.value = category;

    // Abrir slideover correspondiente
    nextTick(() => {
      slideoverReservationResume.value = true;
      if (abrirFormularioDirecto.value) {
        nextTick(() => {
          slideoverReservationForm.value = true;
        });
      }
    });
  },
  { immediate: true }
);

/** functions */
function setSelectedCategory(category: ReturnType<typeof useCategory>) {
  vehiculo.value = category.categoryCode.value;
  selectedCategory.value = category;
  slideoverReservationResume.value = true;
}

const { submitForm } = storeForm;
const { city } = useCityPageSEO();
</script>
