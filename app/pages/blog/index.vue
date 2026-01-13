<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero orientation="vertical">
      <template #title>
        <h1 class="text-white text-3xl md:text-4xl text-center font-bold">
          Blog de <span class="text-red-500">Alquilatucarro</span>
        </h1>
      </template>
      <template #description>
        <p class="text-white text-center max-w-2xl mx-auto">
          Guías, tips y consejos para alquilar carros en Colombia.
          Descubre las mejores rutas, requisitos y recomendaciones para tu viaje.
        </p>
      </template>
    </UPageHero>

    <!-- Blog Posts Grid -->
    <section class="bg-gray-100 py-12 md:py-16 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Featured Post -->
        <div v-if="featuredPost" class="mb-12">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Artículo Destacado</h2>
          <NuxtLink
            :to="featuredPost.path"
            class="block group"
          >
            <article class="bg-white rounded-xl shadow-md overflow-hidden md:flex hover:shadow-xl transition-shadow duration-300">
              <div class="md:w-1/2">
                <img
                  :src="featuredPost.image"
                  :alt="featuredPost.alt"
                  class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                >
              </div>
              <div class="p-6 md:w-1/2 flex flex-col justify-center">
                <span class="inline-block px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full w-fit mb-3">
                  {{ formatCategory(featuredPost.category) }}
                </span>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                  {{ featuredPost.title }}
                </h3>
                <p class="text-gray-600 mt-3 line-clamp-3">
                  {{ featuredPost.description }}
                </p>
                <div class="flex items-center mt-4 text-sm text-gray-500">
                  <time :datetime="featuredPost.date">{{ formatDate(featuredPost.date) }}</time>
                  <span class="mx-2">·</span>
                  <span>{{ featuredPost.readingTime }} min de lectura</span>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- All Posts -->
        <h2 class="text-xl font-bold text-gray-800 mb-6">Todos los Artículos</h2>
        <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group"
          >
            <article class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
              <div class="relative overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.alt"
                  class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                >
                <span class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-red-700 rounded-full">
                  {{ formatCategory(post.category) }}
                </span>
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 mt-2 text-sm line-clamp-2 flex-grow">
                  {{ post.description }}
                </p>
                <div class="flex items-center mt-4 text-xs text-gray-500">
                  <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                  <span class="mx-2">·</span>
                  <span>{{ post.readingTime }} min</span>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600">Próximamente encontrarás contenido sobre alquiler de carros en Colombia.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 text-white py-12 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para tu próxima aventura?
        </h2>
        <p class="text-gray-300 mb-6">
          Reserva tu carro sin anticipos en cualquiera de nuestras 27 sedes
        </p>
        <NuxtLink
          to="/"
          class="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-xl font-bold uppercase transition-colors"
        >
          Reservar Ahora
        </NuxtLink>
      </div>
    </section>
  </UPage>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/utils/types/type/BlogPost'

const { franchise } = useAppConfig()

// Query all blog posts
const { data: allPosts } = await useAsyncData('blog-posts', () =>
  queryCollection<BlogPost>('blog')
    .order('date', 'DESC')
    .all()
)

// Get featured post (first featured=true or most recent)
const featuredPost = computed(() => {
  if (!allPosts.value) return null
  return allPosts.value.find(p => p.featured) || allPosts.value[0]
})

// Get all posts except featured for the grid
const posts = computed(() => {
  if (!allPosts.value) return []
  const featured = featuredPost.value
  return allPosts.value.filter(p => p.path !== featured?.path)
})

// Format date to Spanish
function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format category name
function formatCategory(category: string): string {
  const categories: Record<string, string> = {
    guias: 'Guías',
    destinos: 'Destinos',
    tips: 'Tips',
    rutas: 'Rutas'
  }
  return categories[category] || category
}

// SEO
useHead({
  title: `Blog | ${franchise.shortname}`,
  link: [
    { rel: 'canonical', href: `${franchise.website}/blog` }
  ]
})

useSeoMeta({
  title: `Blog - Guías y Tips de Alquiler de Carros | ${franchise.shortname}`,
  description: 'Descubre guías, tips y consejos para alquilar carros en Colombia. Requisitos, mejores rutas, destinos y recomendaciones para tu viaje.',
  ogTitle: `Blog | ${franchise.shortname}`,
  ogDescription: 'Guías, tips y consejos para alquilar carros en Colombia.',
  ogType: 'website',
  ogUrl: `${franchise.website}/blog`,
  ogImage: franchise.logo,
  twitterCard: 'summary_large_image',
  twitterTitle: `Blog | ${franchise.shortname}`,
  twitterDescription: 'Guías, tips y consejos para alquilar carros en Colombia.'
})

// Breadcrumb schema
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Inicio', item: '/' },
      { name: 'Blog' }
    ]
  })
])

definePageMeta({
  colorMode: 'dark'
})
</script>
