/** types */
import type { ReservasApiData } from "#imports";

export default function useFetchRentacarData(){
    const { adminData } = useAppConfig();

    return adminData as ReservasApiData;
}