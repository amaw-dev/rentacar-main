/** stores */
import { useStoreReservationForm } from "#imports";

/** types */
import type { CategoryAvailabilityData, LocalizaErrorResponse } from "#imports";
import type { FetchError } from "ofetch";

export default async function useFetchCategoriesAvailabilityData() {
  const config = useRuntimeConfig();
  const endpoint =
    config.public.rentacarApiReservasCategoriesAvailabilityEndpoint;
  const { lugarRecogida, lugarDevolucion, fullPickupDate, fullReturnDate } =
    storeToRefs(useStoreReservationForm());
  const data = ref<CategoryAvailabilityData[] | null>(null);
  const error = ref<LocalizaErrorResponse | null>(null);

  try {
    const response = await $fetch<CategoryAvailabilityData[]>(endpoint, {
      method: "POST",
      body: {
        franchise: config.public.rentacarFranchise,
        pickupLocation: lugarRecogida.value,
        returnLocation: lugarDevolucion.value,
        pickupDateTime: fullPickupDate.value,
        returnDateTime: fullReturnDate.value,
      },
    });

    data.value = response;
  } catch (e: any) {
    const er = e as FetchError;
    error.value = er.data as LocalizaErrorResponse;
  }

  return { data, error };
}
