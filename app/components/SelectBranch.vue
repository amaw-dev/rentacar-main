<template>
    <!-- si es móvil usar select nativo -->
    <template v-if="smAndSmaller">
      <div class="relative w-full">
        <LocationIcon cls="absolute left-3 top-1/2 -translate-y-1/2 text-red-600 size-5 pointer-events-none" />
        <select
          v-model="selectedBranch"
          :class="[
            'w-full rounded-xl text-black py-6 pl-10 pr-12 border border-gray-400 appearance-none',
            variant === 'gray' ? 'bg-gray-200' : 'bg-white'
          ]"
          @change="() => (selectedBranch) ? goToReservationPage(selectedBranch) : null"
        >
          <option value="null">Elige una ciudad</option>
          <option
            v-for="branch in branches"
            :value="branch.code"
            v-text="branch.name"
          ></option>
        </select>
        <ChevronDownIcon cls="absolute right-4 top-1/2 -translate-y-1/2 size-6 pointer-events-none text-gray-600" />
      </div>
    </template>
    <template v-else>
      <USelectMenu
        :search-input="{
          placeholder: 'Buscar...',
        }"
        size="xl"
        placeholder="Elige una ciudad"
        :items
        :class="[
          'w-full rounded-xl text-black border border-gray-400',
          variant === 'gray' ? 'bg-gray-200' : 'bg-white'
        ]"
        :ui="{ leadingIcon: 'bg-red-500', base: ['py-6'], placeholder: 'text-black' }"
      >
        <template #leading>
          <LocationIcon cls="text-red-600 size-5" />
        </template>
        <template #trailing>
          <ChevronDownIcon cls="size-6 text-gray-600" />
        </template>
      </USelectMenu>
    </template>
</template>

<script setup lang="ts">
/** types */
import type { SelectMenuItem } from "@nuxt/ui";
import type { BranchData } from "#imports";

/** imports */
import { today } from "@internationalized/date";

/** components */
import {
  IconsLocationIcon as LocationIcon,
  IconsChevronDownIcon as ChevronDownIcon,
} from "#components";

/** props */
const props = withDefaults(defineProps<{
  variant?: 'white' | 'gray'
}>(), {
  variant: 'white'
});

/** consts */
const { branches, reservation, defaultTimezone } = useAppConfig();

const reservationInitDay: string = today(defaultTimezone)
  .add({ days: 1 })
  .toString();
const reservationEndDay: string = today(defaultTimezone)
  .add({ days: 8 })
  .toString();
const reservationInitHour: string = "12:00";
const reservationEndHour: string = "12:00";

const { smAndSmaller } = useResponsive();

const items: SelectMenuItem[] = branches.map((branch: BranchData) => ({
  label: branch.name,
  value: branch.code,
  onSelect: () => goToReservationPage(branch),
}));

/** refs */
const selectedBranch = ref<BranchData['code'] | null>(null)

/** functions */
const goToReservationPage = async (branch: BranchData) =>
  await navigateTo(createReservationURL(branch), {
    external: true,
    open: {
      target: "_blank",
    },
  });

const createReservationURL = (branch: BranchData) =>
  `${reservation.website}/${branch.city}/buscar-vehiculos/lugar-recogida/${branch.code.toLowerCase()}/lugar-devolucion/${branch.code.toLowerCase()}/fecha-recogida/${reservationInitDay}/fecha-devolucion/${reservationEndDay}/hora-recogida/${reservationInitHour}/hora-devolucion/${reservationEndHour}`;

  // https://alquilatucarro.com/cali/buscar-vehiculos/lugar-recogida/aakal/lugar-devolucion/aakal/fecha-recogida/2026-01-10/fecha-devolucion/2026-01-17/hora-recogida/12:00/hora-devolucion/12:00

</script>
