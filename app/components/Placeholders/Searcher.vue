<template>
    <u-form 
        class="mx-auto h-full w-full md:w-3/6 lg:w-4/6 grid grid-cols-2 grid-rows-5 gap-2 light"
    >
        <div class="col-span-2 bg-white rounded p-3">
            <u-form-field name="lugarRecogida" label="Lugar de recogida">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="col-span-2 bg-white rounded p-3">
            <u-form-field name="lugarDevolucion" label="Lugar de devolución">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="fechaRecogida" label="Día de recogida">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="fechaDevolucion" label="Día de devolución">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field name="horaRecogida" label="Hora de recogida">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="bg-white rounded p-3">
            <u-form-field label="Hora de devolución">
                <u-progress class="w-full py-3" v-model="progress" />
            </u-form-field>
        </div>
        <div class="col-span-2">
            <u-button 
                type="submit"
                class="w-full bg-red-600 disabled:bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold justify-center"
                @click.prevent="() => false"
                disabled
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

const storeReservationForm = useStoreReservationForm();
const storeAdminData = useStoreAdminData();
const storeSearchData = useStoreSearchData();

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
} = useSearch()

const progress = ref(null);
</script>

<style scoped>

</style>