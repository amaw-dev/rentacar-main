<template>
  <u-page-card class="reservation-resume light">
    <template #title>
      <div class="text-xl">Resumen de tu reserva</div>
      <div class="text-muted">Antes de reservar revisa la información</div>
    </template>
    <template #default>
      <div class="grid grid-cols-2 gap-2">
        <!-- lado izquierdo -->
        <div class="reservation-data">
          <div class="carrusel-container">
            <carrusel 
              :models="categoryModels"
              :vehicle-models="vehicleCategories[categoryCode]?.modelos"
              :category="categoryCode"
            />
          </div>
          <div class="category-name" v-text="`Gama ${categoryCode}`"></div>
          <div class="category-description" v-text="categoryDescription"></div>
          <div v-if="hasPicoyPlaca()" class="category-picoyplaca" >
            <u-badge color="primary" variant="outline">sin pico y placa</u-badge>
          </div>
          <div class="pickup-info">
            <div class="pickup-location">
              <div class="pickup-location-label">Lugar recogida</div>
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
              <div class="return-location-label">Lugar Entrega</div>
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
            <div class="total-price">
              <div class="total-price-label"></div>
              <div class="total-price-text"></div>
            </div>
            <div class="not-included">
              No incluye IVA ni tasa admin
            </div>
            <div class="included">
              <div class="included-label">El valor incluye:</div>
              <ul class="included-text">
                <li v-if="selectedMonthlyMileage == '1k_kms'" class="mileage">
                  1.000 kms
                </li>
                <li v-if="selectedMonthlyMileage == '2k_kms'" class="mileage">
                  2.000 kms
                </li>
                <li v-if="selectedMonthlyMileage == '3k_kms'" class="mileage">
                  3.000 kms
                </li>
                <li v-else class="unlimited-km">Kms ilimitado</li>
                <li class="coverage">
                  {{ haveTotalInsurance ? "Seguro total" : "Seguro básico"}}
                </li>
              </ul>
            </div>
            <div v-if="hasAdditionalServices" class="additional-services">
              <div class="additional-services-label">Adicionales seleccionados:</div>
              <div v-if="withExtraDriver">Conductor add</div>
              <div v-if="withBabySeat">Silla para bebé</div>
              <div v-if="withWash">Lavado</div>
            </div>
         </div>
      </div>
    </template>
  </u-page-card>
</template>

<script setup lang="ts">
/** imports */
import {
  useStoreReservationForm,
  useStoreSearchData,
  useVehicleCategories,
  formatHumanDate,
  formatHumanTime,
  toDatetime,
  createCurrentDateObject
} from "#imports";

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
    selectedPickupDate,
    selectedReturnDate,
    selectedPickupHour,
    selectedReturnHour,
    selectedMonthlyMileage,
    selectedDays,
    haveTotalInsurance
} = storeToRefs(storeForm);

/** vars */
const { vehicleCategories } = useVehicleCategories();

const formattedPickupDate: string = selectedPickupDate.value ? formatHumanDate(selectedPickupDate.value) : ''
const formattedReturnDate: string = selectedReturnDate.value ? formatHumanDate(selectedReturnDate.value) : ''
const formattedPickupHour: string = selectedPickupHour.value ? formatHumanTime(toDatetime(createCurrentDateObject(), selectedPickupHour.value)) : ''
const formattedReturnHour: string = selectedReturnHour.value ? formatHumanTime(toDatetime(createCurrentDateObject(), selectedReturnHour.value)) : ''
</script>
