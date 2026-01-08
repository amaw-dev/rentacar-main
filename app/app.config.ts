export default defineAppConfig({
  defaultTimezone: "America/Bogota",
  ui: {
    pageSection: {
      slots: {
        container:
          "flex flex-col lg:grid py-12 sm:py-6 lg:py-20 gap-8 sm:gap-16",
      },
    },
    pageHero: {
      slots: {
        container:
          "flex flex-col lg:grid py-8 sm:py-16 lg:py-24 gap-8 sm:gap-y-16",
      },
    },
    button: {
      variants: {
        size: {
          "2xl": {
            base: "px-6 py-6 text-xl gap-3",
            leadingIcon: "size-8",
            leadingAvatarSize: "sm",
            trailingIcon: "size-8",
          },
        },
      },
    },
    formField: {
      slots: {
        label: "block font-normal text-default text-sm pl-1",
        container: "mt-0.5 relative",
      },
    },
  },
  organization: {
    name: "AMAW SAS",
    address:
      "KM 3 vía chipaya parcelación praderas de verde horizonte casa 157",
    postalcode: "764007",
    logo: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Flogo.png?alt=media&token=975cfe04-c619-44bc-964a-e6231ca92dfe",
    brand: "Alquilatucarro",
    otherbrands: ["Alquilame", "Alquicarros"],
  },
  reservation: {
    website: "https://reservatucarro.com",
  },
  franchise: {
    name: "alquilatucarro.com",
    shortname: "alquilatucarro",
    website: "https://alquilatucarro.com",
    title: "ALQUILER DE CARROS EN COLOMBIA desde USD $32 ALQUILATUCARRO",
    description:
      "Los mejores precios en alquiler de carros y alquiler de camionetas en varias zonas del país. Reserva Ahora! Tenemos variedad de carros nuevos renovando nuestra flota cada 2 años. Alquiler de carros en Bogotá, Medellín, Barranquilla, Cali, Cartagena, Bucaramanga, Ibagué, Manizales, Cúcuta, Santa Marta, Pereira, Montería y Villavicencio.",
    logo: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Flogo.png?alt=media&token=975cfe04-c619-44bc-964a-e6231ca92dfe",
    oglogo:
      "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Fog-logo.png?alt=media&token=609ec027-6040-466d-9364-d933f67d1e5f",
    svglogo:
      "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Flogo.svg?alt=media&token=ab04ed05-fef3-4b92-9c72-a7c459933c35",
    phone: "+57 301 672 9250",
    whatsapp: "https://wa.me/573016729250",
    email: "alquilatucarro@gmail.com",
    socialmedia: [
      "https://www.facebook.com/alquilerdecarroscolombia",
      "https://www.instagram.com/alquilatucarro",
      "https://twitter.com/Alquilercarrosc",
      "https://www.youtube.com/@alquilatucarro",
      "https://www.tiktok.com/@alquilatucarro",
      "https://co.pinterest.com/alquilatucarro/",
    ],
    footerLinks: [
      {
        link: "https://storage.googleapis.com/alquilatucarro/rentacar-landing/2023/pdf/POL%C3%8DTICA%20DE%20PRIVACIDAD.pdf",
        label: "Términos y condiciones",
      },
      {
        link: "https://storage.googleapis.com/alquilatucarro/rentacar-landing/2023/pdf/tratamiento-datos-alquilatucarro.pdf",
        label: "Política de tratamiento de datos personales",
      },
      {
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe5NLCil5hQNqsdPhwDM3DYe3wbGiUyr-2VK4RBTYE3YQbcug/viewform",
        label: "Quejas y reclamos",
      },
      {
        link: "https://www.alquilatucarro.com/gana/",
        label: "Gana comisiones",
      },
      {
        link: "https://www.alquilatucarro.com/blog/",
        label: "Blog",
      },
    ],
    testimonials: [
      {
        user: {
          name: "Stephany M. García",
          description: "Peru",
          avatar: {
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image5.webp?alt=media&token=b6467738-4692-48dd-937c-16c81f715926",
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
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image4.webp?alt=media&token=5d545267-03e6-4e83-a081-4a16259805e2",
            alt: "Sandra Milena Barona",
          },
        },
        quote:
          "Hicimos una parada en el Metrocable de Medellín al final de la tarde, después de explorar Comuna 13. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar la transformación urbana.",
      },
      {
        user: {
          name: "Luis Javier Rodríguez M.",
          description: "Honduras",
          avatar: {
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image3.webp?alt=media&token=54d9ed05-162a-4b20-a485-bdc87aaeb27f",
            alt: "Luis Javier Rodríguez M.",
          },
        },
        quote:
          "En Cali, visitamos el Zoológico y subimos a Cristo Rey para ver la ciudad desde arriba. Tener un auto nos permitió movernos con facilidad y disfrutar de la salsa y el ambiente sin preocupaciones.",
      },
      {
        user: {
          name: "Carlos Andrés Mejía",
          description: "Colombia",
          avatar: {
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image2.webp?alt=media&token=24560311-369e-4f54-9a1a-36f0da7ec9f7",
            alt: "Carlos Andrés Mejía",
          },
        },
        quote:
          "Me encantó el servicio en Barranquilla. Todo muy puntual y el carro en excelente estado. Pude conocer el Carnaval Museum y Bocas de Ceniza sin complicaciones. ¡Totalmente recomendado!",
      },
      {
        user: {
          name: "Ana Lucía Torres",
          description: "Ecuador",
          avatar: {
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-human-image6.webp?alt=media&token=bb28b34b-f738-40ee-be58-e5fd35751da2",
            alt: "Ana Lucía Torres",
          },
        },
        quote:
          "Viajar en familia a Cartagena fue muy fácil gracias a este servicio de alquiler. Recorrimos la Ciudad Amurallada y el Castillo San Felipe, con buen precio y excelente atención.",
      },
      {
        user: {
          name: "Esteban Páez",
          description: "Colombia",
          avatar: {
            src: "https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Favatares%2Fuifaces-popular-image.webp?alt=media&token=556252eb-f9e0-4cc5-832a-0e97d691b4d0",
            alt: "Esteban Páez",
          },
        },
        quote:
          "Excelente alternativa para recorrer Bucaramanga. El auto fue perfecto para ir al Cañón del Chicamocha y Girón, muy limpio, seguro y con buen consumo de gasolina.",
      },
    ],
  },
  branches: [
    {
      id: 1,
      code: "AARME",
      name: "Armenia Aeropuerto",
      city: "armenia",
    },
    {
      id: 2,
      code: "AABAN",
      name: "Barranquilla Aeropuerto",
      city: "barranquilla",
    },
    {
      id: 3,
      code: "ACBAN",
      name: "Barranquilla Norte",
      city: "barranquilla",
    },
    {
      id: 4,
      code: "ACBSD",
      name: "Soledad",
      city: "soledad",
    },
    {
      id: 5,
      code: "AABOT",
      name: "Bogotá Aeropuerto",
      city: "bogota",
    },
    {
      id: 6,
      code: "ACBOT",
      name: "Bogotá Av. Caracas con 72",
      city: "bogota",
    },
    {
      id: 7,
      code: "ACBEX",
      name: "Bogotá Almacen Éxito del Country",
      city: "bogota",
    },
    {
      id: 8,
      code: "ACBNN",
      name: "Bogotá C.Cial Nuestro Centro",
      city: "bogota",
    },
    {
      id: 9,
      code: "ACBOJ",
      name: "Bogotá Almacen Yumbo Calle 170",
      city: "bogota",
    },
    {
      id: 10,
      code: "AABCR",
      name: "Bucaramanga Aeropuerto",
      city: "bucaramanga",
    },
    {
      id: 11,
      code: "ACBCR",
      name: "Floridablanca",
      city: "floridablanca",
    },
    {
      id: 12,
      code: "AAKAL",
      name: "Cali Aeropuerto",
      city: "cali",
    },
    {
      id: 13,
      code: "ACKAL",
      name: "Cali Sur Camino Real",
      city: "cali",
    },
    {
      id: 14,
      code: "ACKJC",
      name: "Cali Norte Chipichape",
      city: "cali",
    },
    {
      id: 15,
      code: "ACKPA",
      name: "Palmira C.Cial Plaza Madero",
      city: "palmira",
    },
    {
      id: 16,
      code: "AACTG",
      name: "Cartagena Aeropuerto",
      city: "cartagena",
    },
    {
      id: 17,
      code: "AACUC",
      name: "Cucuta Aeropuerto",
      city: "cucuta",
    },
    {
      id: 18,
      code: "ACIBG",
      name: "Ibagué C.Cial Plazas del Bosque",
      city: "ibague",
    },
    {
      id: 19,
      code: "ACMNZ",
      name: "Manizales C.Cial Mallplaza",
      city: "manizales",
    },
    {
      id: 20,
      code: "ACMDL",
      name: "Medellín Las Vegas el Poblado",
      city: "medellin",
    },
    {
      id: 21,
      code: "ACMCL",
      name: "Medellín Centro Éxito Colombia",
      city: "medellin",
    },
    {
      id: 22,
      code: "ACMNN",
      name: "Medellín Ciudad del Rio El Poblado",
      city: "medellin",
    },
    {
      id: 23,
      code: "AAMDL",
      name: "Medellín Aeropuerto José María C.",
      city: "medellin",
    },
    {
      id: 24,
      code: "ACMJM",
      name: "Rionegro",
      city: "medellin",
    },
    {
      id: 25,
      code: "AAMTR",
      name: "Montería Aeropuerto",
      city: "monteria",
    },
    {
      id: 26,
      code: "ACMTR",
      name: "Montería C.Cial Buenavista",
      city: "monteria",
    },
    {
      id: 27,
      code: "AANVA",
      name: "Neiva Aeropuerto",
      city: "neiva",
    },
    {
      id: 28,
      code: "AAPEI",
      name: "Pereira Aeropuerto",
      city: "pereira",
    },
    {
      id: 29,
      code: "AASMR",
      name: "Santa Marta Aeropuerto",
      city: "santa-marta",
    },
    {
      id: 30,
      code: "ACSMR",
      name: "Santa Marta Barrio El prado",
      city: "santa-marta",
    },
    {
      id: 31,
      code: "AAVAL",
      name: "Valledupar Aeropuerto",
      city: "valledupar",
    },
    {
      id: 32,
      code: "ACVLL",
      name: "Villavicencio C.Cial Llano Centro",
      city: "villavicencio",
    },
  ],
  faqs: [
    {
      label: "¿Cómo puedo hacer una reserva?",
      content:
        "Para realizar un alquiler de carros debe generar una reserva en nuestra página web o a través de nuestra línea telefónica, esta reserva será enviada con todos los datos necesarios para montar una reserva, una vez confirmada la disponibilidad, Se enviará un correo de confirmación indicando que la reserva ha sido montada. El día de reserva deberá presentarse con cupo disponible y documentos según lo acordado en las oficinas para retirar el vehículo, llenará y firmará las formas para el trámite; si cumple con las condiciones, el vehículo será entregado y la reserva será efectiva.",
    },
    {
      label: "¿Se puede realizar un alquiler de carros sin tarjeta de crédito?",
      content:
        "Lamentablemente no se puede realizar el alquiler de vehículos sin tarjeta de crédito ya que las agencias no está autorizada para recibir dineros en efectivo o con tarjetas débito, la única manera es con Tarjeta de crédito a nombre de quien hace el alquiler.",
    },
    {
      label: "¿No tengo todo el cupo en la tarjeta, puedo hacer la reserva?",
      content:
        "comuníquese con nuestros asesores de alquiler de carros colombia para validar la información de sus tarjetas de crédito, ya que se puede realizar un voucher por el valor de la renta y otro por el valor de garantía mientras tiene el vehículo en uso.",
    },
    {
      label:
        "¿Puedo alquilar carro en colombia con tarjeta de crédito de almacenes Éxito o Falabella?",
      content:
        "Algunos almacenes de cadena ofrecen tarjetas de crédito con franquicias Mastercard o Visa, las cuales le servirán para rentar carros en Colombia, pero debe verificar ya que los almacenes también ofrecen tarjetas de crédito propias sin franquicias y estas tarjetas no sirven para renta de carros en Colombia",
    },
    {
      label:
        "¿Que edad debo tener para acceder al Alquiler de Carros en Colombia?",
      content:
        "Para acceder al servicio de Alquiler de Carros en Colombia debe tener mínimo 21 años de edad, tener licencia de conducción y una tarjeta de crédito con cupo disponible",
    },
    {
      label: "¿Cómo se debe entregar el vehículo?",
      content:
        "Se debe entregar igual como lo recibe, tanqueado, limpio y en perfecto estado como se le entregó.",
    },
    {
      label: "¿Mi licencia es extranjera, puedo usarla en Colombia?",
      content:
        "Las licencias de conducción expedidas en otro país, que se encuentren vigentes y que sean utilizadas por turistas o personas en tránsito en el territorio nacional, serán válidas y admitidas para conducir en Colombia durante la permanencia autorizada a su titular, conforme a las disposiciones internacionales sobre la materia. (Artículo 25 Del código nacional de tránsito en Colombia), Así que apresúrate y realiza el alquiler de carros para viajar por Colombia",
    },
    {
      label: "¿Puedo recibir el vehículo en una ciudad y entregarlo en otra?",
      content:
        "Sí, es posible hacer esto, siempre y cuando lo manifieste con anterioridad y pague el recargo correspondiente por el servicio. (Aplican restricciones). $ 1.283 por kilometraje para la devolución del vehículo... Rentar carro en Colombia es tu mejor opción",
    },
    {
      label:
        "¿Puedo usar la Tarjeta de Crédito de otra persona para el Alquiler de un Carro?",
      content:
        "Sí, siempre y cuando el titular de la tarjeta de crédito este en el momento de firma el contrato y usted estaría como conductor adicional dentro del contrato de alquiler de autos en Colombia",
    },
    {
      label: "¿Que no cubre el seguro Protección?",
      content:
        "Perdida de papeles del vehículo, llaves, foto multa y placa. No cubre la perdida de accesorios tales como, llantas de emergencia, aros, radio, parlantes, apoyacabezas, retrovisores, entre otros. Tampoco está cubierto el robo de piezas, ni componentes del Motor. *** Cabe resaltar que ninguna de las protecciones o seguros de alquiler de autos en Colombia cubre accesorios como: radio, espejos, copas, farolas etc. (accesorios removibles).",
    },
    {
      label:
        "¿A los cuántos días se realiza el desbloqueo del dinero después de que se haga la transacción?",
      content:
        "Se libera después de la devolución del vehículo el bloqueo entre 4 a 6 días hábiles tanto para renta de carros en Colombia, camionetas o utilitarias.",
    },
  ],
  cities: [
    {
      id: "armenia",
      name: "Armenia",
      description:
        "¿Planeas visitar Armenia? En Armenia puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Edén. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como Salento, Filandia o el Parque del Café. Nuestra sede en Armenia te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el corazón del Paisaje Cultural Cafetero, declarado Patrimonio de la Humanidad!",
      link: "https://www.alquilerdecarrosarmenia.com/",
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
      link: "https://www.alquilerdecarrosbarranquilla.com/",
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
      link: "https://www.alquilercarrosenbogota.co/",
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
      link: "https://www.alquilercarrosbucaramanga.com/",
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
      link: "https://www.alquilerdecarroscali.net/",
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
      link: "https://www.alquilerdecarroscartagena.com/",
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
      link: "https://www.alquilerdecarroscucuta.com/",
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
      link: "https://www.alquilerdecarrosibague.com/",
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
      link: "https://www.alquilerdecarrosmanizales.com/",
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
      link: "https://www.alquilercarrosmedellin.co/",
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
      link: "https://www.alquilerdecarrosmonteria.com/",
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
      link: "https://www.alquilerdecarrosneiva.com/",
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
      link: "https://www.alquilerdecarrospereira.com/",
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
      id: "santamarta",
      name: "Santa Marta",
      description:
        "¿Planeas visitar Santa Marta? En Santa Marta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Simón Bolívar. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Tayrona, la Quinta de San Pedro Alejandrino o Taganga. Nuestra sede en Santa Marta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Bahía Más Linda de América!",
      link: "https://www.alquilercarrossantamarta.com/",
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
      link: "https://www.alquilerdecarrosvalledupar.com/",
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
      link: "https://www.alquilercarrosvillavicencio.com/",
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
      link: "https://www.alquilerdecarrosfloridablanca.com/",
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
        "¿Planeas visitar Floridablanca? En Floridablanca puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro (Bucaramanga). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Ecoparque Cerro El Santísimo, el Jardín Botánico Eloy Valenzuela o Cañón del Chicamocha. Nuestra sede en Floridablanca te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Dulce de Colombia, famosa por sus obleas!",
      link: "https://www.alquilerdecarrospalmira.com/",
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
      link: "https://www.alquilerdecarrossoledad.com/",
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
    {
      id: "cancun",
      name: "Cancún",
      description:
        "¿Planeas visitar Cancún? En Cancún puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Internacional de Cancún. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como las playas del Caribe, Chichén Itzá o Xcaret. Nuestra sede en Cancún te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el paraíso maya del Caribe mexicano!",
      link: "https://alquilerdecarroscancun.com/",
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
            "Durante nuestra estadía en Cancún, tuvimos la oportunidad de visitar Chichén Itzá y Isla Mujeres. Fue muy cómodo desplazarse entre estos destinos y disfrutar de las ruinas mayas a nuestro propio ritmo.",
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
            "Hicimos una parada en los cenotes al final de la tarde, después de explorar Playa Delfines. Contar con transporte propio nos dio la libertad de hacer ese recorrido sin prisas y apreciar las aguas cristalinas.",
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
            "En Cancún, visitamos el Museo Subacuático y Xcaret. Tener un auto nos permitió movernos con facilidad y disfrutar de la aventura sin preocupaciones.",
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
            "Me encantó el servicio en Cancún. Todo muy puntual y el carro en excelente estado. Pude conocer Chichén Itzá y Isla Mujeres sin complicaciones. ¡Totalmente recomendado!",
        },
        {
          user: {
            name: "Ana Lucía Torres",
            description: "Ecuador",
            avatar: { src: "uifaces-human-image6", alt: "Ana Lucía Torres" },
          },
          quote:
            "Viajar en familia a Cancún fue muy fácil gracias a este servicio de alquiler. Recorrimos los cenotes y Playa Delfines, con buen precio y excelente atención.",
        },
        {
          user: {
            name: "Esteban Páez",
            description: "Colombia",
            avatar: { src: "uifaces-popular-image", alt: "Esteban Páez" },
          },
          quote:
            "Excelente alternativa para recorrer Cancún. El auto fue perfecto para ir al Museo Subacuático y Xcaret, muy limpio, seguro y con buen consumo de gasolina.",
        },
      ],
    },
  ],
  adminData: {
    branches: [
      {
        id: 1,
        code: "AARME",
        name: "Armenia Aeropuerto",
        city: "armenia",
        schedule: {},
      },
      {
        id: 2,
        code: "AABAN",
        name: "Barranquilla Aeropuerto",
        city: "barranquilla",
        schedule: {},
      },
      {
        id: 3,
        code: "ACBAN",
        name: "Barranquilla Vía 40",
        city: "barranquilla",
        schedule: {},
      },
      {
        id: 4,
        code: "ACBSD",
        name: "Soledad ",
        city: "soledad",
        schedule: {},
      },
      {
        id: 5,
        code: "AABOT",
        name: "Bogota Aeropuerto",
        city: "bogota",
        schedule: {},
      },
      {
        id: 7,
        code: "ACBEX",
        name: "Bogota Almacen Éxito Country",
        city: "bogota",
        schedule: {},
      },
      {
        id: 8,
        code: "ACBOJ",
        name: "Bogota Almacen Jumbo calle 170",
        city: "bogota",
        schedule: {},
      },
      {
        id: 12,
        code: "AABCR",
        name: "Bucaramanga Aeropuerto ",
        city: "bucaramanga",
        schedule: {},
      },
      {
        id: 13,
        code: "ACBCR",
        name: "Floridablanca ",
        city: "floridablanca",
        schedule: {},
      },
      {
        id: 14,
        code: "AAKAL",
        name: "Cali Aeropuerto",
        city: "cali",
        schedule: {},
      },
      {
        id: 15,
        code: "ACKAL",
        name: "Cali Sur Camino Real ",
        city: "cali",
        schedule: {},
      },
      {
        id: 16,
        code: "ACKJC",
        name: "Cali Norte Chipichape",
        city: "cali",
        schedule: {},
      },
      {
        id: 18,
        code: "ACKPA",
        name: "Palmira C.Cial Plaza Madero",
        city: "palmira",
        schedule: {},
      },
      {
        id: 19,
        code: "AACTG",
        name: "Cartagena Aeropuerto",
        city: "cartagena",
        schedule: {},
      },
      {
        id: 20,
        code: "AACUC",
        name: "Cucuta Aeropuerto",
        city: "cucuta",
        schedule: {},
      },
      {
        id: 21,
        code: "ACIBG",
        name: "Ibague C.Cial Plazas del Bosque",
        city: "ibague",
        schedule: {},
      },
      {
        id: 22,
        code: "ACMNZ",
        name: "Manizales C.Cial Mall Plaza ",
        city: "manizales",
        schedule: {},
      },
      {
        id: 24,
        code: "ACMCL",
        name: "Medellin Éxito Colombia ",
        city: "medellin",
        schedule: {},
      },
      {
        id: 25,
        code: "ACMNN",
        name: "Medellín El Poblado",
        city: "medellin",
        schedule: {},
      },
      {
        id: 26,
        code: "AAMDL",
        name: "Medellín Aeropuerto",
        city: "medellin",
        schedule: {},
      },
      {
        id: 27,
        code: "ACMJM",
        name: "Rionegro",
        city: "medellin",
        schedule: {},
      },
      {
        id: 30,
        code: "AAMTR",
        name: "Montería Aeropuerto",
        city: "monteria",
        schedule: {},
      },
      {
        id: 31,
        code: "ACMTR",
        name: "Monteria C.Cial Buenavista ",
        city: "monteria",
        schedule: {},
      },
      {
        id: 32,
        code: "AANVA",
        name: "Neiva Aeropuerto",
        city: "neiva",
        schedule: {},
      },
      {
        id: 33,
        code: "AAPEI",
        name: "Pereira Aeropuerto",
        city: "pereira",
        schedule: {},
      },
      {
        id: 34,
        code: "AASMR",
        name: "Santa Marta Aeropuerto",
        city: "santa-marta",
        schedule: {},
      },
      {
        id: 35,
        code: "ACSMR",
        name: "Santa Marta Centro",
        city: "santa-marta",
        schedule: {},
      },
      {
        id: 36,
        code: "AAVAL",
        name: "Valledupar Aeropuerto",
        city: "valledupar",
        schedule: {},
      },
      {
        id: 37,
        code: "ACVLL",
        name: "Villavicencio C.Cial Llano Centro ",
        city: "villavicencio",
        schedule: {},
      },
      {
        id: 38,
        code: "ACBNN",
        name: "Bogota C.Cial Nuestro Bogotá",
        city: "bogota",
        schedule: {},
      },
      {
        id: 39,
        code: "ACBED",
        name: "Bogota Fontibon",
        city: "bogota",
        schedule: {},
      },
    ],
    categories: [
      {
        id: "C",
        identification: "C",
        name: "Gama C",
        category: "Gama C Económico Mecánico",
        description:
          "Automóvil de Trasmisión Mecánica de 5 pasajeros, 2 equipajes grandes 1 de mano, 5 puertas (HB), Aire AC, Rádio, VÍdrios Eléctricos, Dirección EPS, Frenos ABS, AirBags",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/renault-kwid-10-o-similar.webp",
        ad: "",
        models: [
          {
            name: "Fiat Mobi 1.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/fiat-mobi-10.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Renault Kwid 1.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/renault-kwid-10-o-similar.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Susuki S-Presso 1.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/susuki-s-presso-10.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Kia Picanto 1.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/chevrolet-spark-gt-12.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 3756000,
            "2k_kms": 4196000,
            "3k_kms": 4196000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 476000,
            one_day_price: 125200,
          },
        ],
        total_coverage_unit_charge: 67090,
        active: 1,
      },
      {
        id: "F",
        identification: "F",
        name: "Gama F",
        category: "Gama F Sedán Mecánico",
        description:
          "Automóvil tipo Sedán y HatchBack, 5 pasajeros, 2 equipajes grandes y 2 de mano, Aire AC, Radio, Vídrios Eléctricos, Dirección EPS, Frenos ABS, AirBags",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-swift-dzire-12.webp",
        ad: "",
        models: [
          {
            name: "Renault Sandero 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/renault-logan-16.webp",
            description: "HatchBack o similar",
            default: true,
          },
          {
            name: "Hyundai Accent 1.5",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-accent-16.webp",
            description: "Sedán o similar",
            default: false,
          },
          {
            name: "Suzuki Baleno 1.4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-baleno-hb-13.webp",
            description: "HatchBack o similar",
            default: false,
          },
          {
            name: "Chevrolet Joy 1.4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/chevrolet-joy-14-sedan.webp",
            description: "Sedán o similar",
            default: false,
          },
          {
            name: "Volkswagen Voyage 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/volkswagen-voyage-16-sedan.webp",
            description: "Sedán o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 4467000,
            "2k_kms": 4909000,
            "3k_kms": 4909000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 476000,
            one_day_price: 148900,
          },
        ],
        total_coverage_unit_charge: 76366,
        active: 1,
      },
      {
        id: "FX",
        identification: "FX",
        name: "Gama FX",
        category: "Gama FX Sedán Automático",
        description:
          "5 personas +2 maletas grandes y 2 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-accent-advance-16.webp",
        ad: "",
        models: [
          {
            name: "Suzuki Swift Dzire 1.2",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-swift-dzire-12.webp",
            description: "Sedán o similar",
            default: true,
          },
          {
            name: "Renault Logan 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/renault-logan-16.webp",
            description: "Sedán o similar",
            default: false,
          },
          {
            name: "Volkswagen Gol 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/volkswagen-gol-16.webp",
            description: "HatchBack o similar",
            default: false,
          },
          {
            name: "Kia Rio 1.3",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/kia-rio-13.webp",
            description: "HacthBack o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 4614000,
            "2k_kms": 5056000,
            "3k_kms": 5056000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 476000,
            one_day_price: 153800,
          },
        ],
        total_coverage_unit_charge: 76366,
        active: 1,
      },
      {
        id: "LY",
        identification: "LY",
        name: "Gama LY",
        category: "Gama LY Sedán Automático Eléctrico",
        description:
          "Automóvil Electrico de 220km de Autonomia , 5 pasajeros, 2 equipajes grandes y 2 de mano, Aire AC, Radio, Vidrios electricos, Direccion EPS, Frenos ABS, AirBags",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/renault-zoe-o-similar.webp",
        ad: "",
        models: [
          {
            name: "Changan E-Star Electrico",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/e-star-electrico-automatico.webp",
            description: "HatchBack o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 5788990,
            "2k_kms": 5788990,
            "3k_kms": 6579990,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 100,
            one_day_price: 0,
          },
        ],
        total_coverage_unit_charge: 100,
        active: 0,
      },
      {
        id: "G",
        identification: "G",
        name: "Gama G",
        category: "Gama G Camioneta Mecánica",
        description:
          "Camioneta de Transmisión Mecanica 4x2 a Gasolina, 5 pasageros, 5 Puertas, Aire AC, Radio, Cierre central, Vídrios Eléctricos, Dirección Asistida, Frenos ABS, Air Bags.",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/arona.webp",
        ad: "",
        models: [
          {
            name: "Fiat Pulse 1.3",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/fiat-pulse-13.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Hyundai Creta",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-creta.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Seat Arona",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/seat-arona.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Suzuki Vitara 1.4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-vitara-1.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 0,
            "2k_kms": 6584990,
            "3k_kms": 6584990,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 100,
            one_day_price: 0,
          },
        ],
        total_coverage_unit_charge: 100,
        active: 0,
      },
      {
        id: "GC",
        identification: "GC",
        name: "Gama GC",
        category: "Gama GC Camioneta Automática",
        description:
          "5 personas +2 maletas grandes y 3 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/seat-arona-16.webp",
        ad: "",
        models: [
          {
            name: "Hyundai Creta 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-creta-16.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Opel Crossland",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/opel-crossland.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Kia Sonet",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/kia-sonet.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 5938000,
            "2k_kms": 6582000,
            "3k_kms": 6582000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 595000,
            one_day_price: 197900,
          },
        ],
        total_coverage_unit_charge: 98741,
        active: 0,
      },
      {
        id: "G4",
        identification: "G4",
        name: "Gama G4",
        category: "Gama G4 Camioneta Mecánica 4X4",
        description:
          "5 personas +2 maletas grandes y 3 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/renault-duster-dynamiqe-20.webp",
        ad: "",
        models: [
          {
            name: "Renault Duster Iconic 4x2",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/renault-duster-dynamiqe-20.webp",
            description: "o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 6458000,
            "2k_kms": 7102000,
            "3k_kms": 7102000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 595000,
            one_day_price: 214266,
          },
        ],
        total_coverage_unit_charge: 98741,
        active: 1,
      },
      {
        id: "LP",
        identification: "LP",
        name: "Gama LP",
        category: "Gama LP Sedán Automático Híbrido",
        description:
          "5 personas +2 maletas grandes y 2 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/toyota-corolla-hibrido.webp",
        ad: "",
        models: [
          {
            name: "Toyota Corolla Híbrido",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/toyota-corolla-hibrido.webp",
            description: "o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 0,
            "2k_kms": 8288990,
            "3k_kms": 8288990,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 100,
            one_day_price: 0,
          },
        ],
        total_coverage_unit_charge: 100,
        active: 0,
      },
      {
        id: "VP",
        identification: "VP",
        name: "Gama VP",
        category: "Gama VP Camioneta Mecánica de Platón",
        description:
          "Camioneta 4x4 de Transmisión Mecanica, Doble Cabina, 650kg de Carga, 1.3L Turbo a Gasolina, Potencia 154HP, 5 pasageros, 4 Puertas, Aire AC, Radio, Cierre central, Vídrios Eléctricos, Dirección Asistida, Frenos ABS, Air Bags.",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/renault-duster-oroch-4x4.webp",
        ad: "",
        models: [
          {
            name: "Renault Duster Oroch 4x4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/prueva-1.webp",
            description: "o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 6458000,
            "2k_kms": 6899000,
            "3k_kms": 6899000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 595000,
            one_day_price: 550000,
          },
        ],
        total_coverage_unit_charge: 102011,
        active: 1,
      },
      {
        id: "GX",
        identification: "GX",
        name: "Gama GX",
        category: "Gama GX Camioneta Automática 4x2",
        description:
          "Camioneta de Transmisión Automatica 4x2 a Gasolina, 5 pasageros, 5 Puertas, Aire AC, Radio, Cierre central, Vídrios Eléctricos, Dirección Asistida, Frenos ABS, Air Bags.",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/susuki-vitara-15.webp",
        ad: "",
        models: [
          {
            name: "Susuki Vitara 1.5",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/susuki-vitara-15.webp",
            description: "o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 0,
            "2k_kms": 7961990,
            "3k_kms": 7961990,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 100,
            one_day_price: 0,
          },
        ],
        total_coverage_unit_charge: 100,
        active: 0,
      },
      {
        id: "LE",
        identification: "LE",
        name: "Gama LE",
        category: "Gama LE Camioneta Automática Especial",
        description:
          "Modelos 2022 2023 2024 ++ 5 personas +2 maletas grandes y 3 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/renault-koleos-25.webp",
        ad: "",
        models: [
          {
            name: "Renault Koleos 2.5",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/renault-koleos-25.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Nissan Qashqai 2.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/nissan-qashqai-20.webp",
            description: "o similar",
            default: false,
          },
          {
            name: "Mitsubishi Outlander 2.4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/mitsubishi-outlander-24.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 6978000,
            "2k_kms": 8324000,
            "3k_kms": 8324000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 595000,
            one_day_price: 232600,
          },
        ],
        total_coverage_unit_charge: 102011,
        active: 1,
      },
      {
        id: "GR",
        identification: "GR",
        name: "Gama GR",
        category: "Gama GR Camioneta Automática 7 puestos",
        description:
          "7 Puestos  + 2 maletas grandes y 3 pequeñas +4 Puertas\n\n                Dirección Asistida +Air Bag",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/mitsubishi-montero-sport-30.webp",
        ad: "",
        models: [
          {
            name: "Mitsubishi Montero Sport 3.0",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/mitsubishi-montero-sport-30.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Chevrolet Trailblazer 2.8",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/chevrolet-trailblazer-28.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [
          {
            "1k_kms": 10641000,
            "2k_kms": 11987000,
            "3k_kms": 11987000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 595000,
            one_day_price: 550000,
          },
        ],
        total_coverage_unit_charge: 102011,
        active: 1,
      },
      {
        id: "FL",
        identification: "FL",
        name: "Gama FL",
        category: "Gama FL Compacto Mecánico Híbrido",
        description:
          "5 Puestos +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag +Sin pico y placa",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/gama-fl-compacto-mecanico-hibirdo.webp",
        ad: "",
        models: [
          {
            name: "Suzuki Swift Híbrido",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/gama-fl-compacto-mecanico-hibirdo.webp",
            description: "o similar",
            default: true,
          },
        ],
        month_prices: [
          {
            "1k_kms": 5610000,
            "2k_kms": 6051000,
            "3k_kms": 6051000,
            init_date: "15-01-2024",
            end_date: "30-12-2024",
            total_insurance_price: 476000,
            one_day_price: 290000,
          },
        ],
        total_coverage_unit_charge: 76366,
        active: 0,
      },
      {
        id: "FU",
        identification: "FU",
        name: "Gama FU",
        category: "Gama FU Sedán Automático",
        description:
          "5 personas +2 maletas grandes y 2 pequeñas +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag +Sin pico y placa",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-accent-advance-16.webp",
        ad: "",
        models: [
          {
            name: "Suzuki Baleno 1.4",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-baleno-hb-13.webp",
            description: "HatchBack o similar",
            default: true,
          },
          {
            name: "Hyundai Accent Advanced 1.6",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/hyundai-accent-advance-16.webp",
            description: "Sedán o similar",
            default: false,
          },
          {
            name: "Suzuki Swift Dzire 1.2",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/suzuki-swift-dzire-12.webp",
            description: "Sedán o similar",
            default: false,
          },
        ],
        month_prices: [],
        total_coverage_unit_charge: 76366,
        active: 0,
      },
      {
        id: "GL",
        identification: "GL",
        name: "Gama GL",
        category: "Gama GL Camioneta Automática",
        description:
          "5 Puestos +4 Puertas\n                Aire Acondicionado +Radio +Cierre central +Vidrios eléctrico\n                Dirección Asistida +Air Bag +Sin pico y placa",
        image:
          "https://storage.googleapis.com/aw-rentcar/carcategories/gama-gl-camioneta-automatica.webp",
        ad: "",
        models: [
          {
            name: "Renault Duster 1.3",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/gama-gl-camioneta-automatica.webp",
            description: "o similar",
            default: true,
          },
          {
            name: "Fiat Pulse Turbo 1.3",
            image:
              "https://storage.googleapis.com/aw-rentcar/carcategories/fiat-pulse-13.webp",
            description: "o similar",
            default: false,
          },
        ],
        month_prices: [],
        total_coverage_unit_charge: 98741,
        active: 0,
      },
    ],
  },
});
