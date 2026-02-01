# Session State

> Last updated: 2026-01-31

## Current Phase

**Blog Audit Bugfixes — PR #122 OPEN**

All 16 blog improvements deployed. Visual audit found 4 production bugs; fixes in PR #122.

## Completed Work

### PR #120 — 16 Blog Improvements (merged to main)
All improvements from `docs/BLOG_IMPROVEMENTS_TRACKER.md` Fase 2:

| ID | Feature | Status |
|----|---------|--------|
| F2-1 | og:image absolute URL | ✅ |
| F2-2 | Dynamic sitemap with blog URLs | ✅ |
| F2-3/4 | NuxtImg optimization | ✅ |
| F2-5 | Staggered publication dates | ✅ |
| F2-6 | Breadcrumbs | ✅ |
| F2-7 | Category icons | ✅ |
| F2-8 | Clickable tags | ✅ |
| F2-9 | Updated date display | ✅ |
| F2-10 | Author bio (E-E-A-T) | ✅ |
| F2-11 | Content plan | ✅ |
| F2-12 | RSS feed | ✅ |
| F2-13 | CTA WhatsApp + Reservar | ✅ |
| F2-14 | Prev/Next navigation | ✅ |
| F2-15 | Search with accents | ✅ |
| F2-16 | Pagination | ✅ |

### PR #121 — RSS/Sitemap Fix (merged to main)
- **Problem**: `queryCollectionWithEvent` from `#content/server` fails on Firebase (both pre-rendering and runtime — SQLite DB unavailable in serverless)
- **Solution**: Static `public/rss.xml` + static `sitemap.urls` array in `nuxt.config.ts`
- **Deleted**: `server/routes/rss.xml.ts`, `server/api/__sitemap__/urls.ts`

### PR #122 — Blog Audit Bugfixes (open)
4 bugs found during production visual audit:

| Bug | Root Cause | Fix |
|-----|-----------|-----|
| Dates off by 1 day | `new Date('YYYY-MM-DD')` = UTC midnight → COT = day before | Parse date parts manually with local constructor |
| Hero image invisible | `<NuxtImg>` generates `/_ipx/...` URLs that don't resolve on Firebase | Replace with native `<img>` |
| Author avatar broken | Firebase Storage token expired (404) | Reactive `avatarError` ref + branded initial fallback |
| Prev/Next wrong order | `queryCollectionItemSurroundings` sorts alphabetically by path | Custom query with `.order('date', 'DESC')` |

Files changed: `useBlogUtils.ts`, `[...slug].vue` — 2 files, +32 -8 lines.

## Key Architectural Decisions

1. **No `queryCollectionWithEvent` in server routes**: Nuxt Content v3's server-side API doesn't work on Firebase. Use static alternatives.
2. **Static RSS**: `public/rss.xml` served directly by Firebase Hosting CDN. Must be updated manually when adding new blog posts.
3. **Static sitemap URLs**: Blog URLs listed in `nuxt.config.ts` `sitemap.urls`. Must be updated manually when adding new blog posts.
4. **No local builds**: CI/CD handles build and deploy. Never run `npm run build` locally.
5. **No `<NuxtImg>` for hero images**: IPX optimization URLs don't resolve on Firebase Hosting. Use native `<img>` for critical above-the-fold images.
6. **Avatar fallback pattern**: Firebase Storage tokens expire. Always provide CSS fallback for external image URLs.
7. **No `queryCollectionItemSurroundings`**: Returns alphabetical order, not date order. Use custom `.order('date', 'DESC')` query instead.

## Manual Maintenance Required

When adding a new blog article:
1. Create markdown file in `packages/ui-alquilatucarro/content/blog/`
2. Add article to `public/rss.xml` (maintain date-descending order, update `lastBuildDate`)
3. Add URL to `nuxt.config.ts` → `sitemap.urls` array
4. Add URL to `nuxt.config.ts` → `prerender.routes` array

## Production Verification (2026-01-31)

- **RSS**: `/rss.xml` → 200, valid XML, 7 articles, 4,458 bytes
- **Sitemap**: `/sitemap.xml` → 200, 30 total URLs, 8 blog URLs (index + 7 articles)
- **All blog pages**: Rendering correctly with all 16 improvements

## Next Actions

- Merge PR #122 and verify fixes in production
- Write new blog articles per `docs/seo/estrategia/BLOG-CONTENT-PLAN.md` (15 articles, Tiers 1-4)
- Monitor Google Search Console for blog indexing
- Submit sitemap to Google if not auto-discovered
- Replace Firebase Storage avatar URL with a local file (long-term fix for expired tokens)

## Economic Decisions

- No paid tools for SEO monitoring (use free tiers)
- Static files over serverless functions where possible (lower cost, faster)

## Branch State

- **main**: Clean, up to date through PR #121
- **fix/blog-audit-bugs**: PR #122 open, pending merge
- All older feature branches deleted after merge
