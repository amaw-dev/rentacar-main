export const useSearchPageSEO = () => {
    useBaseSEO()

    const { getCityById } = useData();
    const { franchise } = useAppConfig();

    const route = useRoute();
    const cityParam = route.params.city;
    const city = cityParam ? getCityById(cityParam as string) : undefined

    useHead({
        title: `Buscar Vehículos en ${city?.name} | ${franchise.title}`,
        htmlAttrs: {
            lang: "es",
        },
        link: [
            {
                rel: 'canonical',
                href: `${franchise.website}/${cityParam}/buscar-vehiculos`
            }
        ]
    })

    if (city) {
        useSearchBreadcrumbs(city.name, cityParam as string)
    }

    return {
        city
    }
}
