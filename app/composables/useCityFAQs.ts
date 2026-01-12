import type { FAQPage } from 'schema-dts'

export interface FAQ {
    label: string
    content: string
}

/**
 * City-specific FAQs for major cities with local details
 */
const citySpecificFAQs: Record<string, FAQ[]> = {
    'Bogotá': [
        {
            label: '¿Dónde puedo recoger mi carro en Bogotá?',
            content: 'Contamos con entrega en el Aeropuerto El Dorado (llegadas nacionales e internacionales) y en nuestra sede del centro. Coordinamos la hora exacta para esperarte a tu llegada.'
        },
        {
            label: '¿Qué vehículo recomiendan para moverse en Bogotá?',
            content: 'Para Bogotá recomendamos carros compactos por su maniobrabilidad en el tráfico y facilidad de parqueo. Si planeas salir hacia Villa de Leyva o el Eje Cafetero, un sedán ofrece más comodidad para viajes largos.'
        },
        {
            label: '¿Aplica pico y placa al carro alquilado en Bogotá?',
            content: 'Sí, los vehículos de alquiler están sujetos al pico y placa de Bogotá según el último dígito de la placa. Te informamos la restricción al momento de la entrega para que puedas planificar tu día.'
        },
        {
            label: '¿Cuánto cuesta alquilar un carro en Bogotá?',
            content: 'Los precios en Bogotá inician desde $110.000 COP/día para compactos. Reservando con 15+ días de anticipación puedes obtener hasta 60% de descuento. Los fines de semana y festivos tienen tarifas especiales.'
        },
        {
            label: '¿Puedo viajar a otras ciudades con el carro alquilado en Bogotá?',
            content: 'Sí, puedes viajar a cualquier ciudad de Colombia. Destinos populares desde Bogotá incluyen Villa de Leyva (3h), Girardot (2.5h) y el Eje Cafetero (7h). Ofrecemos devolución en otra ciudad con cargo adicional.'
        },
        {
            label: '¿Qué documentos necesito para alquilar en Bogotá?',
            content: 'Necesitas: licencia de conducción vigente, cédula o pasaporte (mayores de 21 años), y tarjeta de crédito con cupo disponible. Para extranjeros, la licencia de su país es válida durante su estadía como turista.'
        }
    ],
    'Medellín': [
        {
            label: '¿Dónde puedo recoger mi carro en Medellín?',
            content: 'Ofrecemos entrega en el Aeropuerto José María Córdova (Rionegro) y en nuestra sede de El Poblado. El aeropuerto está a 45 minutos del centro, ideal para iniciar tu viaje directamente.'
        },
        {
            label: '¿Qué vehículo recomiendan para Medellín y alrededores?',
            content: 'Para Medellín ciudad un compacto es ideal. Si planeas visitar Guatapé, Santa Fe de Antioquia o el Eje Cafetero, recomendamos sedán o camioneta para mayor comodidad en las carreteras de montaña.'
        },
        {
            label: '¿Aplica pico y placa en Medellín?',
            content: 'Sí, Medellín tiene pico y placa según el último dígito de la placa. Te informamos la restricción al entregar el vehículo. Los sábados, domingos y festivos no hay restricción.'
        },
        {
            label: '¿Cuánto cuesta alquilar un carro en Medellín?',
            content: 'Los precios en Medellín inician desde $115.000 COP/día para compactos. Reservando con anticipación puedes obtener hasta 60% de descuento. Ofrecemos tarifas semanales y mensuales con mejores precios.'
        },
        {
            label: '¿Puedo devolver el carro en otra ciudad diferente a Medellín?',
            content: 'Sí, ofrecemos devolución en cualquiera de nuestras 19 ciudades. Destinos frecuentes desde Medellín: Cartagena, Santa Marta y el Eje Cafetero. El cargo por traslado varía según la distancia.'
        },
        {
            label: '¿Qué lugares puedo visitar con carro desde Medellín?',
            content: 'Destinos imperdibles: Guatapé y El Peñol (2h), Santa Fe de Antioquia (1.5h), Jardín (3h), y San Rafael (2.5h). Un carro te da libertad para explorar pueblos y paisajes a tu ritmo.'
        }
    ],
    'Cali': [
        {
            label: '¿Dónde puedo recoger mi carro en Cali?',
            content: 'Contamos con entrega en el Aeropuerto Alfonso Bonilla Aragón y en nuestra sede del norte de Cali. Coordinamos la hora para esperarte a tu llegada.'
        },
        {
            label: '¿Qué vehículo recomiendan para Cali?',
            content: 'Para Cali ciudad un compacto es perfecto. Si planeas visitar el Pacífico (Buenaventura) o San Cipriano, una camioneta ofrece mejor desempeño en esas rutas. Para el Eje Cafetero, un sedán es ideal.'
        },
        {
            label: '¿Aplica pico y placa en Cali?',
            content: 'Sí, Cali tiene restricción de pico y placa según el último dígito de la placa. Te informamos al entregar el vehículo. Los fines de semana y festivos puedes circular sin restricción.'
        },
        {
            label: '¿Cuánto cuesta alquilar un carro en Cali?',
            content: 'Los precios en Cali inician desde $105.000 COP/día para compactos. Con reserva anticipada puedes obtener hasta 60% de descuento. Ofrecemos tarifas especiales para alquileres de una semana o más.'
        },
        {
            label: '¿Qué lugares puedo visitar con carro desde Cali?',
            content: 'Destinos populares: Buga y el Señor de los Milagros (1.5h), Lago Calima (2h), Popayán (3h), y el Parque Natural Farallones. El carro te permite explorar el Valle del Cauca con total libertad.'
        },
        {
            label: '¿Puedo viajar al Pacífico con el carro alquilado?',
            content: 'Sí, puedes viajar a Buenaventura y la costa Pacífica. Recomendamos camioneta para mayor comodidad. Algunas zonas requieren precauciones especiales que te indicamos al momento de la reserva.'
        }
    ],
    'Cartagena': [
        {
            label: '¿Dónde puedo recoger mi carro en Cartagena?',
            content: 'Ofrecemos entrega en el Aeropuerto Rafael Núñez y en el centro histórico. El aeropuerto está a 15 minutos de la ciudad amurallada, ideal para comenzar tu aventura caribeña.'
        },
        {
            label: '¿Necesito carro para moverme en Cartagena?',
            content: 'El centro histórico es peatonal, pero un carro es ideal para visitar playas como Barú, Playa Blanca, o escapadas a Islas del Rosario (ferry). También facilita ir a Santa Marta o Barranquilla.'
        },
        {
            label: '¿Qué vehículo recomiendan para Cartagena?',
            content: 'Un compacto es suficiente para Cartagena y Barú. Si planeas viajar a Santa Marta o hacer el recorrido por la costa, un sedán con aire acondicionado potente te dará mayor confort.'
        },
        {
            label: '¿Cuánto cuesta alquilar un carro en Cartagena?',
            content: 'Los precios en Cartagena inician desde $120.000 COP/día. En temporada alta (diciembre-enero, Semana Santa) los precios pueden variar. Reserva con anticipación para mejores tarifas.'
        },
        {
            label: '¿Puedo viajar a Santa Marta con el carro de Cartagena?',
            content: 'Sí, Santa Marta está a 4 horas por carretera. Es una ruta segura y bien pavimentada. Puedes devolver el carro en Santa Marta si prefieres no regresar. Ofrecemos servicio one-way.'
        },
        {
            label: '¿Cómo llego a Playa Blanca con carro?',
            content: 'Playa Blanca está en Barú, a 1 hora de Cartagena. Puedes llegar en carro hasta el parqueadero de la playa. Recomendamos salir temprano para disfrutar el día completo.'
        }
    ],
    'Barranquilla': [
        {
            label: '¿Dónde puedo recoger mi carro en Barranquilla?',
            content: 'Contamos con entrega en el Aeropuerto Ernesto Cortissoz y en nuestra sede del norte. Coordinamos la hora exacta para recibirte a tu llegada.'
        },
        {
            label: '¿Qué vehículo recomiendan para Barranquilla?',
            content: 'Un compacto con buen aire acondicionado es ideal para el clima de Barranquilla. Si planeas visitar otras ciudades de la costa como Cartagena o Santa Marta, un sedán te dará más comodidad.'
        },
        {
            label: '¿Cuánto cuesta alquilar un carro en Barranquilla?',
            content: 'Los precios en Barranquilla inician desde $100.000 COP/día para compactos. Durante el Carnaval de Barranquilla los precios pueden variar. Reserva con anticipación.'
        },
        {
            label: '¿Puedo viajar a Cartagena o Santa Marta desde Barranquilla?',
            content: 'Sí, Cartagena está a 2 horas y Santa Marta a 1.5 horas. Ambas rutas son seguras y bien pavimentadas. Puedes devolver el carro en cualquiera de estas ciudades.'
        },
        {
            label: '¿Hay pico y placa en Barranquilla?',
            content: 'Actualmente Barranquilla no tiene restricción de pico y placa para vehículos particulares. Puedes circular libremente cualquier día de la semana.'
        },
        {
            label: '¿Qué lugares puedo visitar con carro desde Barranquilla?',
            content: 'Destinos recomendados: Cartagena (2h), Santa Marta y Parque Tayrona (2h), Puerto Colombia y sus playas (30min), y Usiacurí, pueblo artesanal (1h).'
        }
    ]
}

/**
 * Generates template-based FAQs for cities without specific content
 * Returns FAQs with city name interpolated
 */
const generateTemplateFAQs = (cityName: string): FAQ[] => {
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
 * Returns FAQs for a city - uses specific FAQs if available, otherwise template
 */
const getCityFAQs = (cityName: string): FAQ[] => {
    return citySpecificFAQs[cityName] || generateTemplateFAQs(cityName)
}

/**
 * Composable to add FAQPage structured data for city pages
 * Enables FAQ rich snippets in Google SERPs
 */
export const useCityFAQSchema = (cityName: string) => {
    const cityFAQs = getCityFAQs(cityName)

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
 * Uses specific FAQs for major cities, template for others
 */
export const useCityFAQs = (cityName: string): FAQ[] => {
    return getCityFAQs(cityName)
}
