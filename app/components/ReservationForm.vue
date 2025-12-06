<template>
  <u-page-card class="light">
    <template #title>
      <div class="text-xl">Datos para reservar</div>
      <div class="text-muted">Completa tus datos y finaliza la reserva</div>
    </template>
    <template #default>
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
            :styleClasses="phoneFieldClasses"
            :preferred-countries="phonePreferredCountries"
            @on-input="validatePhone"
          ></VueTelInput>
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
    </template>
  </u-page-card>
</template>

<script setup lang="ts">
import type {
  ReservationFormValidationSchemaType,
  ReservationWithFlightFormValidationSchemaType,
} from "#imports";

const {
  validatePhone,
  phoneDropdownOptions,
  phoneInputOptions,
  phoneFieldClasses,
  phonePreferredCountries,
  isValidPhone,
} = usePhoneField();

const props = defineProps<{
  formState:
    | ReservationFormValidationSchemaType
    | ReservationWithFlightFormValidationSchemaType;
}>();

const identificationTypeOptions = ref([
  { value: "Cedula Ciudadania", label: "Cédula" },
  { value: "Pasaporte", label: "Pasaporte" },
  { value: "Cedula Extranjeria", label: "Extranjería" },
]);
</script>
