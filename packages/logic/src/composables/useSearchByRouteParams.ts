// External dependencies
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

// Internal dependencies - stores
import useStoreReservationForm from '../stores/useStoreReservationForm';

// Internal dependencies - composables
import useSearch from './useSearch';

export default function useSearchByRouteParams() {
  const route = useRoute();

  // Move all store access inside onMounted to prevent Pinia SSR errors
  onMounted(() => {
    // stores
    const storeForm = useStoreReservationForm();

    // refs
    const {
      lugarRecogida,
      lugarDevolucion,
      fechaRecogida,
      fechaDevolucion,
      horaRecogida,
      horaDevolucion,
    } = storeToRefs(storeForm);

    // Set values from route params
    lugarRecogida.value = (route.params.lugar_recogida?.toString())?.toUpperCase() as string;
    lugarDevolucion.value = (route.params.lugar_devolucion?.toString())?.toUpperCase() as string;
    fechaRecogida.value = route.params.fecha_recogida as string;
    fechaDevolucion.value = route.params.fecha_devolucion as string;
    horaRecogida.value = route.params.hora_recogida as string;
    horaDevolucion.value = route.params.hora_devolucion as string;

    // functions
    const { doSearch } = useSearch();

    // Perform search after setting params
    doSearch();
  });
}