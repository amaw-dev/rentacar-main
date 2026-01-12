export interface CityDestination {
    name: string
    time: string
    description: string
}

export interface CityDrivingTips {
    picoPlaca: string
    tolls: string
    parking: string
}

export interface CityExpandedContent {
    intro: string
    destinations: CityDestination[]
    drivingTips: CityDrivingTips
    bestSeason: string
}

/**
 * Expanded content for major cities (~500-800 words total per city)
 * Optimized for local SEO with unique, relevant information
 */
const cityExpandedContent: Record<string, CityExpandedContent> = {
    'Bogotá': {
        intro: `Bogotá, la capital de Colombia, es el punto de partida ideal para explorar el centro del país. Con un carro de alquiler puedes moverte con total libertad por esta metrópoli de más de 8 millones de habitantes y escapar fácilmente a destinos cercanos como Villa de Leyva, Zipaquirá o Girardot. El Aeropuerto Internacional El Dorado conecta con todas las ciudades principales y es el hub más grande del país, lo que hace de Bogotá el lugar perfecto para iniciar tu road trip por Colombia. Ya sea que vengas por negocios o turismo, contar con vehículo propio te permite evitar el tráfico del transporte público, llegar a reuniones puntuales y explorar barrios como La Candelaria, Usaquén o Chapinero a tu propio ritmo.`,
        destinations: [
            {
                name: 'Villa de Leyva',
                time: '3 horas',
                description: 'Pueblo colonial mejor conservado de Colombia. Su plaza principal empedrada, la más grande del país, te transporta a la época colonial. Ideal para un fin de semana con museos, viñedos y el desierto de la Candelaria.'
            },
            {
                name: 'Catedral de Sal de Zipaquirá',
                time: '1 hora',
                description: 'Una de las maravillas de Colombia, esta catedral subterránea excavada en una mina de sal es imperdible. El viaje es corto y puedes combinarlo con el Tren de la Sabana.'
            },
            {
                name: 'Girardot y Melgar',
                time: '2.5 horas',
                description: 'Cuando el frío bogotano agota, estos destinos de tierra caliente ofrecen piscinas, sol y descanso. Perfectos para escapadas de fin de semana con familia.'
            },
            {
                name: 'Laguna de Guatavita',
                time: '1.5 horas',
                description: 'El lugar donde nació la leyenda de El Dorado. Una caminata moderada te lleva al cráter de esta laguna sagrada muisca con vistas espectaculares.'
            }
        ],
        drivingTips: {
            picoPlaca: 'Bogotá restringe la circulación de vehículos de lunes a viernes según el último dígito de la placa. El horario es de 6:00 a 9:00 AM y de 5:00 a 8:00 PM. Los fines de semana y festivos no hay restricción.',
            tolls: 'Saliendo de Bogotá encontrarás peajes en todas las vías principales. Hacia Villa de Leyva hay 3 peajes (~$45.000 COP total), hacia Girardot 2 peajes (~$30.000 COP).',
            parking: 'En zonas como Chapinero y Usaquén los parqueaderos cuestan entre $4.000-8.000 COP/hora. En centros comerciales suele ser gratis con consumo.'
        },
        bestSeason: 'Bogotá tiene clima templado todo el año (14-19°C), pero la temporada seca de diciembre a febrero es ideal para viajes por carretera. Semana Santa y puentes festivos tienen alta demanda, así que reserva con mínimo 2 semanas de anticipación para mejores tarifas. Si planeas ir a tierra caliente (Girardot, Melgar), cualquier época es buena ya que siempre hace sol.'
    },
    'Medellín': {
        intro: `Medellín, la ciudad de la eterna primavera, ofrece el clima perfecto para explorar Antioquia en carro. Con temperaturas entre 22-28°C todo el año, puedes disfrutar de pueblos mágicos, paisajes de montaña y la hospitalidad paisa sin preocuparte por el clima. El Aeropuerto José María Córdova está en Rionegro, a 45 minutos del centro, lo que hace ideal recoger tu carro directamente al llegar y comenzar tu aventura. Medellín es el punto de partida perfecto para recorrer el Eje Cafetero, visitar Guatapé, explorar Santa Fe de Antioquia o aventurarte hacia la costa caribe. Con un vehículo propio evitas las limitaciones del transporte público y puedes descubrir joyas escondidas como Jardín, San Rafael o el Peñol a tu propio ritmo.`,
        destinations: [
            {
                name: 'Guatapé y El Peñol',
                time: '2 horas',
                description: 'El pueblo más colorido de Colombia con su famosa piedra de 740 escalones. Vistas espectaculares del embalse, deportes acuáticos y gastronomía local. Imperdible para cualquier visitante.'
            },
            {
                name: 'Santa Fe de Antioquia',
                time: '1.5 horas',
                description: 'Pueblo colonial de clima cálido, perfecto para escapar del fresco de Medellín. Arquitectura histórica, el famoso Puente de Occidente y deliciosos tamarindos.'
            },
            {
                name: 'Jardín',
                time: '3 horas',
                description: 'Considerado uno de los pueblos más bonitos de Colombia. Calles empedradas, arquitectura paisa tradicional, cultivos de café y la Cueva del Esplendor con su cascada interior.'
            },
            {
                name: 'San Rafael',
                time: '2.5 horas',
                description: 'Paraíso de cascadas y ríos cristalinos. Ideal para los amantes de la naturaleza y el ecoturismo. Múltiples pozos naturales para nadar en aguas turquesas.'
            }
        ],
        drivingTips: {
            picoPlaca: 'Medellín tiene pico y placa de lunes a viernes según el último dígito de la placa, en horarios de 7:00 a 8:30 AM y de 5:30 a 7:00 PM. Los sábados, domingos y festivos no hay restricción.',
            tolls: 'Hacia Guatapé hay un peaje (~$12.000 COP). Hacia Santa Fe de Antioquia el túnel de occidente tiene peaje (~$15.600 COP). Las vías están en excelente estado.',
            parking: 'El centro y El Poblado tienen parqueaderos entre $3.000-6.000 COP/hora. En centros comerciales como Santafé o El Tesoro suele haber tarifa plana o gratis con consumo.'
        },
        bestSeason: 'Medellín tiene clima primaveral todo el año, pero la temporada más seca es de diciembre a febrero y junio a agosto. La Feria de las Flores en agosto atrae muchos visitantes, así que reserva con anticipación. Para Guatapé y pueblos cercanos, cualquier época es buena, aunque los fines de semana largos tienen más afluencia.'
    }
}

/**
 * Returns expanded content for a city if available
 */
export const useCityExpandedContent = (cityName: string): CityExpandedContent | null => {
    return cityExpandedContent[cityName] || null
}

/**
 * Check if a city has expanded content
 */
export const hasCityExpandedContent = (cityName: string): boolean => {
    return cityName in cityExpandedContent
}
