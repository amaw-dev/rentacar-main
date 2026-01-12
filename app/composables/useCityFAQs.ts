import type { FAQPage } from 'schema-dts'

export interface FAQ {
    label: string
    content: string
}

/**
 * Generates city-specific FAQs using templates
 * Returns FAQs with city name interpolated
 */
const generateCityFAQs = (cityName: string): FAQ[] => {
    return [
        {
            label: `¿Cuáles son los requisitos para alquilar un carro en ${cityName}?`,
            content: `Para alquilar un carro en ${cityName} necesitas: ser mayor de 21 años, presentar licencia de conducción vigente (nacional o extranjera), documento de identidad (cédula o pasaporte) y una tarjeta de crédito con cupo disponible a nombre del conductor principal.`
        },
        {
            label: `¿Puedo recoger el carro en el aeropuerto de ${cityName}?`,
            content: `Sí, contamos con servicio de entrega y recogida en el aeropuerto de ${cityName}. Puedes coordinar la hora exacta al momento de hacer tu reserva para que te esperemos a tu llegada.`
        },
        {
            label: `¿Qué tipos de vehículos están disponibles en ${cityName}?`,
            content: `En ${cityName} ofrecemos tres categorías: carros compactos ideales para la ciudad, sedanes cómodos para viajes largos, y camionetas para familias o rutas de aventura. La disponibilidad depende de la fecha de tu reserva.`
        },
        {
            label: `¿Cuánto cuesta alquilar un carro en ${cityName}?`,
            content: `Los precios de alquiler en ${cityName} varían según el tipo de vehículo y temporada. Los compactos inician desde $120.000 COP por día. Reservando con anticipación puedes obtener hasta 60% de descuento.`
        },
        {
            label: `¿Puedo devolver el carro en otra ciudad diferente a ${cityName}?`,
            content: `Sí, ofrecemos servicio de devolución en ciudad diferente. Si recoges en ${cityName} puedes devolver en cualquiera de nuestras 19 ciudades. Este servicio tiene un cargo adicional por traslado.`
        },
        {
            label: `¿El seguro está incluido en el alquiler en ${cityName}?`,
            content: `Todos nuestros vehículos en ${cityName} incluyen seguro básico obligatorio (SOAT) y responsabilidad civil. Ofrecemos protecciones adicionales opcionales para mayor tranquilidad durante tu viaje.`
        }
    ]
}

/**
 * Composable to add FAQPage structured data for city pages
 * Enables FAQ rich snippets in Google SERPs
 */
export const useCityFAQSchema = (cityName: string) => {
    const { franchise } = useAppConfig()
    const route = useRoute()

    const cityFAQs = generateCityFAQs(cityName)

    useSchemaOrg([
        <FAQPage>{
            '@type': 'FAQPage',
            mainEntity: cityFAQs.map(faq =>
                defineQuestion({
                    name: faq.label,
                    acceptedAnswer: faq.content
                })
            )
        }
    ])

    return {
        faqs: cityFAQs
    }
}

/**
 * Returns city-specific FAQs for display in UI
 */
export const useCityFAQs = (cityName: string): FAQ[] => {
    return generateCityFAQs(cityName)
}
