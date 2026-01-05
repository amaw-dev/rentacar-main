export const useCityPageSEO = () => {
    useBaseSEO()

    const { getCityById } = useData();
    const { franchise } = useAppConfig();

    const route = useRoute();
    const cityParam = route.params.city;
    const city = cityParam ? getCityById(cityParam as string) : undefined

    const cityDescription = city
        ? `Alquiler de carros en ${city.name} desde $32 USD/día. Reserva online sin anticipos, recoge en aeropuerto o centro. Sedanes, compactos y camionetas disponibles.`
        : franchise.description;

    useHead({
        title: `${franchise.title} | ${city?.name}`,
        htmlAttrs: {
            lang: "es",
        },
        link: [
            {
                rel: 'canonical',
                href: `${franchise.website}/${cityParam}`
            }
        ]
    })

    useSeoMeta({
        description: cityDescription,
        ogDescription: cityDescription,
        twitterDescription: cityDescription,
    })

    if (city) {
        useCityBreadcrumbs(city.name, cityParam as string)
        useLocalBusiness(cityParam as string, city.name)
    }

    return {
        city
    }
}