// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  ssr: true,

  devtools: { enabled: true },

  // Component Islands: renderiza componentes estáticos sin hidratación Vue
  // Reduce JavaScript en el cliente para mejorar LCP
  experimental: {
    componentIslands: true,
  },

  // Configuración de app: CSS crítico inline + preloads para LCP
  app: {
    head: {
      // CSS crítico - balance entre tamaño y prevención de FOUC
      style: [
        {
          children: `
            *, *::before, *::after { box-sizing: border-box; }
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            img { max-width: 100%; height: auto; display: block; }
            picture { display: block; }
            svg { max-width: 100%; height: auto; }
            header svg { max-height: 3.5rem !important; max-width: 10rem !important; }
            .w-2\\.5 { width: 0.625rem; } .h-2\\.5 { height: 0.625rem; }
            .w-4 { width: 1rem; } .h-4 { height: 1rem; }
            .w-5 { width: 1.25rem; } .h-5 { height: 1.25rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            @media (min-width: 768px) { header .md\\:hidden { display: none !important; } }
            @media (max-width: 767px) { header .hidden { display: none !important; } }
            .bg-white { background-color: #fff; }
            .text-white { color: #fff; }
            .text-black { color: #000; }
            /* Critical: Layout background para LCP inmediato */
            .min-h-screen { min-height: 100vh; }
            .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
            .from-\\[\\#000073\\] { --tw-gradient-from: #000073; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, transparent); }
            .via-blue-800 { --tw-gradient-via: #1e40af; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to, transparent); }
            .to-blue-900 { --tw-gradient-to: #1e3a8a; }
            .bg-\\[\\#000073\\] { background-color: #000073; }
            /* Critical: UPageHero layout - previene CLS en Desktop */
            /* Container: flex-col en mobile, grid en desktop */
            main [data-slot="container"] {
              display: flex;
              flex-direction: column;
              gap: 2rem;
              max-width: 80rem;
              margin-left: auto;
              margin-right: auto;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            @media (min-width: 640px) {
              main [data-slot="container"] { padding-left: 1.5rem; padding-right: 1.5rem; gap: 4rem; }
            }
            @media (min-width: 1024px) {
              main [data-slot="container"] {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                align-items: center;
                padding-left: 2rem;
                padding-right: 2rem;
              }
              /* order-last para imagen en desktop - CRÍTICO para CLS */
              .lg\\:order-last { order: 9999; }
            }
          `,
        },
      ],
      // Preload imagen LCP - solo AVIF (97%+ soporte en móviles modernos)
      link: [
        { rel: 'preconnect', href: 'https://firebasestorage.googleapis.com', crossorigin: '' },
        // Mobile AVIF
        {
          rel: 'preload',
          as: 'image',
          type: 'image/avif',
          href: 'https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia-movil.avif?alt=media&token=09ef76e8-4f99-4188-8d9a-57e13e198c4b',
          media: '(max-width: 767px)',
          fetchpriority: 'high',
        },
        // Desktop AVIF
        {
          rel: 'preload',
          as: 'image',
          type: 'image/avif',
          href: 'https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro%2Fimg%2Ffamilia.avif?alt=media&token=a14e3f1c-428e-40b2-ad1e-0d724579e487',
          media: '(min-width: 768px)',
          fetchpriority: 'high',
        },
      ],
    },
  },

  modules: ['@nuxtjs/seo', '@nuxt/ui', '@pinia/nuxt', 'nuxt-llms', 'nuxt-vitalizer', '@nuxt/content'],

  // Optimización Core Web Vitals
  vitalizer: {
    // Diferir stylesheets para eliminar render-blocking CSS
    // Requiere CSS crítico inline suficiente para evitar FOUC
    disableStylesheets: 'entry',
    // Remueve prefetch links para mejorar FCP
    disablePrefetchLinks: true,
  },

  // Configuración SEO
  site: {
    url: 'https://alquilatucarro.com',
    name: 'Alquilatucarro',
    description: 'Alquila carros en Bogotá, Medellín, Cali y 14 ciudades más.',
    defaultLocale: 'es',
  },

  colorMode: {
    preference: 'dark',
  },

  imports: {
    autoImport: true,
    dirs: ["utils/**", 'stores/**'],
  },

  runtimeConfig: {
    public: {
      rentacarFranchise: "alquilatucarro",
      rentacarApiReservasDataEndpoint: "",
      rentacarApiReservasFormRecordEndpoint: "",
      rentacarApiReservasCategoriesAvailabilityEndpoint: "",
      isTest: process.env.NODE_ENV === "test",
    },
  },

  pinia: {
    storesDirs: ["stores/**"]
  },

  postcss: {
    plugins: {
      'postcss-nested': {} // Habilita postcss-nested
    }
  },

  ogImage: {
    enabled: false
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['@vueuse/core']
    },
    define: {
      // Enable detailed hydration mismatch warnings in production
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
    }
  },

  nitro: {
    preset: "firebase",
    firebase: {
      serverFunctionName: "rentacar_main_alquilatucarro",
      gen: 2,
      nodeVersion: "20",
      httpsOptions: {
        maxInstances: 1,
      },
    },
    esbuild: {
      options: {
        target: 'node20'
      }
    },
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, inmutable'
        }
      },
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600'
        }
      }
    },
    prerender: {
      routes: [
        '/',
        '/armenia',
        '/barranquilla',
        '/bogota',
        '/bucaramanga',
        '/cali',
        '/cartagena',
        '/cucuta',
        '/ibague',
        '/manizales',
        '/medellin',
        '/monteria',
        '/neiva',
        '/pereira',
        '/santa-marta',
        '/valledupar',
        '/villavicencio',
        '/floridablanca',
        '/palmira',
        '/soledad',
        '/gana',
        '/gana/terminos-condiciones',
        '/gana/politicas-privacidad',
        // Blog
        '/blog',
        '/blog/requisitos-alquilar-carro-colombia',
        '/blog/pico-y-placa-colombia-2026',
        '/blog/tipos-carros-alquilar-cual-elegir',
        '/blog/rutas-carro-desde-bogota',
        '/blog/eje-cafetero-en-carro-guia-completa',
        '/blog/costa-caribe-cartagena-santa-marta-carro',
        '/blog/viajar-carro-con-ninos-colombia',
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  sitemap: {
    urls: [
      // Homepage - máxima prioridad
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      // Ciudades principales - alta prioridad
      { loc: '/bogota', changefreq: 'monthly', priority: 0.9 },
      { loc: '/medellin', changefreq: 'monthly', priority: 0.9 },
      { loc: '/cali', changefreq: 'monthly', priority: 0.9 },
      { loc: '/cartagena', changefreq: 'monthly', priority: 0.9 },
      { loc: '/barranquilla', changefreq: 'monthly', priority: 0.9 },
      // Ciudades secundarias - prioridad media
      { loc: '/armenia', changefreq: 'monthly', priority: 0.8 },
      { loc: '/bucaramanga', changefreq: 'monthly', priority: 0.8 },
      { loc: '/cucuta', changefreq: 'monthly', priority: 0.8 },
      { loc: '/ibague', changefreq: 'monthly', priority: 0.8 },
      { loc: '/manizales', changefreq: 'monthly', priority: 0.8 },
      { loc: '/monteria', changefreq: 'monthly', priority: 0.8 },
      { loc: '/neiva', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pereira', changefreq: 'monthly', priority: 0.8 },
      { loc: '/santa-marta', changefreq: 'monthly', priority: 0.8 },
      { loc: '/valledupar', changefreq: 'monthly', priority: 0.8 },
      { loc: '/villavicencio', changefreq: 'monthly', priority: 0.8 },
      { loc: '/floridablanca', changefreq: 'monthly', priority: 0.8 },
      { loc: '/palmira', changefreq: 'monthly', priority: 0.8 },
      { loc: '/soledad', changefreq: 'monthly', priority: 0.8 },
      // Blog - prioridad media-alta
      { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
      { loc: '/blog/requisitos-alquilar-carro-colombia', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/pico-y-placa-colombia-2026', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/tipos-carros-alquilar-cual-elegir', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/rutas-carro-desde-bogota', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/eje-cafetero-en-carro-guia-completa', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/costa-caribe-cartagena-santa-marta-carro', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog/viajar-carro-con-ninos-colombia', changefreq: 'monthly', priority: 0.7 },
    ],
    exclude: ['/pendiente', '/sindisponibilidad', '/reservado/**', '/*/buscar-vehiculos/**'],
  },

  robots: {
    blockNonSeoBots: false,
    allow: [
      '/',
      '/armenia',
      '/barranquilla',
      '/bogota',
      '/bucaramanga',
      '/cali',
      '/cartagena',
      '/cucuta',
      '/ibague',
      '/manizales',
      '/medellin',
      '/monteria',
      '/neiva',
      '/pereira',
      '/santa-marta',
      '/valledupar',
      '/villavicencio',
      '/floridablanca',
      '/palmira',
      '/soledad',
      '/blog',
      '/blog/*',
    ],
    sitemap: "/sitemap.xml"
  },

  llms: {
    domain: 'https://alquilatucarro.com',
    title: 'Alquilatucarro',
    description: 'Los mejores precios en alquiler de carros y alquiler de camionetas en varias zonas del país. Reserva Ahora! Tenemos variedad de carros nuevos renovando nuestra flota cada 2 años. Alquiler de carros en Bogotá, Medellín, Barranquilla, Cali, Cartagena, Bucaramanga, Ibagué, Manizales, Cúcuta, Santa Marta, Pereira, Montería y Villavicencio.',
    sections: [
      {
        title: 'Lugares',
        description: 'Ciudades de Colombia donde se presta el servicio de alquiler de carros',
        links: [
          {
            title: 'Armenia',
            description: '¿Planeas visitar Armenia? En Alquilatucarro Armenia puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Edén. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como Salento, Filandia o el Parque del Café. Nuestra sede en Armenia te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el corazón del Paisaje Cultural Cafetero, declarado Patrimonio de la Humanidad!',
            href: '/armenia',
          },
          {
            title: 'Barranquilla',
            description: '¿Planeas visitar Barranquilla? En Alquilatucarro Barranquilla puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Museo del Caribe o el Zoológico de Barranquilla. Nuestra sede en Barranquilla te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta de Oro de Colombia, epicentro del Carnaval más famoso del país!',
            href: '/barranquilla',
          },
          {
            title: 'Bogotá',
            description: '¿Planeas visitar Bogotá? En Alquilatucarro Bogotá puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto El Dorado. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Museo del Oro, el Cerro de Monserrate o la Zona Rosa. Nuestra sede en Bogotá te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital a 2.600 metros más cerca de las estrellas!',
            href: '/bogota',
          },
          {
            title: 'Bucaramanga',
            description: '¿Planeas visitar Bucaramanga? En Alquilatucarro Bucaramanga puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Nacional del Chicamocha, el Ecoparque Cerro del Santísimo o el centro histórico. Nuestra sede en Bucaramanga te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Bonita de Colombia, famosa por sus parques y aventura extrema!',
            href: '/bucaramanga',
          },
          {
            title: 'Cali',
            description: '¿Planeas visitar Cali? En Alquilatucarro Cali puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso Bonilla Aragón. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Zoológico de Cali, la Iglesia La Ermita o el Cristo Rey. Nuestra sede en Cali te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la capital mundial de la salsa, donde el ritmo nunca para!',
            href: '/cali',
          },
          {
            title: 'Cartagena',
            description: '¿Planeas visitar Cartagena? En Alquilatucarro Cartagena puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Rafael Núñez. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Castillo de San Felipe, el Centro Histórico o las Islas del Rosario. Nuestra sede en Cartagena te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Heroica, joya colonial del Caribe!',
            href: '/cartagena',
          },
          {
            title: 'Cúcuta',
            description: '¿Planeas visitar Cúcuta? En Alquilatucarro Cúcuta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Camilo Daza. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón, el Parque Santander o el Puente Internacional Simón Bolívar. Nuestra sede en Cúcuta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Norte, puerta fronteriza con Venezuela!',
            href: '/cucuta',
          },
          {
            title: 'Ibagué',
            description: '¿Planeas visitar Ibagué? En Alquilatucarro Ibagué puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Perales. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Cañón del Combeima, el Jardín Botánico San Jorge o el Conservatorio del Tolima. Nuestra sede en Ibagué te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Capital Musical de Colombia, cuna de festivales folclóricos!',
            href: '/ibague',
          },
          {
            title: 'Manizales',
            description: '¿Planeas visitar Manizales? En Alquilatucarro Manizales puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto La Nubia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como la Catedral Basílica, el Ecoparque Los Yarumos o el Nevado del Ruiz. Nuestra sede en Manizales te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de las Puertas Abiertas, entre volcanes y café!',
            href: '/manizales',
          },
          {
            title: 'Medellín',
            description: '¿Planeas visitar Medellín? En Alquilatucarro Medellín puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto José María Córdova. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Arví, la Comuna 13 o el Jardín Botánico. Nuestra sede en Medellín te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad de la Eterna Primavera, ejemplo de innovación urbana!',
            href: '/medellin',
          },
          {
            title: 'Montería',
            description: '¿Planeas visitar Montería? En Alquilatucarro Montería puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Los Garzones. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Sinú, el Parque Ronda del Sinú o el Sombrero Vueltiao. Nuestra sede en Montería te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Perla del Sinú, capital ganadera del Caribe!',
            href: '/monteria',
          },
          {
            title: 'Neiva',
            description: '¿Planeas visitar Neiva? En Alquilatucarro Neiva puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Benito Salas. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Desierto de la Tatacoa, el Parque Andino o el Festival del Bambuco. Nuestra sede en Neiva te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta del Sur, cerca de maravillas arqueológicas!',
            href: '/neiva',
          },
          {
            title: 'Pereira',
            description: '¿Planeas visitar Pereira? En Alquilatucarro Pereira puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Matecaña. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Ukumarí, el Santuario de Fauna y Flora Otún Quimbaya o el Cerrito. Nuestra sede en Pereira te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Querendona, Trasnochadora y Morena del Eje Cafetero!',
            href: '/pereira',
          },
          {
            title: 'Santa Marta',
            description: '¿Planeas visitar Santa Marta? En Alquilatucarro Santa Marta puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Simón Bolívar. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Parque Tayrona, la Quinta de San Pedro Alejandrino o Taganga. Nuestra sede en Santa Marta te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Bahía Más Linda de América!',
            href: '/santa-marta',
          },
          {
            title: 'Valledupar',
            description: '¿Planeas visitar Valledupar? En Alquilatucarro Valledupar puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso López. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Río Guatapurí, la Plaza Alfonso López o el Festival Vallenato. Nuestra sede en Valledupar te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Cuna del Vallenato, tierra de acordeones y leyendas!',
            href: '/valledupar',
          },
          {
            title: 'Villavicencio',
            description: '¿Planeas visitar Villavicencio? En Alquilatucarro Villavicencio puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Vanguardia. Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Bioparque Los Ocarros, el Mirador de Buenavista o Caño Cristales (cerca). Nuestra sede en Villavicencio te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Puerta al Llano, con sabores de llanero auténtico!',
            href: '/villavicencio',
          },
          {
            title: 'Floridablanca',
            description: '¿Planeas visitar Floridablanca? En Alquilatucarro Floridablanca puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Palonegro (Bucaramanga). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Ecoparque Cerro El Santísimo, el Jardín Botánico Eloy Valenzuela o Cañón del Chicamocha. Nuestra sede en Floridablanca te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Ciudad Dulce de Colombia, famosa por sus obleas!',
            href: '/floridablanca',
          },
          {
            title: 'Palmira',
            description: '¿Planeas visitar Palmira? En Alquilatucarro Palmira puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Alfonso Bonilla Aragón (Cali). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Lago Calima, el Parque del Azúcar o el centro histórico. Nuestra sede en Palmira te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en la Villa de las Palmas, corazón agrícola del Valle!',
            href: '/palmira',
          },
          {
            title: 'Soledad',
            description: '¿Planeas visitar Soledad? En Alquilatucarro Soledad puedes reservar en línea sin anticipos y recoger directamente en el Aeropuerto Ernesto Cortissoz (Barranquilla). Aprovecha descuentos de hasta el 60% por reserva anticipada y elige entre carros compactos, sedanes o camionetas para recorrer lugares como el Malecón del Río, el Parque Sagrado Corazón o el Museo del Carnaval. Nuestra sede en Soledad te ofrece precios bajos y disponibilidad inmediata los 7 días de la semana. ¡Alquila fácil, sin trámites largos y comienza tu aventura en el municipio más poblado del Atlántico, vibrante y carnavalero!',
            href: '/soledad',
          },
        ],
      },
    ],
  },
})