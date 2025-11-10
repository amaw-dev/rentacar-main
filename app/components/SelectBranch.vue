<template>
    <USelectMenu
        :search-input="{
            placeholder: 'Buscar...',
        }"
        size="xl"
        placeholder="Elige una ciudad"
        icon="ic:baseline-location-on"
        trailing-icon="ic:baseline-keyboard-arrow-down"
        :items 
        class="w-full rounded-xl bg-white text-black"
        :ui="{leadingIcon: 'bg-red-500', base: ['py-6']}"
    >

    </USelectMenu>
</template>

<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import dayjs from "dayjs";

const { branches, reservation } = useAppConfig()

const reservationInitDay: string = dayjs().add(1, 'day').format('YYYY-MM-DD')
const reservationEndDay: string = dayjs().add(8, 'day').format('YYYY-MM-DD')
const reservationInitHour: string = '12:00'
const reservationEndHour: string = '12:00'

const createReservationURL = (branchCode: string) => `${reservation.website}/lr/${branchCode}/ld/${branchCode}/fr/${reservationInitDay}/fd/${reservationEndDay}/hr/${reservationInitHour}/hd/${reservationEndHour}`;
// https://reservatuauto.com/lr/AAPEI/ld/AAPEI/fr/2025-11-08/fd/2025-11-15/hr/12:00/hd/12:00

const items: SelectMenuItem[] = branches.map((branch) => ({
    label: branch.name,
    value: branch.code,
    onSelect: async () => await navigateTo(createReservationURL(branch.code), { 
        external: true, open: {
            target: '_blank',
        } 
    })
}))
</script>

<style scoped>

</style>