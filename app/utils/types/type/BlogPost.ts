import type { MarkdownParsedContent } from '@nuxt/content'

export interface BlogAuthor {
  name: string
  avatar: string
}

export type BlogCategory = 'guias' | 'destinos' | 'tips' | 'rutas'

export interface BlogPost extends MarkdownParsedContent {
  title: string
  description: string
  image: string
  alt: string
  author: BlogAuthor
  date: string
  updated?: string
  category: BlogCategory
  tags: string[]
  readingTime: number
  featured?: boolean
}
