// External dependencies
import { ref } from 'vue';

// Internal dependencies - utils
import { createCurrentDateObject } from '@rentacar-main/logic/utils';

export default function useDefaultRouteParams(){
    const defaultBranch = 'AABOT';
    const defaultHour = '12:00';
    const defaultDaysRange = 7;

    const currentDay = createCurrentDateObject();
    const nextDay = currentDay.add({ days: 1 });
    const nextWeekDay = nextDay.add({ days: defaultDaysRange });

    const defaultLugarRecogida = ref<string | null>(defaultBranch); // bogota aeropuerto
    const defaultLugarDevolucion = ref<string | null>(defaultBranch); // bogota aeropuerto
    const defaultFechaRecogida = ref<string | null>(nextDay.toString());
    const defaultFechaDevolucion = ref<string | null>(nextWeekDay.toString());
    const defaultHoraRecogida = ref<string | null>(defaultHour);
    const defaultHoraDevolucion = ref<string | null>(defaultHour);
    
    return {
        defaultLugarRecogida,
        defaultLugarDevolucion,
        defaultFechaRecogida,
        defaultFechaDevolucion,
        defaultHoraRecogida,
        defaultHoraDevolucion,
    }
}