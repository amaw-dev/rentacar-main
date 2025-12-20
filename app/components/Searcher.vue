<template>
    <u-form 
        class="h-full w-full mx-auto md:w-3/6 lg:w-4/6 grid grid-cols-2 grid-rows-5 gap-2 light"
    >
        <div class="col-span-2 bg-white rounded p-3">
            <u-form-field name="lugarRecogida" label="Lugar de recogida">
                <!-- si es móvil usar select nativo -->
                <template v-if="smAndSmaller">
                    <select 
                        id="pickup-location" 
                        v-model="lugarRecogida"
                        class="w-full"
                        autofocus="false">
                        <option 
                            v-for="branch in sortedBranches" 
                            v-text="branch.name" 
                            :value="branch.code"
                        ></option>
                    </select>
                </template>
                <template v-else>
                    <u-select-menu 
                        v-model="lugarRecogida"
                        id="pickup-location"
                        label-key="name"
                        value-key="code"
                        class="w-full"
                        variant="ghost"
                        data-testid="pickup-location-test"
                        :items="sortedBranches"
                        :search-input="{
                            placeholder: 'Buscar sucursal',
                            autofocus: false,
                        }"
                        :autofocus="false"
                    />
                </template>
            </u-form-field>
        </div>
        <div class="col-span-2 bg-white rounded p-3">
            <u-form-field name="lugarDevolucion" label="Lugar de devolución">
                <!-- si es móvil usar select nativo -->
                <template v-if="smAndSmaller">
                    <select 
                        id="return-location" 
                        v-model="lugarDevolucion"
                        class="w-full"
                        autofocus="false">
                        <option 
                            v-for="branch in sortedBranches" 
                            v-text="branch.name" 
                            :value="branch.code"
                        ></option>
                    </select>
                </template>
                <template v-else>
                    <u-select-menu 
                        v-model="lugarDevolucion"
                        id="return-location"
                        data-testid="return-location-test"
                        label-key="name"
                        value-key="code"
                        variant="ghost" 
                        class="w-full" 
                        :items="sortedBranches"
                        :search-input="{
                            placeholder: 'Buscar sucursal',
                            autofocus: false,
                        }"
                        :autofocus="false"
                    />
                </template>
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="fechaRecogida" label="Día de recogida">
                <!-- si es móvil, usar input date nativo -->
                <template v-if="smAndSmaller">
                    <input 
                        type="date" 
                        name="pickup-date" 
                        id="pickup-date"
                        v-model="selectedPickupDate"
                        class="w-full"
                        :min="minPickupDate.toString()"
                        >
                </template>
                <template v-else>
                    <u-input-date 
                        id="pickup-date"
                        v-model="selectedPickupDate"  
                        variant="ghost" 
                        class="w-full" 
                        :min-value="minPickupDate"
                        disabled
                    >
                        <template #trailing>
                            <u-popover>
                                <u-button
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    aria-label="Seleccione una día de recogida"
                                    class="px-0"
                                >
                                    <template #leading>
                                        <CalendarIcon cls="size-4" />
                                    </template>
                                </u-button> 
                                <template #content>
                                    <u-calendar 
                                        v-model="selectedPickupDate" 
                                        class="p-2"
                                        :min-value="minPickupDate" 
                                    />
                                </template>
                            </u-popover>
                        </template>
                    </u-input-date>
                </template>
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="fechaDevolucion" label="Día de devolución">
                <!-- si es móvil, usar input date nativo -->
                <template v-if="smAndSmaller">
                    <input 
                        type="date" 
                        name="return-date" 
                        id="return-date"
                        v-model="selectedReturnDate"
                        class="w-full"
                        :min="minPickupDate.toString()"
                        :max="maxReturnDate?.toString()"
                        >
                </template>
                <template v-else>
                    <u-input-date 
                        id="return-date"
                        v-model="selectedReturnDate"
                        variant="ghost" 
                        class="w-full" 
                        :min-value="minPickupDate"
                        :max-value="maxReturnDate"
                        disabled
                    >
                        <template #trailing>
                            <u-popover>
                                <u-button
                                    color="neutral"
                                    variant="link"
                                    size="sm"
                                    aria-label="Seleccione una día de devolución"
                                    class="px-0"
                                >
                                    <template #leading>
                                        <CalendarIcon cls="size-4" />
                                    </template>
                                </u-button> 
                                <template #content>
                                    <u-calendar 
                                        v-model="selectedReturnDate" 
                                        class="p-2" 
                                        :min-value="minPickupDate"
                                        :max-value="maxReturnDate"
                                    />
                                </template>
                            </u-popover>
                        </template>
                    </u-input-date>
                </template>
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="horaRecogida" label="Hora de recogida">
                <!-- si es móvil, usar select nativo -->
                <template v-if="smAndSmaller">
                    <select 
                        id="pickup-hour" 
                        v-model="horaRecogida"
                        class="w-full"
                        autofocus="false">
                        <option 
                            v-for="hour in pickupHourOptions" 
                            v-text="hour.label" 
                            :value="hour.value"
                        ></option>
                    </select>
                </template>
                <template v-else>
                    <u-select-menu
                        v-model="horaRecogida" 
                        value-key="value"
                        label-key="label"
                        class="w-full"
                        variant="ghost" 
                        :autofocus="false"
                        :items="pickupHourOptions"
                    />
                </template>
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field label="Hora de devolución">
                <!-- si es móvil, usar select nativo -->
                <template v-if="smAndSmaller">
                    <select 
                        id="return-hour" 
                        v-model="horaDevolucion"
                        class="w-full"
                        autofocus="false">
                        <option 
                            v-for="hour in returnHourOptions" 
                            v-text="hour.label" 
                            :value="hour.value"
                        ></option>
                    </select>
                </template>
                <template v-else>
                    <u-select-menu
                        id="return-hour"
                        name="horaDevolucion"
                        v-model="horaDevolucion" 
                        value-key="value"
                        label-key="label"
                        variant="ghost" 
                        class="w-full"
                        :autofocus="false"
                        :items="returnHourOptions"
                    />
                </template>
            </u-form-field>
        </div>
        <div class="col-span-2">
            <u-button
                :to="{name: searchLinkName, params: searchLinkParams}"
                :disabled="pendingSearching"
                :loading="pendingSearching"
                class="search-button"

            >
                BUSCAR VEHÍCULOS
            </u-button>
        </div>
    </u-form>
</template>

<script setup lang="ts" async>
import { 
    SearcherFormValidationSchema,
    useStoreAdminData,
    useStoreSearchData,
    useStoreReservationForm
} from '#imports';
import { IconsCalendarIcon as CalendarIcon } from '#components' 

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
const { sortedBranches, pending: pendingAdminData } = storeToRefs(storeAdminData);

const {
    pickupHourOptions,
    returnHourOptions,
    searchLinkName,
    searchLinkParams,
} = useSearch()

/** consts */
const smAndSmaller = breakpoints.smallerOrEqual('sm') // sm and larger

</script>

