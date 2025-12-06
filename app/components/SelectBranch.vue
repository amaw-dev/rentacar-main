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
import { today } from '@internationalized/date';

const { branches, reservation, defaultTimezone } = useAppConfig()

const reservationInitDay: string = today(defaultTimezone).add({days: 1}).toString()
const reservationEndDay: string = today(defaultTimezone).add({days:8}).toString()
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