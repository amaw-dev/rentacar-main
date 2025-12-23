export const useCityPageSEO = () => {
    useBaseSEO()

    const { getCityById } = useData();
    const { franchise } = useAppConfig();

    const route = useRoute();
    const cityParam = route.params.city;
    const city = cityParam ? getCityById(cityParam as string) : undefined

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

    return {
        city
    }
}