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
      <div class="text-3xl">¡Vehículos Disponibles!</div>
      <div class="text-lg">
        Carros disponibles en {{city?.name}} para el {{ humanFormattedPickupDate }}.
        ¡No te quedes sin el tuyo, Reserva ahora y congela el precio!
      </div>
    </div>
    <u-page-grid>
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
    </u-page-grid>
    <u-slideover
      v-model:open="slideoverReservationResume"
      title="Resumen de la reserva"
      description="Antes de reservar revisa la información"
      :overlay="false"
    >
      <template #body>
        <reservation-resume :category="selectedCategory"></reservation-resume>
      </template>
      <template #footer>
        <u-button
          label="Cerrar"
          color="neutral"
          @click="slideoverReservationResume = false"
        />
        <u-slideover
          v-model:open="slideoverReservationForm"
          title="Datos para reservas"
          description="Completa tus datos y finaliza la solicitud de reserva"
          :overlay="false"
        >
          <u-button label="Siguiente" color="primary"></u-button>

          <template #body>
            <reservation-form
              ref="reservationFormComponent"
              @submit="submitForm"
            />
          </template>

          <template #footer>
            <u-button
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
    <u-page-grid>
      <placeholders-category-card />
      <placeholders-category-card class="hidden md:block" />
      <placeholders-category-card class="hidden lg:block" />
    </u-page-grid>
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

/** functions */
function setSelectedCategory(category: ReturnType<typeof useCategory>) {
  vehiculo.value = category.categoryCode.value;
  selectedCategory.value = category;
  slideoverReservationResume.value = true;
}

const { submitForm } = storeForm;
const { city } = useCityPageSEO();
</script>
