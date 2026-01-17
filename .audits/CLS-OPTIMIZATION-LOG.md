# CLS Optimization Log - alquilatucarro.com

## Objetivo
Reducir CLS (Cumulative Layout Shift) a < 0.1 en mobile y desktop.

---

## Estado Actual (2026-01-16 - Después de PR #55 TEST sin imagen hero)

| Dispositivo | CLS Actual | CLS Anterior | Objetivo | Estado |
|-------------|------------|--------------|----------|--------|
| Mobile | **0** | 0.208 | < 0.1 | ✅ **ALCANZADO** (con vitalizer deshabilitado) |
| Desktop | **0** | 0.285 | < 0.1 | ✅ **ALCANZADO** (con vitalizer deshabilitado) |

### 🌟 RESULTADO EXCELENTE EN DESKTOP (PR #54)
- **Performance Desktop: 99** (antes era 48)
- **CLS Desktop: 0** (antes era 0.285)
- Este resultado es EXCELENTE y debe preservarse en futuros cambios

### ⚠️ IMPORTANTE: PR #54 es un TEST
PR #54 deshabilita `nuxt-vitalizer` stylesheet deferral. Esto **ELIMINA el CLS** pero **EMPEORA FCP/LCP en mobile**.
El fix final debe ser añadir más critical CSS, NO deshabilitar vitalizer.

---

## Test PR #55 - Sin Imagen Hero (2026-01-16 ~19:49)

**Objetivo**: Determinar si la imagen hero es la causa del LCP lento en mobile.

**Cambio realizado**: Comentado `<ImagesFamily />` en `app/pages/index.vue`, dejando solo el contenedor con `bg-neutral-700`.

### Resultados Comparativos

