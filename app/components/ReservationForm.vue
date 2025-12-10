<template>
  <u-form
    ref="reservationForm"
    :state="formState"
    :schema="validationSchema"
    @submit="onSubmit"
    class="flex flex-col gap-3 dark"
  >
      <div class="grid grid-cols-2 gap-2">
        <u-form-field name="nombreCompleto">
          <u-input
            v-model="formState.nombreCompleto"
            class="w-full"
            placeholder="Nombres*"
          ></u-input>
        </u-form-field>
        <u-form-field name="apellidos">
          <u-input
            v-model="formState.apellidos"
            class="w-full"
            placeholder="Apellidos*"
          ></u-input>
        </u-form-field>
        <u-form-field name="tipoIdentificacion">
          <u-select
            v-model="formState.tipoIdentificacion"
            class="w-full"
            placeholder="ID Tipo*"
            :items="identificationTypeOptions"
          ></u-select>
        </u-form-field>
        <u-form-field name="identificacion">
          <u-input
            v-model="formState.identificacion"
            class="w-full"
            placeholder="ID Número*"
          ></u-input>
        </u-form-field>
        <u-form-field class="col-span-2" name="email">
          <u-input
            v-model="formState.email"
            class="w-full"
            placeholder="Email*"
          ></u-input>
        </u-form-field>
        <u-form-field class="col-span-2" name="telefono">
          <VueTelInput
            v-model="formState.telefono"
            mode="international"
            defaultCountry="CO"
            :dropdownOptions="phoneDropdownOptions"
            :inputOptions="phoneInputOptions"
            :preferred-countries="phonePreferredCountries"
          />
        </u-form-field>
        <u-form-field class="col-span-2" name="politicaPrivacidad">
          <u-switch
            v-model="formState.politicaPrivacidad"
            class="w-full"
            label="He leído y estoy de acuerdo con los términos y condiciones como de la política de tratamiento de la información"
          >
            <template #description>
              <nuxt-link
                class="underline"
                to="https://www.alquilatucarro.com/tratamiento-datos-alquilatucarro.pdf"
                external
                >Ver políticas</nuxt-link
              >
            </template>
          </u-switch>
        </u-form-field>
      </div>
    
  </u-form>
</template>

<script setup lang="ts">
import type {
  ReservationFormValidationSchemaType,
  ReservationWithFlightFormValidationSchemaType,
} from "#imports";

/** stores */
const storeSearch = useStoreSearchData();
const storeForm = useStoreReservationForm();

/** refs */
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
} = storeToRefs(storeForm);

/** vars */
const {
  phoneDropdownOptions,
  phoneInputOptions,
  phonePreferredCountries,
} = usePhoneField();


const identificationTypeOptions = [
  { value: "Cedula Ciudadania", label: "Cédula" },
  { value: "Pasaporte", label: "Pasaporte" },
  { value: "Cedula Extranjeria", label: "Extranjería" },
];

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

const reservationForm = ref(null);



/** emits */
const emit = defineEmits(['submit']);
const submit = () => {
  reservationForm.value.submit();
}
defineExpose({submit});

/** functions */
const onSubmit = (event) => {
  emit('submit', event.data)
}

</script>
