// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui',
    'nuxt-llms',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxt/image',
  ],
  ogImage: {
    enabled: false
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
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
        '/santamarta',
        '/valledupar',
        '/villavicencio',
        '/floridablanca',
        '/palmira',
        '/soledad',
        '/cancun',
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  image: {
    domains: [
      'firebasestorage.googleapis.com'
    ],
    alias: {
      firebasestorage: 'https://firebasestorage.googleapis.com/v0/b/rentacar-403321.firebasestorage.app/o/rentacar-main%2Falquilatucarro'
    },
  },

  sitemap: {
    sources: [
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
      '/santamarta',
      '/valledupar',
      '/villavicencio',
      '/floridablanca',
      '/palmira',
      '/soledad',
      '/cancun',
    ],
  },

  schemaOrg: {
    identity: {
      "@type": "Organization",
      host: "https://alquilatucarro.com",
      name: "Alquilatucarro.com",
      logo: "https://storage.googleapis.com/alquilatucarrocom/landing2020/images/logo.svg",
      sameAs: [
        "https://www.facebook.com/alquilerdecarroscolombia",
        "https://www.instagram.com/alquilatucarro",
        "https://twitter.com/Alquilercarrosc",
        "https://www.youtube.com/@alquilatucarro",
        "https://www.tiktok.com/@alquilatucarro",
        "https://co.pinterest.com/alquilatucarro/",
      ],
      siteConfig: {
        "@type": "WebSite",
        "url": "https://alquilatucarro.com",
        "name": "Alquilatucarro",
        "description": "Los mejores precios en alquiler de carros y alquiler de camionetas en varias zonas del país. Reserva Ahora! +57 301 672 9250. Tenemos variedad de carros nuevos renovando nuestra flota cada 2 años. Alquiler de carros en Bogotá, Medellín, Barranquilla, Cali, Cartagena, Bucaramanga, Ibagué, Manizales, Cúcuta, Santa Marta, Pereira, Montería y Villavicencio.",
        "publisher": {
          "@type": "Organization",
          "name": "Alquilatucarro"
        },
      }
    },
  },

  llms: {
    domain: 'https://alquilatucarro.com',
    title: 'Alquilatucarro',
    description: 'Los mejores precios en alquiler de carros y alquiler de camionetas en varias zonas del país. Reserva Ahora! +57 301 672 9250. Tenemos variedad de carros nuevos renovando nuestra flota cada 2 años. Alquiler de carros en Bogotá, Medellín, Barranquilla, Cali, Cartagena, Bucaramanga, Ibagué, Manizales, Cúcuta, Santa Marta, Pereira, Montería y Villavicencio.',
    sections: [
      {
        title: 'Section 1',
        description: 'Section 1 Description',
        links: [
          {
            title: 'Link 1',
            description: 'Link 1 Description',
            href: '/link-1',
          },
          {
            title: 'Link 2',
            description: 'Link 2 Description',
            href: '/link-2',
          },
        ],
      },
    ],
  },
})