| Métrica | Mobile CON img (PR #54) | Mobile SIN img (PR #55) | Desktop CON img (PR #54) | Desktop SIN img (PR #55) |
|---------|-------------------------|-------------------------|--------------------------|--------------------------|
| **Performance** | 65 | **81** (+16) | **99** | 86 (-13) |
| FCP | 2.9s | 2.9s | ~0.5s | 0.6s |
| LCP | 3.6s | 3.8s (+0.2s) | ~0.8s | 1.2s (+0.4s) |
| TBT | 30ms | 100ms (+70ms) | ~20ms | 290ms (+270ms) |
| CLS | 0 | 0 | 0 | 0 |
| Speed Index | - | 4.6s | - | 0.8s |

### Conclusiones del Test

1. **❌ La imagen hero NO es el cuello de botella del LCP en mobile**
   - LCP empeoró de 3.6s a 3.8s SIN la imagen
   - Esto significa que el elemento LCP cambió a otro componente (probablemente texto)

2. **❌ Quitar la imagen PERJUDICA Desktop severamente**
   - Performance cayó de 99 a 86 (-13 puntos)
   - LCP empeoró de ~0.8s a 1.2s
   - TBT empeoró de ~20ms a 290ms

3. **✅ Mobile Performance subió +16 puntos**
   - Pero esto es por mejora en Speed Index, no en LCP
   - El Speed Index mejoró porque hay menos contenido que pintar

4. **Decisión: RESTAURAR la imagen hero**
   - La imagen no es el problema
   - El problema de LCP está en otra parte (CSS blocking, JS, o render delay)

### Próximos pasos para mejorar Mobile FCP/LCP
- [x] Investigar CSS render-blocking (470ms según PageSpeed) → **450ms de entry.css (96KB)**
- [ ] Optimizar hydration de Vue/Nuxt
- [ ] Considerar prerender del hero content
- [x] Analizar el "Element render delay: 1,890ms" que mostró PageSpeed → **CAUSA ENCONTRADA**

---

## 🎯 PRÓXIMA ACCIÓN (2026-01-17) - Optimizar LCP Mobile

### Diagnóstico Completado (2026-01-16 ~20:15)

**Métricas actuales (con imagen hero restaurada):**
- Performance: 85
- FCP: 2.7s
- LCP: 3.7s
- TBT: 70ms ✅
- CLS: 0 ✅

**Causas del LCP lento identificadas:**

| Problema | Impacto | Causa Raíz |
|----------|---------|------------|
| **Element render delay** | 1,360ms | Nuxt Islands (`.server.vue`) |
| **CSS render-blocking** | 2,400ms | `entry.css` de 96KB |

### SOLUCIÓN LISTA PARA IMPLEMENTAR

**Convertir Hero components de `.server.vue` a `.vue` normal:**

Los 3 componentes Hero son 100% estáticos (sin props, sin API calls, sin datos dinámicos):

```
app/components/Hero/
├── Description.server.vue  →  Description.vue
├── Title.server.vue        →  Title.vue
└── Headline.server.vue     →  Headline.vue
```

**Contenido de cada archivo (no cambia, solo el nombre):**
- `Description.vue`: Párrafo "Contamos con 27 sedes..."
- `Title.vue`: "ALQUILER DE CARROS EN COLOMBIA"
- `Headline.vue`: 5 estrellas SVG + "4.9 reviews"

**Impacto esperado:**
- Eliminar ~1,360ms de Element render delay
- El contenido del Hero estará en el HTML inicial
- LCP debería bajar de 3.7s a ~2.3s

### Comandos para ejecutar mañana:

```bash
cd "C:/CLAUDE Proyectos diego/rentacar/worktree-seo-alquilatucarro/app/components/Hero"
mv Description.server.vue Description.vue
mv Title.server.vue Title.vue
mv Headline.server.vue Headline.vue
```

Luego crear commit, push, y medir en PageSpeed.

---

## Historial de Mediciones PageSpeed

### Mobile
| Fecha | Performance | CLS | LCP | TBT | Notas |
|-------|-------------|-----|-----|-----|-------|
| 2026-01-16 ~19:03 | 82 | **0** | 3.6s | 30ms | **PR #54 TEST** - vitalizer DESHABILITADO |
| 2026-01-16 ~16:38 | **82** | **0.208** | 3.2s | 110ms | **Después de PR #53** - fix star rating text |
| 2026-01-16 ~15:42 | 80 | 0.21 | 3.2s | 110ms | Después de PR #52 - fix !important |
| 2026-01-16 ~10:59 | 78 | 0.201 | - | - | Antes del fix PR #49 |
| 2026-01-16 ~11:01 | 83 | 0.23 | 2.9s | 130ms | Después del fix PR #49 |
| 2026-01-16 (previo) | 88 | ~0.2 | - | - | Reportado por usuario (mejor resultado) |

**Nota importante**: Los scores de PageSpeed varían entre mediciones (±5-10 puntos). El rango observado para mobile es 78-88 Performance.

### Desktop
| Fecha | Performance | CLS | LCP | TBT | Notas |
|-------|-------------|-----|-----|-----|-------|
| 2026-01-16 ~19:03 | **99** | **0** | - | - | **PR #54 TEST** - vitalizer DESHABILITADO ⭐ PRESERVAR |
| 2026-01-16 ~11:05 | 48 | 0.285 | 0.8s | 2,680ms | TBT muy alto afecta score |

### ⚠️ REGLA PARA FUTUROS CAMBIOS
**Desktop alcanzó 99 Performance con CLS 0**. Los futuros cambios DEBEN:
1. Mantener Desktop Performance ≥ 95
2. Mantener Desktop CLS = 0
3. No reintroducir el TBT alto (2,680ms) que teníamos antes

---

## Fixes Intentados

### PR #52 - Critical CSS para reglas !important de base.css (2026-01-16)
**Archivo modificado**: `nuxt.config.ts`

**Causa raíz REAL identificada**:
El archivo `app/assets/css/rentacar-main/base.css` tiene reglas con **alta especificidad + !important** que sobrescriben el padding-top del hero:

```css
/* Líneas 93-102 en base.css */
[data-slot="root"].relative.isolate:not(section[id]) [data-slot="container"] {
    padding-top: 1rem !important;
}
@media (min-width: 1024px) {
    [data-slot="root"].relative.isolate:not(section[id]) [data-slot="container"] {
        padding-top: 2rem !important;
    }
}
```

**Por qué causa CLS**:
1. Critical CSS aplicaba `lg:py-24` → padding-top: 6rem (96px)
2. Stylesheet diferido (base.css) carga y aplica `padding-top: 2rem !important` (32px)
3. La diferencia de **64px** en padding-top causa layout shift masivo

**Solución**:
Añadir las mismas reglas `!important` al critical CSS para que el padding sea consistente desde el primer render.

**Clases añadidas al critical CSS**:
```css
/* Hero padding override (matches base.css) */
[data-slot="root"].relative.isolate:not(section[id]) [data-slot="container"] {
  padding-top: 1rem !important;
}
@media (min-width: 1024px) {
  [data-slot="root"].relative.isolate:not(section[id]) [data-slot="container"] {
    padding-top: 2rem !important;
  }
}
/* City Page hero padding */
.hero-section div[class*="max-w-"][class*="mx-auto"] {
  padding-top: 2rem !important;
  padding-bottom: 1rem !important;
}
@media (min-width: 1024px) {
  .hero-section div[class*="max-w-"][class*="mx-auto"] {
    padding-top: 3rem !important;
    padding-bottom: 1.5rem !important;
  }
}
```

**Resultado (después de deploy)**:
- Performance mobile: 80
- CLS: **0.21** (mejoró de 0.23, pero sigue arriba de 0.1)
- TBT: 110ms (mejoró de 130ms)
- LCP: 3.2s

**Análisis post-deploy**:
- ✅ Las reglas !important están presentes en critical CSS (verificado con JS)
- ⚠️ Layout shift culprit sigue siendo el mismo elemento: `<div data-slot="root" class="relative isolate">`
- El fix redujo CLS de 0.23 → 0.21, pero hay OTRA causa de CLS restante

**Posibles causas del CLS restante (0.21)**:
1. ~~Font loading causando text reflow~~ - DESCARTADO: sitio usa system fonts
2. Otros estilos CSS que cambian entre critical CSS y stylesheet diferido
3. Vue hydration re-rendering contenido
4. Elementos dentro del hero que cambian dimensiones

---

### PR #53 - Critical CSS para star rating text (2026-01-16)
**Archivo modificado**: `nuxt.config.ts`

**Problema identificado**:
El componente `Hero/Headline.server.vue` (Nuxt Islands) tiene clases de texto que NO estaban en critical CSS:

```vue
<template>
  <div class="flex flex-row items-center justify-center space-x-0.5 text-white text-center">
    <svg v-for="i in 5" class="w-2.5 h-2.5 md:w-4 md:h-4" .../>
    <span class="ml-2 text-xs md:text-base">4.9 reviews</span>
  </div>
</template>
```

**Clases faltantes identificadas**:
- `ml-2` - margin-left: 0.5rem (afecta posición del texto "4.9 reviews")
- `text-xs` - font-size: 0.75rem; line-height: 1rem
- `md:text-base` - font-size: 1rem; line-height: 1.5rem

**Por qué causa CLS**:
1. Sin `ml-2`: texto de reviews no tiene margen
2. Stylesheet diferido aplica `ml-2`: añade 8px de margin-left
3. Sin `text-xs`: texto usa tamaño default
4. Stylesheet diferido aplica `text-xs`: cambia tamaño de fuente

**Clases añadidas al critical CSS**:
```css
/* Star rating text - CRÍTICO para CLS */
.ml-2 { margin-left: 0.5rem; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
@media (min-width: 768px) {
  .md\:text-base { font-size: 1rem; line-height: 1.5rem; }
}
```

**Resultado (después de deploy)**:
- Performance mobile: 82 (+2 puntos)
- CLS: **0.208** (mejoró de 0.21, pero sigue arriba de 0.1)
- TBT: 110ms (sin cambio)
- LCP: 3.2s (sin cambio)

**Análisis post-deploy**:
- ✅ Las clases de star rating están presentes en critical CSS (verificado con JS)
- ⚠️ El fix tuvo impacto MÍNIMO (0.21 → 0.208 = -0.002)
- La causa principal del CLS restante NO es el star rating text

**Conclusión**: El fix del star rating text ayuda pero NO es la causa principal del CLS ~0.2 restante.

---

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

### Estado Actual (después de PR #53)
- [x] Re-medir CLS en PageSpeed Insights → **0.208** (mejoró de 0.21)
- [x] Actualizar este log con resultados

### HALLAZGO CRÍTICO (2026-01-16 ~16:38)
PageSpeed "Layout shift culprits" muestra que **100% del CLS** (0.208) viene de UN SOLO elemento:
```
Element: <div data-orientation="horizontal" data-slot="root" class="relative isolate">
Layout shift score: 0.208
```

Esto es el **UPageHero root container** - el mismo elemento que venimos trabajando.

**Conclusión**: A pesar de todos los fixes de critical CSS (PR #49-53), el UPageHero sigue causando todo el CLS. Las clases añadidas al critical CSS NO son suficientes.

### Hipótesis para el CLS restante (0.208)
1. **Vue hydration** - El contenido del hero puede estar re-renderizándose durante hydration
2. **Nuxt Islands** - El componente `HeroHeadline.server.vue` se carga de forma asíncrona
3. **Estilos inline vs computed** - Puede haber estilos que se calculan en runtime
4. **CSS custom properties** - Nuxt UI usa variables CSS que pueden cambiar
5. **Transiciones CSS** - Puede haber transiciones que causan el shift

### Próximos pasos sugeridos
- [ ] Probar deshabilitar `nuxt-vitalizer` temporalmente para comparar CLS
- [ ] Usar Chrome DevTools Performance para grabar el layout shift exacto
- [ ] Investigar si Nuxt Islands (`*.server.vue`) causa CLS durante carga
- [ ] Revisar si hay CSS custom properties que cambian en runtime
- [ ] Considerar prerender del hero content para eliminar hydration shift

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

---

## 🔖 CHECKPOINTS - Puntos de Control

Sistema para revertir a configuraciones conocidas si un cambio empeora las métricas.

### Checkpoint #1 - PR #54 (Desktop Excelente) ⭐ MEJOR DESKTOP
**Fecha**: 2026-01-16
**Commit**: `f9701c4` (vitalizer deshabilitado)
**Cómo revertir**: `git checkout f9701c4 -- nuxt.config.ts`

| Métrica | Mobile | Desktop |
|---------|--------|---------|
| Performance | 65 | **99** |
| CLS | **0** | **0** |
| LCP | 3.6s | ~0.8s |
| TBT | 30ms | ~20ms |

**Pros**: CLS=0 en ambos, Desktop perfecto
**Contras**: Mobile LCP lento (3.6s)

---

### Checkpoint #2 - Antes de .server.vue change (2026-01-17)
**Commit**: `44de1f5` (hero image restaurada)
**Cómo revertir**: `git checkout 44de1f5 -- app/components/Hero/`

| Métrica | Mobile | Desktop |
|---------|--------|---------|
| Performance | ~85 | ~99 |
| CLS | 0 | 0 |
| LCP | 3.7s | ~0.8s |

**Estado**: Baseline antes de eliminar Nuxt Islands

---

### 🎯 OBJETIVO: Checkpoint #3 - Después de .server.vue → .vue
**Fecha**: 2026-01-17 (pendiente)
**Cambio**: Convertir Hero/*.server.vue a *.vue para eliminar render delay

**Expectativa**:
- LCP Mobile: 3.7s → ~2.3s (-1.4s)
- CLS: mantener 0
- Desktop: mantener ≥95
