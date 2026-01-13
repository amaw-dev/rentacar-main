<template>
  <UPage v-if="post">
    <!-- Hero Image -->
    <div class="relative w-full h-64 md:h-96 overflow-hidden">
      <img
        :src="post.image"
        :alt="post.alt"
        class="w-full h-full object-cover"
        fetchpriority="high"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div class="max-w-4xl mx-auto">
          <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-700 rounded-full mb-4">
            {{ formatCategory(post.category) }}
          </span>
          <h1 class="text-2xl md:text-4xl font-bold text-white mb-4">
            {{ post.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <div class="flex items-center gap-2">
              <img
                :src="post.author.avatar"
                :alt="post.author.name"
                class="w-8 h-8 rounded-full"
                loading="lazy"
              >
              <span>{{ post.author.name }}</span>
            </div>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span>{{ post.readingTime }} min de lectura</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <section class="bg-white py-8 md:py-12">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <article class="lg:w-2/3 prose prose-lg prose-gray max-w-none">
            <ContentRenderer :value="post" />
          </article>

          <!-- Sidebar -->
          <aside class="lg:w-1/3">
            <div class="sticky top-24 space-y-8">
              <!-- Table of Contents -->
              <nav v-if="post.body?.toc?.links?.length" class="bg-gray-50 rounded-xl p-6">
                <h3 class="font-bold text-gray-900 mb-4">Contenido</h3>
                <ul class="space-y-2">
                  <li v-for="link in post.body.toc.links" :key="link.id">
                    <a
                      :href="`#${link.id}`"
                      class="text-sm text-gray-600 hover:text-red-700 transition-colors"
                    >
                      {{ link.text }}
                    </a>
                    <ul v-if="link.children?.length" class="ml-4 mt-2 space-y-2">
                      <li v-for="child in link.children" :key="child.id">
                        <a
                          :href="`#${child.id}`"
                          class="text-xs text-gray-500 hover:text-red-700 transition-colors"
                        >
                          {{ child.text }}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>

              <!-- Tags -->
              <div v-if="post.tags?.length" class="bg-gray-50 rounded-xl p-6">
                <h3 class="font-bold text-gray-900 mb-4">Etiquetas</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- CTA -->
              <div class="bg-red-700 rounded-xl p-6 text-white">
                <h3 class="font-bold mb-2">¿Listo para reservar?</h3>
                <p class="text-sm text-red-100 mb-4">Sin anticipos, sin compromisos</p>
                <NuxtLink
                  to="/"
                  class="block text-center bg-white text-red-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Reservar Ahora
                </NuxtLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Related Posts -->
    <section v-if="relatedPosts?.length" class="bg-gray-100 py-12 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-xl font-bold text-gray-800 mb-6">Artículos Relacionados</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="related in relatedPosts"
            :key="related.path"
            :to="related.path"
            class="group"
          >
            <article class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <img
                :src="related.image"
                :alt="related.alt"
                class="w-full h-40 object-cover"
                loading="lazy"
              >
              <div class="p-4">
                <h3 class="font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2">
                  {{ related.title }}
                </h3>
                <p class="text-sm text-gray-500 mt-2">{{ related.readingTime }} min de lectura</p>
              </div>
            </article>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Back to Blog -->
    <section class="bg-white py-8 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium transition-colors"
        >
          <span>&larr;</span>
          <span>Volver al Blog</span>
        </NuxtLink>
      </div>
    </section>
  </UPage>

  <!-- 404 -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
      <p class="text-gray-600 mb-6">El artículo que buscas no existe o ha sido movido.</p>
      <NuxtLink
        to="/blog"
        class="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
      >
        Ir al Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPosting, BreadcrumbList } from 'schema-dts'
import type { BlogPost } from '~/utils/types/type/BlogPost'

const { franchise } = useAppConfig()
const route = useRoute()

// Get the slug from route params
const slug = computed(() => {
  const params = route.params.slug
  return Array.isArray(params) ? params.join('/') : params
})

// Fetch the blog post
const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection<BlogPost>('blog')
    .path(`/blog/${slug.value}`)
    .first()
)

// Fetch related posts (same category, excluding current)
const { data: relatedPosts } = await useAsyncData(`related-${slug.value}`, async () => {
  if (!post.value) return []
  return queryCollection<BlogPost>('blog')
    .where('category', '=', post.value.category)
    .where('path', '!=', post.value.path)
    .limit(3)
    .all()
})

// Format date
function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format category
function formatCategory(category: string): string {
  const categories: Record<string, string> = {
    guias: 'Guías',
    destinos: 'Destinos',
    tips: 'Tips',
    rutas: 'Rutas'
  }
  return categories[category] || category
}

// SEO - only if post exists
if (post.value) {
  const canonicalUrl = `${franchise.website}/blog/${slug.value}`

  useHead({
    title: `${post.value.title} | ${franchise.shortname}`,
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  })

  useSeoMeta({
    title: post.value.title,
    description: post.value.description,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogType: 'article',
    ogUrl: canonicalUrl,
    ogImage: post.value.image,
    ogImageAlt: post.value.alt,
    articlePublishedTime: post.value.date,
    articleModifiedTime: post.value.updated || post.value.date,
    articleAuthor: post.value.author.name,
    articleSection: post.value.category,
    articleTag: post.value.tags?.join(', '),
    twitterCard: 'summary_large_image',
    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
    twitterImage: post.value.image
  })

  // BlogPosting schema
  useSchemaOrg([
    <BlogPosting>{
      '@type': 'BlogPosting',
      headline: post.value.title,
      description: post.value.description,
      image: post.value.image,
      datePublished: post.value.date,
      dateModified: post.value.updated || post.value.date,
      author: {
        '@type': 'Organization',
        name: post.value.author.name,
        url: franchise.website
      },
      publisher: {
        '@type': 'Organization',
        name: franchise.shortname,
        logo: {
          '@type': 'ImageObject',
          url: franchise.logo
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      keywords: post.value.tags?.join(', ')
    },
    <BreadcrumbList>{
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: franchise.website
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${franchise.website}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.value.title
        }
      ]
    }
  ])
}

definePageMeta({
  colorMode: 'dark'
})
</script>

<style>
/* Prose styling for markdown content */
.prose h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(17, 24, 39);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(31, 41, 55);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  color: rgb(55, 65, 81);
  margin-bottom: 1rem;
  line-height: 1.625;
}

.prose ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 1rem;
}

.prose ul > * + * {
  margin-top: 0.5rem;
}

.prose ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-bottom: 1rem;
}

.prose ol > * + * {
  margin-top: 0.5rem;
}

.prose li {
  color: rgb(55, 65, 81);
}

.prose a {
  color: rgb(185, 28, 28);
  text-decoration: underline;
}

.prose a:hover {
  color: rgb(153, 27, 27);
}

.prose strong {
  font-weight: 700;
  color: rgb(17, 24, 39);
}

.prose blockquote {
  border-left-width: 4px;
  border-left-style: solid;
  border-color: rgb(185, 28, 28);
  padding-left: 1rem;
  font-style: italic;
  color: rgb(75, 85, 99);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose code {
  background-color: rgb(243, 244, 246);
  color: rgb(185, 28, 28);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.prose pre {
  background-color: rgb(17, 24, 39);
  color: rgb(243, 244, 246);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

.prose img {
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose hr {
  border-color: rgb(229, 231, 235);
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
