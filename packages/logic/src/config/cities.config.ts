/**
 * Cities configuration shared across all brands
 * Information about Colombian cities where car rental services are available
 * Includes descriptions and testimonials about each city
 */
export interface Testimonial {
  user: {
    name: string;
    description: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
  quote: string;
}

export interface City {
  id: string;
  name: string;
  description?: string;
  link: string;
  testimonials: Testimonial[];
}

export const citiesConfig: City[] = [
  {
    id: "armenia",
    name: "Armenia",
    description:
      "¿Planeas visitar Armenia? En Armenia puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Edén. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como Salento, Filandia o el Parque del Café. Nuestra sede en Armenia te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el corazón del Paisaje Cultural Cafetero, declarado Patrimonio de la Humanidad!",
    link: "/armenia",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Armenia, tuvimos la oportunidad de visitar el Parque del Café y el Jardín Botánico del Quindío. Fue muy cómodo desplazarse entre estos destinos y disfrutar del paisaje cafetero a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Recuca al final de la tarde, después de explorar Salento. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la cultura cafetera.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Armenia, visitamos el Zoológico y el Valle de Cocora. Tener un auto nos permitió movernos con facilidad y disfrutar de la naturaleza sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Armenia. Todo muy puntual y el carro en excelente estado. Pude conocer el Parque del Café y Filandia sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Armenia fue muy fácil gracias a este servicio de alquiler. Recorrimos el Jardín Botánico y el Recuca, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Armenia. El auto fue perfecto para ir al Valle de Cocora y Salento, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "barranquilla",
    name: "Barranquilla",
    description:
      "¿Planeas visitar Barranquilla? En Barranquilla puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Museo del Caribe o el Zoológico de Barranquilla. Nuestra sede en Barranquilla te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta de Oro de Colombia, epicentro del Carnaval más famoso del país!",
    link: "/barranquilla",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Barranquilla, tuvimos la oportunidad de visitar el Museo del Caribe y el Zoológico. Fue muy cómodo desplazarse entre estos destinos y disfrutar del ambiente carnavalero a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en Bocas de Ceniza al final de la tarde, después de explorar el Castillo de Salgar. Contar con transporte propio nos dio la libertad de hacer ese desvío sin prisas y apreciar el río Magdalena.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Barranquilla, visitamos el Teatro Amira de la Rosa y la Puerta de Oro. Tener un auto nos permitió movernos con facilidad y disfrutar de la cultura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Barranquilla. Todo muy puntual y el carro en excelente estado. Pude conocer el Museo del Caribe y el Zoológico sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Barranquilla fue muy fácil gracias a este servicio de alquiler. Recorrimos Bocas de Ceniza y el Castillo de Salgar, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Barranquilla. El auto fue perfecto para ir al Teatro Amira de la Rosa y la Puerta de Oro, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "bogota",
    name: "Bogotá",
    description:
      "¿Planeas visitar Bogotá? En Bogotá puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Dorado. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Museo del Oro, el Cerro de Monserrate o la Zona Rosa. Nuestra sede en Bogotá te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital a 2.600 metros más cerca de las estrellas!",
    link: "/bogota",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Bogotá, tuvimos la oportunidad de visitar Monserrate y La Candelaria. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la vista panorámica a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Museo del Oro al final de la tarde, después de explorar el Museo Botero. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar el arte.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Bogotá, visitamos la Plaza de Bolívar y la Catedral de Sal en Zipaquirá. Tener un auto nos permitió movernos con facilidad y disfrutar de la historia sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Bogotá. Todo muy puntual y el carro en excelente estado. Pude conocer Monserrate y el Museo del Oro sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Bogotá fue muy fácil gracias a este servicio de alquiler. Recorrimos La Candelaria y el Museo Botero, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Bogotá. El auto fue perfecto para ir a la Plaza de Bolívar y la Catedral de Sal, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "bucaramanga",
    name: "Bucaramanga",
    description:
      "¿Planeas visitar Bucaramanga? En Bucaramanga puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Nacional del Chicamocha, el Ecoparque Cerro del Santísimo o el centro histórico. Nuestra sede en Bucaramanga te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Bonita de Colombia, famosa por sus parques y aventura extrema!",
    link: "/bucaramanga",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Bucaramanga, tuvimos la oportunidad de visitar el Cañón del Chicamocha y Girón. Fue muy cómodo desplazarse entre estos destinos y disfrutar de las vistas a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Parque del Agua al final de la tarde, después de explorar el Ecoparque Cerro del Santísimo. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la naturaleza.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Bucaramanga, visitamos el Parque Santander y Panachi. Tener un auto nos permitió movernos con facilidad y disfrutar de la aventura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Bucaramanga. Todo muy puntual y el carro en excelente estado. Pude conocer el Cañón del Chicamocha y Girón sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Bucaramanga fue muy fácil gracias a este servicio de alquiler. Recorrimos el Parque del Agua y el Ecoparque Cerro del Santísimo, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Bucaramanga. El auto fue perfecto para ir al Parque Santander y Panachi, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "cali",
    name: "Cali",
    description:
      "¿Planeas visitar Cali? En Cali puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso Bonilla Aragón. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Zoológico de Cali, la Iglesia La Ermita o el Cristo Rey. Nuestra sede en Cali te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital mundial de la salsa, donde el ritmo nunca para!",
    link: "/cali",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Cali, tuvimos la oportunidad de visitar el Zoológico y Cristo Rey. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la vista de la ciudad a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Barrio San Antonio al final de la tarde, después de explorar el Cerro de las Tres Cruces. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la salsa.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Cali, visitamos el Museo de la Caña y el Parque del Perro. Tener un auto nos permitió movernos con facilidad y disfrutar del ambiente sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Cali. Todo muy puntual y el carro en excelente estado. Pude conocer el Zoológico y Cristo Rey sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Cali fue muy fácil gracias a este servicio de alquiler. Recorrimos el Barrio San Antonio y el Cerro de las Tres Cruces, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Cali. El auto fue perfecto para ir al Museo de la Caña y el Parque del Perro, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "cartagena",
    name: "Cartagena",
    description:
      "¿Planeas visitar Cartagena? En Cartagena puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Rafael Núñez. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Castillo de San Felipe, el Centro Histórico o las Islas del Rosario. Nuestra sede en Cartagena te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Heroica, joya colonial del Caribe!",
    link: "/cartagena",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Cartagena, tuvimos la oportunidad de visitar la Ciudad Amurallada y el Castillo San Felipe. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la historia colonial a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en Getsemaní al final de la tarde, después de explorar el Convento de la Popa. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar el arte callejero.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Cartagena, visitamos las Islas del Rosario y el Palacio de la Inquisición. Tener un auto nos permitió movernos con facilidad y disfrutar de las playas sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Cartagena. Todo muy puntual y el carro en excelente estado. Pude conocer la Ciudad Amurallada y el Castillo San Felipe sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Cartagena fue muy fácil gracias a este servicio de alquiler. Recorrimos Getsemaní y el Convento de la Popa, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Cartagena. El auto fue perfecto para ir a las Islas del Rosario y el Palacio de la Inquisición, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "cucuta",
    name: "Cúcuta",
    description:
      "¿Planeas visitar Cúcuta? En Cúcuta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Camilo Daza. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón, el Parque Santander o el Puente Internacional Simón Bolívar. Nuestra sede en Cúcuta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Norte, puerta fronteriza con Venezuela!",
    link: "/cucuta",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Cúcuta, tuvimos la oportunidad de visitar el Parque Santander y el Monumento a la Batalla de Cúcuta. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la historia a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Puente Internacional Simón Bolívar al final de la tarde, después de explorar la Catedral de Cúcuta. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la frontera.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Cúcuta, visitamos el Zoológico y el Museo Norte de Santander. Tener un auto nos permitió movernos con facilidad y disfrutar de la cultura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Cúcuta. Todo muy puntual y el carro en excelente estado. Pude conocer el Parque Santander y el Monumento a la Batalla sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Cúcuta fue muy fácil gracias a este servicio de alquiler. Recorrimos el Puente Internacional y la Catedral, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Cúcuta. El auto fue perfecto para ir al Zoológico y el Museo Norte de Santander, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "ibague",
    name: "Ibagué",
    description:
      "¿Planeas visitar Ibagué? En Ibagué puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Perales. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Cañón del Combeima, el Jardín Botánico San Jorge o el Conservatorio del Tolima. Nuestra sede en Ibagué te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Capital Musical de Colombia, cuna de festivales folclóricos!",
    link: "/ibague",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Ibagué, tuvimos la oportunidad de visitar el Jardín Botánico y el Cañón del Combeima. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la naturaleza a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en Ukukú Rural al final de la tarde, después de explorar la Plaza Bolívar. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la música.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Ibagué, visitamos la Catedral Inmaculada Concepción y el Parque de los Periodistas. Tener un auto nos permitió movernos con facilidad y disfrutar de la cultura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Ibagué. Todo muy puntual y el carro en excelente estado. Pude conocer el Jardín Botánico y el Cañón del Combeima sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Ibagué fue muy fácil gracias a este servicio de alquiler. Recorrimos Ukukú Rural y la Plaza Bolívar, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Ibagué. El auto fue perfecto para ir a la Catedral Inmaculada Concepción y el Parque de los Periodistas, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "manizales",
    name: "Manizales",
    description:
      "¿Planeas visitar Manizales? En Manizales puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto La Nubia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como la Catedral Basílica, el Ecoparque Los Yarumos o el Nevado del Ruiz. Nuestra sede en Manizales te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de las Puertas Abiertas, entre volcanes y café!",
    link: "/manizales",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Manizales, tuvimos la oportunidad de visitar el Nevado del Ruiz y la Catedral Basílica. Fue muy cómodo desplazarse entre estos destinos y disfrutar de los paisajes montañosos a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Recinto del Pensamiento al final de la tarde, después de explorar el Ecoparque Los Yarumos. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la biodiversidad.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Manizales, visitamos las fincas cafeteras y el Parque Los Nevados. Tener un auto nos permitió movernos con facilidad y disfrutar de la naturaleza sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Manizales. Todo muy puntual y el carro en excelente estado. Pude conocer el Nevado del Ruiz y la Catedral Basílica sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Manizales fue muy fácil gracias a este servicio de alquiler. Recorrimos el Recinto del Pensamiento y el Ecoparque Los Yarumos, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Manizales. El auto fue perfecto para ir a las fincas cafeteras y el Parque Los Nevados, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "medellin",
    name: "Medellín",
    description:
      "¿Planeas visitar Medellín? En Medellín puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto José María Córdova. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Arví, la Comuna 13 o el Jardín Botánico. Nuestra sede en Medellín te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de la Eterna Primavera, ejemplo de innovación urbana!",
    link: "/medellin",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Medellín, tuvimos la oportunidad de visitar Comuna 13 y Pueblito Paisa. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la transformación urbana a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Metrocable al final de la tarde, después de explorar la Plaza Botero. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar las esculturas.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Medellín, visitamos el Parque Arví y el Jardín Botánico. Tener un auto nos permitió movernos con facilidad y disfrutar de la naturaleza sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Medellín. Todo muy puntual y el carro en excelente estado. Pude conocer Comuna 13 y Pueblito Paisa sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Medellín fue muy fácil gracias a este servicio de alquiler. Recorrimos el Metrocable y la Plaza Botero, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Medellín. El auto fue perfecto para ir al Parque Arví y el Jardín Botánico, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "monteria",
    name: "Montería",
    description:
      "¿Planeas visitar Montería? En Montería puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Los Garzones. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Sinú, el Parque Ronda del Sinú o el Sombrero Vueltiao. Nuestra sede en Montería te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Sinú, capital ganadera del Caribe!",
    link: "/monteria",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Montería, tuvimos la oportunidad de visitar la Ronda del Sinú y la Plaza Cultural del Sinú. Fue muy cómodo desplazarse entre estos destinos y disfrutar del río a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en la Catedral al final de la tarde, después de explorar el Zoológico. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la cultura local.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Montería, visitamos el Parque Los Laureles y la Zona Rosa. Tener un auto nos permitió movernos con facilidad y disfrutar del ambiente sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Montería. Todo muy puntual y el carro en excelente estado. Pude conocer la Ronda del Sinú y la Plaza Cultural sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Montería fue muy fácil gracias a este servicio de alquiler. Recorrimos la Catedral y el Zoológico, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Montería. El auto fue perfecto para ir al Parque Los Laureles y la Zona Rosa, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "neiva",
    name: "Neiva",
    description:
      "¿Planeas visitar Neiva? En Neiva puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Benito Salas. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Desierto de la Tatacoa, el Parque Andino o el Festival del Bambuco. Nuestra sede en Neiva te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta del Sur, cerca de maravillas arqueológicas!",
    link: "/neiva",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Neiva, tuvimos la oportunidad de visitar el Desierto de la Tatacoa y el Río Magdalena. Fue muy cómodo desplazarse entre estos destinos y disfrutar de los paisajes desérticos a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en San Agustín al final de la tarde, después de explorar la Catedral de Neiva. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar las esculturas arqueológicas.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Neiva, visitamos el Museo del Huila y el Parque Mercedes Abrego. Tener un auto nos permitió movernos con facilidad y disfrutar de la cultura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Neiva. Todo muy puntual y el carro en excelente estado. Pude conocer el Desierto de la Tatacoa y el Río Magdalena sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Neiva fue muy fácil gracias a este servicio de alquiler. Recorrimos San Agustín y la Catedral, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Neiva. El auto fue perfecto para ir al Museo del Huila y el Parque Mercedes Abrego, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "pereira",
    name: "Pereira",
    description:
      "¿Planeas visitar Pereira? En Pereira puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Matecaña. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Ukumarí, el Santuario de Fauna y Flora Otún Quimbaya o el Cerrito. Nuestra sede en Pereira te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Querendona, Trasnochadora y Morena del Eje Cafetero!",
    link: "/pereira",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Pereira, tuvimos la oportunidad de visitar el Bioparque Ukumarí y la Catedral de Nuestra Señora de la Pobreza. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la naturaleza a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en las Termales de Santa Rosa al final de la tarde, después de explorar el Zoológico Matecaña. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar las aguas termales.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Pereira, visitamos las fincas cafeteras y el Parque Arboleda. Tener un auto nos permitió movernos con facilidad y disfrutar del café sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Pereira. Todo muy puntual y el carro en excelente estado. Pude conocer el Bioparque Ukumarí y la Catedral sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Pereira fue muy fácil gracias a este servicio de alquiler. Recorrimos las Termales de Santa Rosa y el Zoológico Matecaña, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Pereira. El auto fue perfecto para ir a las fincas cafeteras y el Parque Arboleda, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "santa-marta",
    name: "Santa Marta",
    description:
      "¿Planeas visitar Santa Marta? En Santa Marta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Simón Bolívar. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Tayrona, la Quinta de San Pedro Alejandrino o Taganga. Nuestra sede en Santa Marta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Bahía Más Linda de América!",
    link: "/santa-marta",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Santa Marta, tuvimos la oportunidad de visitar el Parque Tayrona y Minca. Fue muy cómodo desplazarse entre estos destinos y disfrutar de las playas a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en la Quinta de San Pedro Alejandrino al final de la tarde, después de explorar la Catedral. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la historia.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Santa Marta, visitamos la Ciudad Perdida y el Museo del Oro Tairona. Tener un auto nos permitió movernos con facilidad y disfrutar de la aventura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Santa Marta. Todo muy puntual y el carro en excelente estado. Pude conocer el Parque Tayrona y Minca sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Santa Marta fue muy fácil gracias a este servicio de alquiler. Recorrimos la Quinta de San Pedro Alejandrino y la Catedral, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Santa Marta. El auto fue perfecto para ir a la Ciudad Perdida y el Museo del Oro Tairona, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "valledupar",
    name: "Valledupar",
    description:
      "¿Planeas visitar Valledupar? En Valledupar puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso López. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Guatapurí, la Plaza Alfonso López o el Festival Vallenato. Nuestra sede en Valledupar te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Cuna del Vallenato, tierra de acordeones y leyendas!",
    link: "/valledupar",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Valledupar, tuvimos la oportunidad de visitar el Río Guatapurí y la Plaza Alfonso López. Fue muy cómodo desplazarse entre estos destinos y disfrutar del vallenato a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Balneario Hurtado al final de la tarde, después de explorar el Museo del Acordeón. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la música.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Valledupar, visitamos el Parque Ecológico Los Besotes y el Valle de la Luna. Tener un auto nos permitió movernos con facilidad y disfrutar de la naturaleza sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Valledupar. Todo muy puntual y el carro en excelente estado. Pude conocer el Río Guatapurí y la Plaza Alfonso López sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Valledupar fue muy fácil gracias a este servicio de alquiler. Recorrimos el Balneario Hurtado y el Museo del Acordeón, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Valledupar. El auto fue perfecto para ir al Parque Ecológico Los Besotes y el Valle de la Luna, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "villavicencio",
    name: "Villavicencio",
    description:
      "¿Planeas visitar Villavicencio? En Villavicencio puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Vanguardia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Los Ocarros, el Mirador de Buenavista o Caño Cristales (cerca). Nuestra sede en Villavicencio te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta al Llano, con sabores de llanero auténtico!",
    link: "/villavicencio",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Villavicencio, tuvimos la oportunidad de visitar el Bioparque Los Ocarros y el Parque Las Malocas. Fue muy cómodo desplazarse entre estos destinos y disfrutar de los llanos a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en Caño Cristales al final de la tarde, después de explorar la Catedral Nuestra Señora del Carmen. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar los colores del río.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Villavicencio, visitamos el Mirador La Piedra del Amor y el Parque Infantil. Tener un auto nos permitió movernos con facilidad y disfrutar de la naturaleza sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Villavicencio. Todo muy puntual y el carro en excelente estado. Pude conocer el Bioparque Los Ocarros y el Parque Las Malocas sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Villavicencio fue muy fácil gracias a este servicio de alquiler. Recorrimos Caño Cristales y la Catedral, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Villavicencio. El auto fue perfecto para ir al Mirador La Piedra del Amor y el Parque Infantil, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "floridablanca",
    name: "Floridablanca",
    link: "/floridablanca",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Floridablanca, tuvimos la oportunidad de visitar el Ecoparque El Santísimo y el Parque Caracoli. Fue muy cómodo desplazarse entre estos destinos y disfrutar de las vistas a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Jardín Botánico Eloy Valenzuela al final de la tarde, después de explorar el Acualago. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la naturaleza.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Floridablanca, visitamos el Parque Natural La Pera y el Centro Comercial Cañaveral. Tener un auto nos permitió movernos con facilidad y disfrutar del ambiente sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Floridablanca. Todo muy puntual y el carro en excelente estado. Pude conocer el Ecoparque El Santísimo y el Parque Caracoli sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Floridablanca fue muy fácil gracias a este servicio de alquiler. Recorrimos el Jardín Botánico Eloy Valenzuela y el Acualago, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Floridablanca. El auto fue perfecto para ir al Parque Natural La Pera y el Centro Comercial Cañaveral, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "palmira",
    name: "Palmira",
    description:
      "¿Planeas visitar Palmira? En Palmira puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso Bonilla Aragón (Cali), a solo 20 minutos. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como la Basílica del Señor de los Milagros en Buga, las haciendas azucareras históricas o el centro de Cali. Nuestra sede en Palmira te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Villa de las Palmas, Capital Agrícola de Colombia!",
    link: "/palmira",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Palmira, tuvimos la oportunidad de visitar el Museo de la Caña de Azúcar y la Catedral de Palmira. Fue muy cómodo desplazarse entre estos destinos y disfrutar de la historia azucarera a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Zoológico al final de la tarde, después de explorar el Parque Bolívar. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la arquitectura colonial.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Palmira, visitamos el Centro Histórico y el Parque de los Fundadores. Tener un auto nos permitió movernos con facilidad y disfrutar de la cultura sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Palmira. Todo muy puntual y el carro en excelente estado. Pude conocer el Museo de la Caña de Azúcar y la Catedral sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Palmira fue muy fácil gracias a este servicio de alquiler. Recorrimos el Zoológico y el Parque Bolívar, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Palmira. El auto fue perfecto para ir al Centro Histórico y el Parque de los Fundadores, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  {
    id: "soledad",
    name: "Soledad",
    description:
      "¿Planeas visitar Soledad? En Soledad puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz (Barranquilla). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Parque Sagrado Corazón o el Museo del Carnaval. Nuestra sede en Soledad te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el municipio más poblado del Atlántico, vibrante y carnavalero!",
    link: "/soledad",
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "uifaces-popular-image5",
            alt: "Stephany M. García",
          },
        },
        quote:
          "Durante nuestra estadía en Soledad, tuvimos la oportunidad de visitar el Parque Muvdi y el Río Magdalena. Fue muy cómodo desplazarse entre estos destinos y disfrutar del ambiente local a nuestro propio ritmo.",
      },
      {
        user: {
          name: "Sandra Milena Barona",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image4",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en la Iglesia de Soledad al final de la tarde, después de explorar el Parque Central. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la cultura.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "uifaces-popular-image3",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Soledad, visitamos el Mercado Público y el Malecón. Tener un auto nos permitió movernos con facilidad y disfrutar del ambiente sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "uifaces-popular-image2",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Soledad. Todo muy puntual y el carro en excelente estado. Pude conocer el Parque Muvdi y el Río Magdalena sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
        },
        quote:
          "Viajar en familia a Soledad fue muy fácil gracias a este servicio de alquiler. Recorrimos la Iglesia y el Parque Central, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
        },
        quote:
          "Excelente alternativa para recorrer Soledad. El auto fue perfecto para ir al Mercado Público y el Malecón, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
];
