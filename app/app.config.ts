export default defineAppConfig({
  ui: {
    pageSection: {
      slots: {
        container: 'flex flex-col lg:grid py-12 sm:py-6 lg:py-20 gap-8 sm:gap-16',
      }
    },
    pageHero: {
      slots: {
        container: 'flex flex-col lg:grid py-8 sm:py-16 lg:py-24 gap-8 sm:gap-y-16',
      }
    }
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
    website: "https://reservatucarro.com"
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
    email: "alquilatucarro@gmail.com",
    socialmedia: [
      "https://www.facebook.com/alquilerdecarroscolombia",
      "https://www.instagram.com/alquilatucarro",
      "https://twitter.com/Alquilercarrosc",
      "https://www.youtube.com/@alquilatucarro",
      "https://www.tiktok.com/@alquilatucarro",
      "https://co.pinterest.com/alquilatucarro/",
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
        "Sí, es posible hacer esto, siempre y cuando lo manifieste con anterioridad y pague el recargo correspondiente por el servicio. (Aplican restricciones). $ 1.283 por kilometraje para la devolución del vehículo... Alquilatucarro rentar carro colombia es tu mejor opción",
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
        "¿Planeas visitar Armenia? En Alquilatucarro Armenia puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Edén. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como Salento, Filandia o el Parque del Café. Nuestra sede en Armenia te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el corazón del Paisaje Cultural Cafetero, declarado Patrimonio de la Humanidad!",
      link: "https://www.alquilerdecarrosarmenia.com/",
    },
    {
      id: "barranquilla",
      name: "Barranquilla",
      description:
        "¿Planeas visitar Barranquilla? En Alquilatucarro Barranquilla puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Museo del Caribe o el Zoológico de Barranquilla. Nuestra sede en Barranquilla te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta de Oro de Colombia, epicentro del Carnaval más famoso del país!",
      link: "https://www.alquilerdecarrosbarranquilla.com/",
    },
    {
      id: "bogota",
      name: "Bogotá",
      description:
        "¿Planeas visitar Bogotá? En Alquilatucarro Bogotá puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Dorado. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Museo del Oro, el Cerro de Monserrate o la Zona Rosa. Nuestra sede en Bogotá te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital a 2.600 metros más cerca de las estrellas!",
      link: "https://www.alquilercarrosenbogota.co/",
    },
    {
      id: "bucaramanga",
      name: "Bucaramanga",
      description:
        "¿Planeas visitar Bucaramanga? En Alquilatucarro Bucaramanga puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Nacional del Chicamocha, el Ecoparque Cerro del Santísimo o el centro histórico. Nuestra sede en Bucaramanga te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Bonita de Colombia, famosa por sus parques y aventura extrema!",
      link: "https://www.alquilercarrosbucaramanga.com/",
    },
    {
      id: "cali",
      name: "Cali",
      description:
        "¿Planeas visitar Cali? En Alquilatucarro Cali puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso Bonilla Aragón. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Zoológico de Cali, la Iglesia La Ermita o el Cristo Rey. Nuestra sede en Cali te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital mundial de la salsa, donde el ritmo nunca para!",
      link: "https://www.alquilerdecarroscali.net/",
    },
    {
      id: "cartagena",
      name: "Cartagena",
      description:
        "¿Planeas visitar Cartagena? En Alquilatucarro Cartagena puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Rafael Núñez. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Castillo de San Felipe, el Centro Histórico o las Islas del Rosario. Nuestra sede en Cartagena te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Heroica, joya colonial del Caribe!",
      link: "https://www.alquilerdecarroscartagena.com/",
    },
    {
      id: "cucuta",
      name: "Cúcuta",
      description:
        "¿Planeas visitar Cúcuta? En Alquilatucarro Cúcuta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Camilo Daza. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón, el Parque Santander o el Puente Internacional Simón Bolívar. Nuestra sede en Cúcuta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Norte, puerta fronteriza con Venezuela!",
      link: "https://www.alquilerdecarroscucuta.com/",
    },
    {
      id: "ibague",
      name: "Ibagué",
      description:
        "¿Planeas visitar Ibagué? En Alquilatucarro Ibagué puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Perales. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Cañón del Combeima, el Jardín Botánico San Jorge o el Conservatorio del Tolima. Nuestra sede en Ibagué te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Capital Musical de Colombia, cuna de festivales folclóricos!",
      link: "https://www.alquilerdecarrosibague.com/",
    },
    {
      id: "manizales",
      name: "Manizales",
      description:
        "¿Planeas visitar Manizales? En Alquilatucarro Manizales puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto La Nubia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como la Catedral Basílica, el Ecoparque Los Yarumos o el Nevado del Ruiz. Nuestra sede en Manizales te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de las Puertas Abiertas, entre volcanes y café!",
      link: "https://www.alquilerdecarrosmanizales.com/",
    },
    {
      id: "medellin",
      name: "Medellín",
      description:
        "¿Planeas visitar Medellín? En Alquilatucarro Medellín puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto José María Córdova. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Arví, la Comuna 13 o el Jardín Botánico. Nuestra sede en Medellín te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de la Eterna Primavera, ejemplo de innovación urbana!",
      link: "https://www.alquilercarrosmedellin.co/",
    },
    {
      id: "monteria",
      name: "Montería",
      description:
        "¿Planeas visitar Montería? En Alquilatucarro Montería puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Los Garzones. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Sinú, el Parque Ronda del Sinú o el Sombrero Vueltiao. Nuestra sede en Montería te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Sinú, capital ganadera del Caribe!",
      link: "https://www.alquilerdecarrosmonteria.com/",
    },
    {
      id: "neiva",
      name: "Neiva",
      description:
        "¿Planeas visitar Neiva? En Alquilatucarro Neiva puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Benito Salas. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Desierto de la Tatacoa, el Parque Andino o el Festival del Bambuco. Nuestra sede en Neiva te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta del Sur, cerca de maravillas arqueológicas!",
      link: "https://www.alquilerdecarrosneiva.com/",
    },
    {
      id: "pereira",
      name: "Pereira",
      description:
        "¿Planeas visitar Pereira? En Alquilatucarro Pereira puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Matecaña. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Ukumarí, el Santuario de Fauna y Flora Otún Quimbaya o el Cerrito. Nuestra sede en Pereira te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Querendona, Trasnochadora y Morena del Eje Cafetero!",
      link: "https://www.alquilerdecarrospereira.com/",
    },
    {
      id: "santamarta",
      name: "Santa Marta",
      description:
        "¿Planeas visitar Santa Marta? En Alquilatucarro Santa Marta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Simón Bolívar. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Tayrona, la Quinta de San Pedro Alejandrino o Taganga. Nuestra sede en Santa Marta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Bahía Más Linda de América!",
      link: "https://www.alquilercarrossantamarta.com/",
    },
    {
      id: "valledupar",
      name: "Valledupar",
      description:
        "¿Planeas visitar Valledupar? En Alquilatucarro Valledupar puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso López. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Guatapurí, la Plaza Alfonso López o el Festival Vallenato. Nuestra sede en Valledupar te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Cuna del Vallenato, tierra de acordeones y leyendas!",
      link: "https://www.alquilerdecarrosvalledupar.com/",
    },
    {
      id: "villavicencio",
      name: "Villavicencio",
      description:
        "¿Planeas visitar Villavicencio? En Alquilatucarro Villavicencio puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Vanguardia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Los Ocarros, el Mirador de Buenavista o Caño Cristales (cerca). Nuestra sede en Villavicencio te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta al Llano, con sabores de llanero auténtico!",
      link: "https://www.alquilercarrosvillavicencio.com/",
    },
    {
      id: "floridablanca",
      name: "Floridablanca",
      link: "https://www.alquilerdecarrosfloridablanca.com/",
    },
    {
      id: "palmira",
      name: "Palmira",
      description:
        "¿Planeas visitar Floridablanca? En Alquilatucarro Floridablanca puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro (Bucaramanga). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Ecoparque Cerro El Santísimo, el Jardín Botánico Eloy Valenzuela o Cañón del Chicamocha. Nuestra sede en Floridablanca te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Dulce de Colombia, famosa por sus obleas!",
      link: "https://www.alquilerdecarrospalmira.com/",
    },
    {
      id: "soledad",
      name: "Soledad",
      description:
        "¿Planeas visitar Soledad? En Alquilatucarro Soledad puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz (Barranquilla). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Parque Sagrado Corazón o el Museo del Carnaval. Nuestra sede en Soledad te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el municipio más poblado del Atlántico, vibrante y carnavalero!",
      link: "https://www.alquilerdecarrossoledad.com/",
    },
    {
      id: "cancun",
      name: "Cancún",
      description:
        "¿Planeas visitar Cancún? En Alquilatucarro Cancún puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Internacional de Cancún. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como las playas del Caribe, Chichén Itzá o Xcaret. Nuestra sede en Cancún te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el paraíso maya del Caribe mexicano!",
      link: "https://alquilerdecarroscancun.com/",
    },
  ],
});
