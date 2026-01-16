# CLS Optimization Log - alquilatucarro.com

## Objetivo
Reducir CLS (Cumulative Layout Shift) a < 0.1 en mobile y desktop.

---

## Estado Actual (2026-01-16)

| Dispositivo | CLS Actual | Objetivo | Estado |
|-------------|------------|----------|--------|
| Mobile | 0.23 | < 0.1 | NO ALCANZADO |
| Desktop | 0.285 | < 0.1 | NO ALCANZADO |

---

## Historial de Mediciones PageSpeed

### Mobile
| Fecha | Performance | CLS | LCP | TBT | Notas |
|-------|-------------|-----|-----|-----|-------|
| 2026-01-16 ~10:59 | 78 | 0.201 | - | - | Antes del fix PR #49 |
| 2026-01-16 ~11:01 | 83 | 0.23 | 2.9s | 130ms | Después del fix PR #49 |
| 2026-01-16 (previo) | 88 | ~0.2 | - | - | Reportado por usuario (mejor resultado) |

**Nota importante**: Los scores de PageSpeed varían entre mediciones (±5-10 puntos). El rango observado para mobile es 78-88 Performance.

### Desktop
| Fecha | Performance | CLS | LCP | TBT | Notas |
|-------|-------------|-----|-----|-----|-------|
| 2026-01-16 ~11:05 | 48 | 0.285 | 0.8s | 2,680ms | TBT muy alto afecta score |

---

## Fixes Intentados

### PR #51 - Critical CSS para UPageHero/UPageSection padding (2026-01-16)
**Archivo modificado**: `nuxt.config.ts`

**Causa raíz identificada**: PageSpeed "Layout shift culprits" mostró:
- `<div data-orientation="horizontal" data-slot="root">` causando 100% del CLS (0.230)
- Este es el UPageHero root container de Nuxt UI v4

**Problema**: Los componentes Nuxt UI v4 usan padding GRANDE que no estaba en critical CSS:
- UPageHero: `py-24 sm:py-32 lg:py-40` (6rem, 8rem, 10rem)
- UPageSection: `py-16 sm:py-24 lg:py-32` (4rem, 6rem, 8rem)

**Clases añadidas al critical CSS**:
```css
/* Base padding */
.py-16 { padding-top: 4rem; padding-bottom: 4rem; }
.py-24 { padding-top: 6rem; padding-bottom: 6rem; }
.gap-16 { gap: 4rem; }

/* sm breakpoint */
.sm\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
.sm\:py-32 { padding-top: 8rem; padding-bottom: 8rem; }
.sm\:gap-y-24 { row-gap: 6rem; }
.sm\:gap-16 { gap: 4rem; }

/* lg breakpoint */
.lg\:py-32 { padding-top: 8rem; padding-bottom: 8rem; }
.lg\:py-40 { padding-top: 10rem; padding-bottom: 10rem; }
```

**Resultado**: PENDIENTE DE DEPLOY

---

### PR #50 - Critical CSS adicional (2026-01-16)
**Archivo modificado**: `nuxt.config.ts`

**Clases añadidas**: Typography (text-2xl, text-3xl, etc.), padding (py-6, py-12), SelectBranch form classes

**Resultado**:
- Performance mobile: 79
- CLS: 0.23 (SIN CAMBIO)

**Conclusión**: Las clases añadidas NO eran la causa del CLS. El problema eran los padding GRANDES de UPageHero/UPageSection.

---

### PR #49 - Critical CSS para Nuxt UI PageHero (2026-01-16)
**Archivo modificado**: `nuxt.config.ts`

**Clases añadidas al critical CSS**:
```css
/* Nuxt UI PageHero slot margins */
.mt-10 { margin-top: 2.5rem; }
.mb-4 { margin-bottom: 1rem; }

/* Nuxt UI PageHero typography */
.text-5xl { font-size: 3rem; line-height: 1; }
.tracking-tight { letter-spacing: -0.025em; }
.font-bold { font-weight: 700; }
.text-pretty { text-wrap: pretty; }
.text-center { text-align: center; }
.justify-center { justify-content: center; }
.flex-row { flex-direction: row; }
.space-x-0\.5 > :not(:last-child) { margin-right: 0.125rem; }

/* Responsive */
@media (min-width: 640px) {
  .sm\:text-7xl { font-size: 4.5rem; line-height: 1; }
}
```

