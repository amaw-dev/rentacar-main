<template>
  <u-form
    :state="formState"
    :schema="validationSchema"
    @submit="submitForm"
    class="flex flex-col gap-3"
  >
    <u-page-grid class="items-start lg:grid-cols-2 lg:gap-30">
      <ReservationResume :category="selectedCategory" :show-button="false" />
      <ReservationForm :form-state />
    </u-page-grid>
    <div class="flex flex-row justify-end gap-2">
      <u-button
        leading-icon="i-lucide-arrow-left"
        color="info"
        >Anterior
      </u-button>
      <u-button 
        trailing-icon="i-lucide-chevron-right" 
        type="submit"
        :loading="isSubmittingForm"
        :disabled="isSubmittingForm"
        >Solicitar reserva</u-button
      >
    </div>
  </u-form>
</template>

<script setup lang="ts">
/** stores */
import { useStoreReservationForm, useStoreSearchData } from "#imports";
const storeSearch = useStoreSearchData();
const storeForm = useStoreReservationForm();

/** vars */
const { selectedCategory } = storeToRefs(storeSearch);
const {
  nombreCompleto,
  apellidos,
  identificacion,
  tipoIdentificacion,
  telefono,
  email,
  politicaPrivacidad,
  aerolinea,
  numeroVueloIda,
  vehiculo,
  haveFlight,
  isSubmittingForm,
} = storeToRefs(storeForm);

const baseForm = {
  nombreCompleto,
  apellidos,
  identificacion,
  tipoIdentificacion,
  telefono,
  email,
  politicaPrivacidad,
  vehiculo,
};

const reservationFormState = reactive(baseForm);
const reservationWithFlightFormState = reactive({
  ...baseForm,
  aerolinea,
  numeroVueloIda,
});

const formState = ref(
  haveFlight.value ? reservationWithFlightFormState : reservationFormState
);
const validationSchema = ref(
  haveFlight.value
    ? ReservationWithFlightFormValidationSchema
    : ReservationFormValidationSchema
);

/** functions */
const { submitForm } = storeForm;
</script>

