<template>
    <u-form
        class="w-full mx-auto md:w-3/6 lg:w-4/6 grid grid-cols-2 auto-rows-min gap-2 light"
    >
        <div class="col-span-2 bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Lugar de recogida" size="xl">
                <!-- Móvil: select nativo (CSS: sm:hidden) -->
                <select
                    v-if="lugarRecogida"
                    id="pickup-location-mobile"
                    v-model="lugarRecogida"
                    aria-label="Lugar de recogida"
                    class="w-full sm:hidden"
                >
                    <option
                        v-for="branch in sortedBranches"
                        :key="branch.code"
                        v-text="branch.name"
                        :value="branch.code"
                    ></option>
                </select>
                <select v-else disabled class="w-full sm:hidden text-gray-400" aria-label="Lugar de recogida">
                    <option>Cargando...</option>
                </select>
                <!-- Desktop: u-select-menu (CSS: hidden sm:block) -->
                <u-select-menu
                    v-model="lugarRecogida"
                    id="pickup-location"
                    label-key="name"
                    value-key="code"
                    class="w-full hidden sm:block"
                    variant="ghost"
                    data-testid="pickup-location-test"
                    :items="sortedBranches"
                    :search-input="{
                        placeholder: 'Buscar sucursal',
                        autofocus: false,
                    }"
                    :ui="{
                        content: 'bg-white',
                        input: 'bg-white text-gray-900 placeholder:text-gray-500',
                        item: 'text-gray-900',
                        itemLeadingIcon: 'text-gray-500',
                    }"
                    :autofocus="false"
                />
            </u-form-field>
        </div>
        <div class="col-span-2 bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Lugar de devolución" size="xl">
                <!-- Móvil: select nativo (CSS: sm:hidden) -->
                <select
                    v-if="lugarDevolucion"
                    id="return-location-mobile"
                    v-model="lugarDevolucion"
                    aria-label="Lugar de devolución"
                    class="w-full sm:hidden"
                >
                    <option
                        v-for="branch in sortedBranches"
                        :key="branch.code"
                        v-text="branch.name"
                        :value="branch.code"
                    ></option>
                </select>
                <select v-else disabled class="w-full sm:hidden text-gray-400" aria-label="Lugar de devolución">
                    <option>Cargando...</option>
                </select>
                <!-- Desktop: u-select-menu (CSS: hidden sm:block) -->
                <u-select-menu
                    v-model="lugarDevolucion"
                    id="return-location"
                    data-testid="return-location-test"
                    label-key="name"
                    value-key="code"
                    variant="ghost"
                    class="w-full hidden sm:block"
                    :items="sortedBranches"
                    :search-input="{
                        placeholder: 'Buscar sucursal',
                        autofocus: false,
                    }"
                    :ui="{
                        content: 'bg-white',
                        input: 'bg-white text-gray-900 placeholder:text-gray-500',
                        item: 'text-gray-900',
                        itemLeadingIcon: 'text-gray-500',
                    }"
                    :autofocus="false"
                />
            </u-form-field>
        </div>
        <div class="bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Día de recogida" size="xl">
                <!-- Móvil: input nativo (CSS: sm:hidden) -->
                <input
                    v-if="minPickupDate"
                    type="date"
                    id="pickup-date-mobile"
                    name="pickup-date-mobile"
                    v-model="selectedPickupDate"
                    aria-label="Día de recogida"
                    class="w-full sm:hidden"
                    :min="minPickupDate.toString()"
                >
                <!-- Desktop: u-input-date (CSS: hidden sm:block) -->
                <u-input-date
                    v-if="minPickupDate"
                    id="pickup-date"
                    v-model="selectedPickupDate"
                    variant="ghost"
                    class="w-full hidden sm:block"
                    :min-value="minPickupDate"
                    @click="pickupDateCalendarOpen = true"
                >
                    <template #trailing>
                        <u-popover
                            v-model:open="pickupDateCalendarOpen"
                            :ui="{ content: 'bg-white' }"
                        >
                            <u-button
                                color="neutral"
                                variant="link"
                                size="sm"
                                aria-label="Seleccione una día de recogida"
                                class="px-0"
                            >
                                <template #leading>
                                    <IconsCalendarIcon cls="size-4" />
                                </template>
                            </u-button>
                            <template #content>
                                <u-calendar
                                    v-model="selectedPickupDate"
                                    class="p-2 calendar-light"
                                    :min-value="minPickupDate"
                                    color="success"
                                />
                            </template>
                        </u-popover>
                    </template>
                </u-input-date>
            </u-form-field>
        </div>
        <div class="bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Día de devolución" size="xl">
                <!-- Móvil: input nativo (CSS: sm:hidden) -->
                <input
                    v-if="minPickupDate"
                    type="date"
                    id="return-date-mobile"
                    name="return-date-mobile"
                    v-model="selectedReturnDate"
                    aria-label="Día de devolución"
                    class="w-full sm:hidden"
                    :min="minPickupDate.toString()"
                    :max="maxReturnDate?.toString()"
                >
                <!-- Desktop: u-input-date (CSS: hidden sm:block) -->
                <u-input-date
                    v-if="minPickupDate"
                    id="return-date"
                    v-model="selectedReturnDate"
                    variant="ghost"
                    class="w-full hidden sm:block"
                    :min-value="minPickupDate"
                    :max-value="maxReturnDate"
                    @click="returnDateCalendarOpen = true"
                >
                    <template #trailing>
                        <u-popover
                            v-model:open="returnDateCalendarOpen"
                            :ui="{ content: 'bg-white' }"
                        >
                            <u-button
                                color="neutral"
                                variant="link"
                                size="sm"
                                aria-label="Seleccione una día de devolución"
                                class="px-0"
                            >
                                <template #leading>
                                    <IconsCalendarIcon cls="size-4" />
                                </template>
                            </u-button>
                            <template #content>
                                <u-calendar
                                    v-model="selectedReturnDate"
                                    class="p-2 calendar-light"
                                    :min-value="minPickupDate"
                                    :max-value="maxReturnDate"
                                    color="success"
                                />
                            </template>
                        </u-popover>
                    </template>
                </u-input-date>
            </u-form-field>
        </div>
        <div class="bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Hora de recogida" size="xl">
                <!-- Móvil: select nativo (CSS: sm:hidden) -->
                <select
                    id="pickup-hour-mobile"
                    v-model="horaRecogida"
                    aria-label="Hora de recogida"
                    class="w-full sm:hidden"
                >
                    <option
                        v-for="hour in pickupHourOptions"
                        :key="hour.value"
                        v-text="hour.label"
                        :value="hour.value"
                    ></option>
                </select>
                <!-- Desktop: u-select-menu (CSS: hidden sm:block) -->
                <u-select-menu
                    v-model="horaRecogida"
                    value-key="value"
                    label-key="label"
                    class="w-full hidden sm:block"
                    variant="ghost"
                    :autofocus="false"
                    :items="pickupHourOptions"
                    :ui="{
                        content: 'bg-white',
                        item: 'text-gray-900',
                    }"
                />
            </u-form-field>
        </div>
        <div class="bg-white rounded-xl p-2 shadow-sm">
            <u-form-field label="Hora de devolución" size="xl">
                <!-- Móvil: select nativo (CSS: sm:hidden) -->
                <select
                    id="return-hour-mobile"
                    v-model="horaDevolucion"
                    aria-label="Hora de devolución"
                    class="w-full sm:hidden"
                >
                    <option
                        v-for="hour in returnHourOptions"
                        :key="hour.value"
                        v-text="hour.label"
                        :value="hour.value"
                    ></option>
                </select>
                <!-- Desktop: u-select-menu (CSS: hidden sm:block) -->
                <u-select-menu
                    id="return-hour"
                    v-model="horaDevolucion"
                    value-key="value"
                    label-key="label"
                    variant="ghost"
                    class="w-full hidden sm:block"
                    :autofocus="false"
                    :items="returnHourOptions"
                    :ui="{
                        content: 'bg-white',
                        item: 'text-gray-900',
                    }"
                />
            </u-form-field>
        </div>
        <div class="col-span-2">
            <u-button
                :to="{name: searchLinkName, params: searchLinkParams}"
                :disabled="pendingSearching || !animateSearchButton"
                :loading="pendingSearching"
                :class="{'search-button': true, 'search-button-glow': animateSearchButton}"
                size="xl"
            >
                BUSCAR VEHÍCULOS
            </u-button>
        </div>
    </u-form>