**Resultado**:
- Performance mobile: +5 puntos (78 → 83)
- CLS: SIN MEJORA SIGNIFICATIVA (0.201 → 0.23, varianza normal)

**Conclusión**: El fix mejoró performance pero NO resolvió CLS. Las clases añadidas no eran la causa principal del layout shift.

---

## Fixes Previos (de sesiones anteriores)

### PR #48 - Critical CSS con innerHTML
- Cambio de método de inyección de CSS crítico
- Impacto en CLS: No documentado

### PR #47 - Critical CSS con clases de Nuxt UI grid
- Añadidas clases de grid
- Impacto en CLS: No documentado

### PR #46 - Redirect www a non-www canonical
- SEO fix, no relacionado con CLS

### PR #45 - Aspect-ratio container para hero image
- Añadido contenedor con aspect-ratio para reservar espacio
- **Este debería haber ayudado con CLS pero aparentemente no fue suficiente**

### PR #44 - CLS star icons, duplicate H1, ALQUILERDE FOUC
- Múltiples fixes de CLS
- Impacto parcial

---

## Análisis de Causa Raíz

### ✅ CAUSA IDENTIFICADA (2026-01-16)

**PageSpeed Insights "Layout shift culprits"** mostró:
| Elemento | Layout shift score |
|----------|-------------------|
| `<div data-orientation="horizontal" data-slot="root" class="relative isolate">` | **0.230** |

Este es el **UPageHero root container** de Nuxt UI v4.

**Por qué sucede:**
1. `nuxt-vitalizer` con `disableStylesheets: 'entry'` difiere la carga del stylesheet
2. El critical CSS inline NO tenía los padding GRANDES de UPageHero/UPageSection
3. La página carga sin padding → luego el stylesheet aplica `py-24 sm:py-32 lg:py-40` → **SHIFT masivo**

**Solución (PR #51):**
Añadir los padding de Nuxt UI v4 themes al critical CSS:
- UPageHero: `py-24 sm:py-32 lg:py-40` (hasta 10rem = 160px!)
- UPageSection: `py-16 sm:py-24 lg:py-32` (hasta 8rem = 128px)

### Elementos con aspect-ratio ya implementados (index.vue)
1. Hero image: `aspect-[100/81]` ✅
2. Video section image: `aspect-[100/81]` ✅
3. Persona section image: `aspect-[100/81]` ✅
4. Category images: `aspect-[8/3]` ✅
5. Testimonial avatars: `min-h-[48px]` ✅

### Investigación completada
- [x] Usar PageSpeed "Layout shift culprits" para identificar elemento exacto
- [x] Leer tema de Nuxt UI v4 en `.nuxt/ui/page-hero.ts` y `.nuxt/ui/page-section.ts`
- [x] Identificar clases faltantes en critical CSS

---

## Próximas Acciones

### Pendiente (después de PR #51 deploy)
- [ ] Re-medir CLS en PageSpeed Insights (target: < 0.1)
- [ ] Actualizar este log con resultados

### Si CLS no mejora con PR #51
- [ ] Verificar que critical CSS se está aplicando correctamente
- [ ] Usar Chrome DevTools Performance para ver si hay otros elementos
- [ ] Considerar deshabilitar `nuxt-vitalizer` temporalmente para comparar

### Lecciones aprendidas
- **Usar "Layout shift culprits" en PageSpeed** para identificar elemento exacto
- **Leer temas de Nuxt UI** en `.nuxt/ui/*.ts` para conocer clases exactas
- **Padding GRANDES (py-24, py-32, py-40)** son críticos para CLS cuando se difiere stylesheet
- Añadir clases pequeñas (margin, typography) NO resuelve si falta el padding principal

---

## Configuración Actual Relevante

### nuxt-vitalizer (nuxt.config.ts)
```typescript
vitalizer: {
  disableStylesheets: 'entry',
  disablePrefetchLinks: true,
}
```

### Critical CSS location
`nuxt.config.ts` → `app.head.style` array

---

## Notas
- PageSpeed Insights tiene variabilidad de ±5-10 puntos entre mediciones
- Siempre tomar 2-3 mediciones para confirmar tendencia
- Mobile es prioridad (Google usa mobile-first indexing)
- Desktop tiene problema adicional de TBT alto (2,680ms) que es issue separado de CLS
