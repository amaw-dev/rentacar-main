<template>
  <div class="reservation-resume">
      <div class="carrusel-container">
        <carrusel 
          :models="categoryModels"
          :vehicle-models="vehicleCategories[categoryCode]?.modelos"
          :category="categoryCode"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <!-- lado izquierdo -->
        <div class="reservation-data">
          
          <div class="category-name" v-text="`Gama ${categoryCode}`"></div>
          <div class="category-description" v-text="categoryDescription"></div>
          <div v-if="hasPicoyPlaca()" class="category-picoyplaca" >
            <u-badge color="primary" variant="outline">sin pico y placa</u-badge>
          </div>
          <div class="pickup-info">
            <div class="pickup-location">
              <div class="pickup-location-label">Recogida:</div>
              <div class="pickup-location-text" v-text="selectedPickupLocation?.name"></div>
            </div>
            <div class="pickup-date">
              <div class="pickup-date-label">Fecha</div>
              <div class="pickup-date-text" v-text="formattedPickupDate"></div>
            </div>
            <div class="pickup-hour">
              <div class="pickup-hour-label">Hora</div>
              <div class="pickup-hour-text" v-text="formattedPickupHour"></div>
            </div>
          </div>

          <div class="return-info">
            <div class="return-location">
              <div class="return-location-label">Entrega:</div>
              <div class="return-location-text" v-text="selectedReturnLocation?.name"></div>
            </div>
            <div class="return-date">
              <div class="return-date-label">Fecha</div>
              <div class="return-date-text" v-text="formattedReturnDate"></div>
            </div>
            <div class="return-hour">
              <div class="return-hour-label">Hora</div>
              <div class="return-hour-text" v-text="formattedReturnHour"></div>
            </div>
          </div>

          <div class="renting">
            <div class="renting-label">Alquiler:</div>
            <div class="renting-item">
              {{ selectedDays }} {{ (selectedDays > 1) ? 'días' : 'día' }}
              <span v-if="hasExtraHours() && extraHoursQuantity">
                + {{ extraHoursQuantity }} {{ (extraHoursQuantity > 1) ? 'Horas extras' : 'Hora extra'  }}
              </span>
            </div>
            <div v-if="selectedMonthlyMileage == '1k_kms'" class="renting-item">
              Kilometraje 1.000 kms
            </div>
            <div v-if="selectedMonthlyMileage == '2k_kms'" class="renting-item">
              Kilometraje 2.000 kms
            </div>
            <div v-if="selectedMonthlyMileage == '3k_kms'" class="renting-item">
              Kilometraje 3.000 kms
            </div>
            <div v-else class="renting-item">Kilometraje ilimitado</div>
            <div class="renting-item">
              {{ haveTotalInsurance ? "Con Seguro total" : "Con Seguro básico"}}
            </div>
          </div>
        </div>
        <!-- lado derecho -->
         <div class="prices">
            <div class="text-right font-bold">Tarifa Diaria</div>
            <div class="discount" v-if="hasDiscount()">
              <div>
                <span>$</span>
                <del>{{ currencyDailyBasePrice }}</del>
              </div>
            </div>
            <div class="discount-percentage">
              <span>Dto Hoy {{ getDiscount }} %</span>
            </div>
            <div class="daily-price">
              <div>
                <span>$</span>
                {{ currencyDailyPrice }}
              </div>
            </div>
            <div v-if="hasExtraHours()" class="extra-hours">
              <div class="extra-hours-label">{{ extraHoursQuantity }} Horas extras</div>
              <div class="extra-hours-text">
                <span>$</span>
                {{ currencyExtraHoursPrice }}
              </div>
            </div>
            <div v-if="hasReturnFee()" class="return-fee">
              <div class="return-fee-label">Retorno otra sede</div>
              <div class="return-fee-text">
                <span>$</span>
                {{ currencyReturnFee }}
              </div>
            </div>
            
            
            <div v-if="hasAdditionalServices" class="extra-services">
              <div class="extra-services-label">Adicionales</div>
              <div class="extra-services-text">
                <div v-if="withExtraDriver" class="extra-service">
                  <div class="extra-service-label">Conductor Adicional</div>
                  <div class="extra-service-text">
                    <span>$</span>
                    {{ currencyExtraDriverPrice }}
                  </div>
                </div>
                <div v-if="withBabySeat" class="extra-service">
                  <div class="extra-service-label">Silla para bebé</div>
                  <div class="extra-service-text">
                    <span>$</span>
                    {{ currencyBabySeatPrice }}
                  </div>
                </div>
                <div v-if="withWash" class="extra-service">
                  <div class="extra-service-label">Lavado</div>
                  <div class="extra-service-text">
                    <span>$</span>
                    {{ currencyWashPrice }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="total-price">
              <div class="total-price-label">Total a pagar:</div>
              <div class="total-price-text">
                <span>$</span>
                {{ currencyTotalPrice }}
              </div>
            </div>
            <div class="not-included">
              No incluye IVA ni tasa admin
            </div>
         </div>
      </div>
  </div>
</template>

<script setup lang="ts">
/** imports */
import {
  useStoreReservationForm,
  useStoreSearchData,
  useVehicleCategories,
} from "#imports";
import { defineAsyncComponent } from 'vue'
const Carrusel = defineAsyncComponent(() => import('./Carrusel.vue'))

/** types */
import type { ReservationResumeProps } from "#imports";

/** props */
const props = defineProps<ReservationResumeProps>();

/** stores */
const storeForm = useStoreReservationForm();
const storeSearch = useStoreSearchData();

/** refs */
const {
  categoryModels,
  categoryCode,
  categoryDescription,
  extraHoursQuantity,
  currencyExtraHoursPrice,
  currencyReturnFee,
  currencyTotalPrice,
  currencyDailyBasePrice,
  currencyDailyPrice,
  currencyExtraDriverPrice,
  currencyBabySeatPrice,
  currencyWashPrice,
  numberDays,
  hasPicoyPlaca,
  hasDiscount,
  hasExtraHours,
  hasReturnFee,
  getDiscount,
  hasAdditionalServices,
  withExtraDriver,
  withBabySeat,
  withWash,
} = props.category;

const {
    selectedPickupLocation,
    selectedReturnLocation,
    selectedMonthlyMileage,
    selectedDays,
    haveTotalInsurance,
    humanFormattedPickupDate: formattedPickupDate,
    humanFormattedReturnDate: formattedReturnDate,
    humanFormattedPickupHour: formattedPickupHour,
    humanFormattedReturnHour: formattedReturnHour,
} = storeToRefs(storeForm);

/** vars */
const { vehicleCategories } = useVehicleCategories();

</script>
