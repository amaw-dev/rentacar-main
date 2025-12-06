import { useQuery, defineQuery } from "@pinia/colada";
/** types */
import type { CategoryData, BranchData, PageConfigData, ReservasApiData } from "#imports";

export const useFetchRentacarData = defineQuery(() => {
    const config = useRuntimeConfig();
    const endpoint = config.public.rentacarApiReservasDataEndpoint;
    const categories = ref<CategoryData[] | null | undefined>(null);
    const page_config = ref<PageConfigData | null | undefined>(null);
    const branches = ref<BranchData[] | null | undefined>(null);

    const { isPending: pending, isLoading: loading } = useQuery<ReservasApiData>({
        key: ["reservasApiData"],
        query: () => $fetch<ReservasApiData>(endpoint, {
            method: "POST",
            body: {
                franchise: config.public.rentacarFranchise,
            },
            async onResponse({ response }) {
                categories.value = await response._data.categories;
                branches.value = await response._data.branches;
                page_config.value = await response._data.page_config;
            }
        })
    });

    return {
        categories,
        branches,
        page_config,
        pending,
        loading,
    }
    
});