</template>

<script setup lang="ts">
// Note: stores and components are auto-imported by Nuxt

/** Local refs - initialized lazily to avoid SSR Pinia errors */
const lugarRecogida = ref<string | null>(null);
const lugarDevolucion = ref<string | null>(null);
const horaRecogida = ref<string | null>(null);
const horaDevolucion = ref<string | null>(null);
const referido = ref<string | null>(null);
const minPickupDate = ref<any>(null);
const maxReturnDate = ref<any>(null);
const selectedPickupDate = ref<any>(null);
const selectedReturnDate = ref<any>(null);
const pendingSearching = ref<boolean>(false);
const sortedBranches = ref<any[]>([]);
const pickupHourOptions = ref<any[]>([]);
const returnHourOptions = ref<any[]>([]);
const searchLinkName = ref<string>('');
const searchLinkParams = ref<any>({});
const animateSearchButton = ref<boolean>(true);

const pickupDateCalendarOpen = ref<boolean>(false);
const returnDateCalendarOpen = ref<boolean>(false);

// Initialize stores only on client side after mount
onMounted(() => {
  const storeReservationForm = useStoreReservationForm();
  const storeAdminData = useStoreAdminData();
  const storeSearchData = useStoreSearchData();

  const formRefs = storeToRefs(storeReservationForm);
  const searchRefs = storeToRefs(storeSearchData);
  const adminRefs = storeToRefs(storeAdminData);

  // Sync store refs to local refs
  watch(() => formRefs.lugarRecogida.value, (val) => lugarRecogida.value = val, { immediate: true });
  watch(() => formRefs.lugarDevolucion.value, (val) => lugarDevolucion.value = val, { immediate: true });
  watch(() => formRefs.horaRecogida.value, (val) => horaRecogida.value = val, { immediate: true });
  watch(() => formRefs.horaDevolucion.value, (val) => horaDevolucion.value = val, { immediate: true });
  watch(() => formRefs.referido.value, (val) => referido.value = val, { immediate: true });
  watch(() => formRefs.minPickupDate.value, (val) => minPickupDate.value = val, { immediate: true });
  watch(() => formRefs.maxReturnDate.value, (val) => maxReturnDate.value = val, { immediate: true });
  watch(() => formRefs.selectedPickupDate.value, (val) => selectedPickupDate.value = val, { immediate: true });
  watch(() => formRefs.selectedReturnDate.value, (val) => selectedReturnDate.value = val, { immediate: true });
  watch(() => searchRefs.pending.value, (val) => pendingSearching.value = val, { immediate: true });
  watch(() => adminRefs.sortedBranches.value, (val) => sortedBranches.value = val, { immediate: true });

  // Sync local refs back to store (bi-directional binding)
  watch(lugarRecogida, (val) => formRefs.lugarRecogida.value = val);
  watch(lugarDevolucion, (val) => formRefs.lugarDevolucion.value = val);
  watch(horaRecogida, (val) => formRefs.horaRecogida.value = val);
  watch(horaDevolucion, (val) => formRefs.horaDevolucion.value = val);
  watch(selectedPickupDate, (val) => formRefs.selectedPickupDate.value = val);
  watch(selectedReturnDate, (val) => formRefs.selectedReturnDate.value = val);

  // Initialize useSearch composable
  const searchComposable = useSearch();
  watch(() => searchComposable.pickupHourOptions.value, (val) => pickupHourOptions.value = val, { immediate: true });
  watch(() => searchComposable.returnHourOptions.value, (val) => returnHourOptions.value = val, { immediate: true });
  watch(() => searchComposable.searchLinkName.value, (val) => searchLinkName.value = val, { immediate: true });
  watch(() => searchComposable.searchLinkParams.value, (val) => searchLinkParams.value = val, { immediate: true });
  watch(() => searchComposable.animateSearchButton.value, (val) => animateSearchButton.value = val, { immediate: true });
});

</script>


