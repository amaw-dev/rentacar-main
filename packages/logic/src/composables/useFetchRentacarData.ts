// External dependencies

// Types
import type { ReservasApiData } from '@rentacar-main/logic/utils';

export default function useFetchRentacarData(){
    const { adminData } = useAppConfig();

    return adminData as ReservasApiData;
}