<template>
  <div v-if="!hasAvailableCategories && !pendingSearch" class="text-center">
    <div class="text-white text-center">
      <div class="text-3xl">¡Oops!</div>
      <div class="text-lg">
        Nos quedamos sin carritos en {{pickupCityName}} para el {{ humanFormattedPickupDate }}.
      </div>
      <p class="text-lg">
        pero no te preocupes, nuestro sistema se actualiza cada hora, <br>
        puedes intentar más tarde o intenta cambiar la fecha o el lugar de recogida
      </p>
    </div>
  </div>
  <template v-if="!pendingSearch">
    <div v-if="hasAvailableCategories" class="text-white text-center">
      <div class="text-lg md:text-xl font-bold">¡Vehículos Disponibles!</div>
      <div class="text-sm md:text-base">
        <span>En <span class="text-yellow-400 font-semibold">{{pickupCityName}}</span> para el <span class="text-yellow-400 font-semibold">{{ humanFormattedPickupDate }}</span>.</span>
        <span class="block md:inline"> ¡No te quedes sin el tuyo, Reserva ahora!</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="category in filteredCategories" :key="`cat-${category.categoryCode}`">
        <placeholders-unable-category-card
          v-if="
            category.estimatedTotalAmount == 999999999 &&
            vehicleCategories[category.categoryCode]
          "
          :category
          :vehicleCategory="vehicleCategories[category.categoryCode]"
        />
        <category-card
          v-else-if="vehicleCategories[category.categoryCode]"
          :category
          :vehicle-category="vehicleCategories[category.categoryCode]"
          @selected-category="setSelectedCategory"
        />
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
        <div class="w-full flex flex-col gap-3">
          <!-- Share Capsule -->
          <div class="flex justify-center">
            <div class="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <span class="text-sm text-gray-600 font-medium">Compartir</span>
              <button
                @click="shareWhatsApp"
                class="flex items-center justify-center w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                aria-label="Compartir en WhatsApp"
              >
                <UIcon name="i-lucide-message-circle" class="size-4" />
              </button>
              <button
                @click="shareFacebook"
                class="flex items-center justify-center w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                aria-label="Compartir en Facebook"
              >
                <UIcon name="i-lucide-facebook" class="size-4" />
              </button>
              <button
                @click="shareTwitter"
                class="flex items-center justify-center w-9 h-9 bg-black hover:bg-gray-800 text-white rounded-full transition-colors"
                aria-label="Compartir en X"
              >
                <UIcon name="i-lucide-twitter" class="size-4" />
              </button>
              <button
                @click="copyReservationLink"
                class="flex items-center justify-center w-9 h-9 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
                aria-label="Copiar enlace"
              >
                <UIcon :name="linkCopied ? 'i-lucide-check' : 'i-lucide-link'" class="size-4" />
              </button>
            </div>
          </div>
          <!-- Action Buttons -->
          <div class="flex gap-2">
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
          </div>
        </div>
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
  hasAvailableCategories,
} = storeToRefs(storeSearch);
const { vehiculo, humanFormattedPickupDate, isSubmittingForm, selectedPickupLocation } = storeToRefs(storeForm);
const { vehicleCategories } = useVehicleCategories();
const slideoverReservationResume = ref<boolean>(false);
const slideoverReservationForm = ref<boolean>(false);
const reservationFormComponent = ref(null);
const linkCopied = ref(false);

/** Share functions */
function getReservationShareUrl() {
  if (!import.meta.client) return '';
  const url = new URL(window.location.href);
  if (vehiculo.value) {
    url.searchParams.set('resumen', vehiculo.value);
  }
  return url.toString();
}

function shareWhatsApp() {
  const url = getReservationShareUrl();
  const text = encodeURIComponent(`¡Mira esta opción de alquiler de carro! ${url}`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareFacebook() {
  const url = encodeURIComponent(getReservationShareUrl());
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareTwitter() {
  const url = encodeURIComponent(getReservationShareUrl());
  const text = encodeURIComponent('¡Mira esta opción de alquiler de carro!');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

async function copyReservationLink() {
  try {
    await navigator.clipboard.writeText(getReservationShareUrl());
    linkCopied.value = true;
    setTimeout(() => { linkCopied.value = false; }, 2000);
  } catch (err) {
    console.error('Error al copiar enlace:', err);
  }
}

/** query params para deep-linking:
 * ?resumen=CODIGO  → abre resumen de reserva
 * ?reservar=CODIGO → abre formulario de datos directamente
 */
const route = useRoute();
const resumenParam = computed(() => route.query.resumen as string | undefined);
const reservarParam = computed(() => route.query.reservar as string | undefined);
const codigoCategoria = computed(() => resumenParam.value || reservarParam.value);
const abrirFormularioDirecto = computed(() => !!reservarParam.value);

// Flag para evitar loops cuando actualizamos la URL programáticamente
const isUpdatingFromUrl = ref(false);

// Actualizar URL cuando cambia el estado de los slideovers
function updateUrlParams(resumen?: string, reservar?: string) {
  if (!import.meta.client) return;

  const url = new URL(window.location.href);

  if (reservar) {
    url.searchParams.delete('resumen');
    url.searchParams.set('reservar', reservar);
  } else if (resumen) {
    url.searchParams.delete('reservar');
    url.searchParams.set('resumen', resumen);
  } else {
    url.searchParams.delete('resumen');
    url.searchParams.delete('reservar');
  }

  window.history.replaceState({}, '', url.toString());
}

// Limpiar URL cuando se cierra el slideover de resumen
watch(slideoverReservationResume, (isOpen) => {
  if (isUpdatingFromUrl.value) return;

  if (!isOpen) {
    updateUrlParams(undefined, undefined);
  }
});

// Sincronizar URL con estado del slideover de formulario
watch(slideoverReservationForm, (isOpen) => {
  if (isUpdatingFromUrl.value) return;
  if (!vehiculo.value) return;

  const codigo = vehiculo.value;
  if (isOpen) {
    updateUrlParams(undefined, codigo);
  } else {
    // Volver a resumen si el slideover de resumen sigue abierto
    if (slideoverReservationResume.value) {
      updateUrlParams(codigo, undefined);
    }
  }
});

// Auto-abrir slideover cuando se carguen las categorías y exista el param
watch(
  [filteredCategories, codigoCategoria],
  ([categories, codigo]) => {
    if (!codigo || categories.length === 0) return;

    const categoryData = categories.find(c => c.categoryCode === codigo);
    if (!categoryData || !vehicleCategories[codigo]) return;

    // Marcar que estamos actualizando desde la URL
    isUpdatingFromUrl.value = true;

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
          // Resetear flag después de que todo esté abierto
          nextTick(() => {
            isUpdatingFromUrl.value = false;
          });
        });
      } else {
        // Resetear flag
        nextTick(() => {
          isUpdatingFromUrl.value = false;
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
  // Actualizar URL con el código de la categoría
  updateUrlParams(category.categoryCode.value, undefined);
}

const { submitForm } = storeForm;

/** Ciudad de recogida seleccionada (no la de la landing) */
const { getCityById } = useData();
const pickupCityName = computed(() => {
  const citySlug = selectedPickupLocation.value?.city;
  if (!citySlug) return null;
  const cityData = getCityById(citySlug);
  return cityData?.name ?? null;
});
</script>
