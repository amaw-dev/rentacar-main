import { defineSitemapEventHandler } from '#imports'
import { queryCollectionWithEvent } from '#content/server'

export default defineSitemapEventHandler(async (e) => {
  const posts = await queryCollectionWithEvent(e, 'blog').all()

  return [
    // Blog index
    { loc: '/blog', changefreq: 'weekly' as const, priority: 0.8 },
    // Blog posts - uses updated date (or publish date) as lastmod
    ...posts.map(post => ({
      loc: post.path,
      lastmod: post.updated || post.date,
      changefreq: 'monthly' as const,
      priority: 0.7,
    })),
  ]
})
