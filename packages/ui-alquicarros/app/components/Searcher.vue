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

/** stores */
const storeReservationForm = useStoreReservationForm();
const storeAdminData = useStoreAdminData();
const storeSearchData = useStoreSearchData();

/** refs */
const {
    lugarRecogida,
    lugarDevolucion,
    horaRecogida,
    horaDevolucion,
    referido,
    minPickupDate,
    maxReturnDate,
    selectedPickupDate,
    selectedReturnDate,
} = storeToRefs(storeReservationForm)
const { pending: pendingSearching } = storeToRefs(storeSearchData);
const { sortedBranches } = storeToRefs(storeAdminData);

const {
    pickupHourOptions,
    returnHourOptions,
    searchLinkName,
    searchLinkParams,
    animateSearchButton,
} = useSearch()

const pickupDateCalendarOpen = ref<boolean>(false);
const returnDateCalendarOpen = ref<boolean>(false);

</script>


