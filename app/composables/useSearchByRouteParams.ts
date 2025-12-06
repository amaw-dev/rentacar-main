import {
  useStoreReservationForm,
  useSearch
} from "#imports";

export default function useSearchByRouteParams() {
  
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
  
  // functions
  const { doSearch } = useSearch();
  
  const route = useRoute();
  lugarRecogida.value = route.params.lugar_recogida as string;
  lugarDevolucion.value = route.params.lugar_devolucion as string;
  fechaRecogida.value = route.params.fecha_recogida as string;
  fechaDevolucion.value = route.params.fecha_devolucion as string;
  horaRecogida.value = route.params.hora_recogida as string;
  horaDevolucion.value = route.params.hora_devolucion as string;
  
  onMounted(() => {
    doSearch();
  });
}