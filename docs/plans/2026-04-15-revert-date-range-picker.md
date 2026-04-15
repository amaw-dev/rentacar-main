# Revert Date Range Picker — Plan de Reversa

**Fecha:** 2026-04-15
**Directiva:** El widget unificado de rango de fechas en la búsqueda de vehículos ha sido declarado un fracaso. Reversar al estado previo (dos inputs de fecha separados: recogida y devolución).

**Origen del feature:** PR #150 (merge `89c3bc9`, 2026-02-09) — `docs/plans/2026-02-06-date-range-picker-{design,implementation}.md`.

## Decisiones validadas (brainstorming 2026-04-15)

| # | Decisión | Razón |
|---|----------|-------|
| 1 | `git revert` secuencial de los 3 commits | Historia auditable; cada commit del PR mapea 1:1 a un feature/fix invertido |
| 2 | Preservar design docs con banner de reversa | Valor histórico — registro de qué se intentó y por qué se reversó |
| 3 | Un solo PR para las 3 marcas | Simétrico al PR original #150; evita inconsistencia entre marcas |
| 4 | Full QA en `ui-alquilatucarro` + smoke en las otras 2 | Las 3 marcas tienen `Searcher.vue` replicado con diff idéntico tras el revert; smoke detecta inconsistencias raras sin gastar tiempo en validar lo mismo 3 veces |
| + | Sin consumidores externos de las APIs del feature → revert autocontenido (verificado vía grep) |
| + | Sin PRs abiertos → sin riesgo de conflicto pendiente (verificado vía `gh pr list`) |
| + | Rama destino: `revert/date-range-picker` desde `main` actualizado |

---

## Contexto y Descubrimiento

### Commits a reversar (orden inverso)

| Orden | SHA | Tipo | Descripción |
|-------|-----|------|-------------|
| 1 | `9d8d2e9` | PR #167 squash | fix(calendar): enforce 30-day max range via synchronous computed |
| 2 | `6489d99` | PR #165 squash | fix(ux): always auto-close date picker popover on complete range selection |
| 3 | `89c3bc9` | PR #150 merge | feat(searcher): unified date-range picker with URL synchronization |

Orden obligatorio: 1 → 2 → 3 (del más reciente al más antiguo) para minimizar conflictos.

### Estado pre-feature (target)

Commit inmediatamente previo al merge del feature: `2db78e8` (Merge PR #149 blog-rutas-desde-medellin).
- `packages/ui-alquilatucarro/app/components/Searcher.vue` → 395 líneas (actual: 509).
- Template con **inputs separados pickup/return** (dos `u-input-date` + calendars independientes en desktop, dos `input type="date"` en móvil).
- Variables `pickupDateCalendarOpen`, `returnDateCalendarOpen` en lugar de `dateRangePopoverOpen`.

### Verificación: no hay commits intermedios bloqueantes

```bash
git log --oneline 89c3bc9..HEAD -- packages/ui-alquilatucarro/app/components/Searcher.vue
# Resultado: solo 9d8d2e9 y 6489d99 (ambos a reversar) — SIN otros commits intermedios.
```

Esto permite reversa limpia con `git revert`. Si aparecieran conflictos, documentar y resolver manualmente restaurando el estado de `2db78e8`.

### Archivos impactados por el merge original

```
docs/plans/2026-02-06-date-range-picker-design.md          (nuevo)
docs/plans/2026-02-06-date-range-picker-implementation.md  (nuevo)
e2e/date-range-picker.spec.ts                              (nuevo — 109 líneas)
packages/ui-alquicarros/app/assets/css/rentacar-main/base.css    (+58 líneas)
packages/ui-alquicarros/app/components/Placeholders/Searcher.vue (~9 líneas)
packages/ui-alquicarros/app/components/Searcher.vue              (+384 líneas)
packages/ui-alquicarros/tests/utils/date-conversion.spec.ts      (nuevo — 141 líneas)
packages/ui-alquicarros/vitest.config.ts                         (nuevo — 15 líneas)
packages/ui-alquilame/* (mismos 5 archivos)
packages/ui-alquilatucarro/* (mismos 5 archivos, base.css +14 líneas)
```

---

## Escenarios Observables (Definition of Done)

1. **Desktop — dos campos separados visibles:** Al abrir `/`, el bloque "Período de alquiler" desaparece; aparecen "Día de recogida" y "Día de devolución" como campos independientes, cada uno con su propio calendario/popover.
2. **Móvil — dos inputs nativos separados:** En viewport <640px, inputs `type="date"` nativos uno para recogida y otro para devolución.
3. **URL params retro-compatibles:** URLs existentes con `fecha-recogida/YYYY-MM-DD/fecha-devolucion/YYYY-MM-DD/` siguen hidratando los campos correctamente (los stores `selectedPickupDate` / `selectedReturnDate` ya existían pre-feature).
4. **Búsqueda funcional:** Seleccionar fechas → click buscar → navega a resultados (sin regresiones).
5. **Cero referencias residuales al feature eliminado:**
   ```bash
   grep -rn "dateRange\|MAX_RENTAL_DAYS\|dateRangePopoverOpen\|formatDateRange\|stringToCalendarDate" packages/
   # Resultado esperado: sin coincidencias en app/components/
   ```
6. **Build y tests verdes:**
   - `pnpm build` (o `npm run build`) — éxito en las 3 marcas.
   - `pnpm test` unitarios — sin referencias rotas a `date-conversion.spec.ts`.
   - `npx playwright test e2e/` — `date-range-picker.spec.ts` ya no existe; resto pasa.
7. **Consistencia en las 3 marcas:** ui-alquicarros, ui-alquilame, ui-alquilatucarro tienen el mismo diff revertido (no sólo una).
8. **Documentación coherente:** Los design docs del feature quedan archivados (no borrados — preservan historia), con nota visible al inicio: "REVERSADO el 2026-04-15 — ver `2026-04-15-revert-date-range-picker.md`".

---

## Estrategia

**Decisión: `git revert` de los 3 commits** (vs. restauración manual desde `2db78e8`).

**Razón:**
- Los commits son atómicos y contenidos (no hay commits intermedios tocando los Searcher.vue).
- Git conoce exactamente el diff a invertir — menor riesgo de dejar residuos o introducir divergencias entre marcas.
- Preserva historia: queda auditable qué se revirtió y cuándo.
- Si aparece conflicto en los reverts, indica que el estado actual divergió de lo esperado → oportunidad de inspeccionar antes de forzar.

**Alternativa rechazada:** `git checkout 2db78e8 -- <archivos>` es más simple pero no maneja bien los commits posteriores (perdería `9d8d2e9` y `6489d99` sin dejar rastro claro en el log).

**Rama destino:** `revert/date-range-picker` (nueva rama desde `main` actualizado).

---

## Tasks

> **Para Claude:** REQUIRED: usar `superpowers:executing-plans` para ejecutar tarea por tarea con checkpoints.

### Task 1 — Preparar rama

**Pasos:**
```bash
git checkout main
git pull origin main
git checkout -b revert/date-range-picker
git status   # working tree clean
```

**Verificación:**
- Rama creada desde HEAD de main actualizado.
- `git log --oneline -n 3` muestra commits recientes de main.

---

### Task 2 — Revert `9d8d2e9` (30-day max range fix)

**Pasos:**
```bash
git revert --no-edit 9d8d2e9
```

**Verificación:**
- Commit creado: `Revert "fix(calendar): enforce 30-day max range..."`.
- `git diff HEAD~1 HEAD` muestra diff inverso del fix.
- Sin conflictos. Si los hay → detener, inspeccionar, documentar.

---

### Task 3 — Revert `6489d99` (auto-close fix)

**Pasos:**
```bash
git revert --no-edit 6489d99
```

**Verificación:**
- Commit creado.
- `grep -rn "wasEmpty" packages/*/app/components/Searcher.vue` → debe RE-aparecer (restaurando comportamiento previo).

---

### Task 4 — Revert merge `89c3bc9` (feat date-range picker)

**Pasos:**
```bash
# Merge commit requiere -m 1 (parent 1 = main antes del merge)
git revert -m 1 --no-edit 89c3bc9
```

**Verificación:**
- Commit creado: `Revert "Merge pull request #150..."`.
- Archivos esperados en el diff inverso:
  ```bash
  git show --stat HEAD | grep -E "Searcher\.vue|base\.css|date-range-picker|vitest|date-conversion"
  ```
  - 3× `Searcher.vue` → -384 líneas cada uno.
  - 3× `Placeholders/Searcher.vue` → revertido.
  - 3× `base.css` → revertido.
  - 3× `vitest.config.ts` → eliminado.
  - 3× `tests/utils/date-conversion.spec.ts` → eliminado.
  - `e2e/date-range-picker.spec.ts` → eliminado.
  - 2× `docs/plans/2026-02-06-date-range-picker-*.md` → eliminados.

**Atención a conflictos potenciales:** los design docs son archivos que se agregaron en el merge. Si `git revert -m 1` los elimina, y queremos preservarlos como histórico, manejarlo en Task 5.

---

### Task 5 — Preservar documentación histórica (opcional pero recomendado)

**Objetivo:** No borrar `docs/plans/2026-02-06-date-range-picker-*.md` — son registro de ingeniería. Reinsertar con nota de reversa.

**Pasos:**
```bash
# Recuperar docs desde el commit pre-revert
git show 9d8d2e9:docs/plans/2026-02-06-date-range-picker-design.md > docs/plans/2026-02-06-date-range-picker-design.md
git show 9d8d2e9:docs/plans/2026-02-06-date-range-picker-implementation.md > docs/plans/2026-02-06-date-range-picker-implementation.md
```

Agregar al inicio de ambos archivos un banner:

```markdown
> **⚠️ REVERSADO el 2026-04-15** — Este feature fue declarado un fracaso según directiva.
> El widget unificado de rango de fechas ha sido removido. Ver: `2026-04-15-revert-date-range-picker.md`.
> Documento conservado como registro histórico.

```

También preservar `docs/plans/2026-03-05-calendar-auto-close-fix.md` con el mismo banner (si fue eliminado por el revert de PR #165 — verificar).

**Commit:**
```bash
git add docs/plans/2026-02-06-date-range-picker-*.md docs/plans/2026-03-05-calendar-auto-close-fix.md
git commit -m "docs(plans): archive date-range picker plans with revert notice"
```

---

### Task 6 — Verificación estática (anti-residuos)

**Pasos:**
```bash
# 1. Sin referencias a APIs del feature eliminado
grep -rn "dateRange\|MAX_RENTAL_DAYS\|dateRangePopoverOpen\|formatDateRange\|stringToCalendarDate\|calendarDateToString" \
  packages/*/app/components/ packages/*/app/pages/ packages/*/app/stores/ 2>&1 | grep -v node_modules

# 2. Confirmar que las variables viejas reaparecen
grep -rn "pickupDateCalendarOpen\|returnDateCalendarOpen\|selectedPickupDate\|selectedReturnDate" \
  packages/*/app/components/Searcher.vue

# 3. Sin imports huérfanos de @internationalized/date en Searcher.vue (si ya no se usan)
grep -rn "from '@internationalized/date'" packages/*/app/components/Searcher.vue
```

**Esperado:**
- Comando 1: sin resultados en archivos de aplicación.
- Comando 2: ambas variables presentes en los 3 Searcher.vue.
- Comando 3: sin resultados (o solo en usos no relacionados al picker eliminado).

**Si hay residuos:** probablemente algún store o página importaba los helpers eliminados → corregir manualmente, commit `fix(searcher): clean up residual references after revert`.

---

### Task 7 — Verificación dinámica (runtime)

**Estrategia:** Full QA en `ui-alquilatucarro` (marca principal) + smoke test en las otras dos. Justificado porque las 3 marcas tienen `Searcher.vue` replicado con diff idéntico tras el revert.

**Pre-requisito:** levantar dev server.

```bash
pnpm dev   # o el comando que aplique
```

#### 7.1 — Full QA en `ui-alquilatucarro` con /agent-browser + /dogfood

| # | Escenario | Criterio |
|---|-----------|----------|
| 1 | Abrir `/` en desktop (>640px). Inspeccionar el Searcher | Dos campos visibles y separados: "Día de recogida" y "Día de devolución" |
| 2 | Click en "Día de recogida" | Se abre calendar independiente (no un rango) |
| 3 | Seleccionar fecha recogida | Campo recogida se llena; campo devolución no cambia |
| 4 | Click en "Día de devolución" | Se abre un segundo calendar independiente |
| 5 | Seleccionar fecha devolución posterior | Campo devolución se llena |
| 6 | Click "Buscar vehículos" | Navega a resultados sin errores de consola |
| 7 | Abrir URL existente con params `fecha-recogida/fecha-devolucion` | Campos hidratan correctamente |
| 8 | Redimensionar a móvil (<640px) | Aparecen dos inputs `type="date"` nativos separados |
| 9 | DevTools Console durante todos los escenarios | Cero errores, cero warnings rojos |

**QA exploratorio adicional con /dogfood:** click fuera del popover, fechas inválidas, cambio de ciudad mid-selección.

**Evidencia requerida:** screenshots desktop + móvil + consola limpia.

#### 7.2 — Smoke test en `ui-alquicarros` y `ui-alquilame`

Para cada marca, ejecutar sólo:

| # | Escenario smoke | Criterio |
|---|-----------------|----------|
| S1 | Abrir homepage en desktop | Dos campos separados de fecha visibles, sin errores en consola |
| S2 | Búsqueda golden path: seleccionar ciudad + fechas + buscar | Navega a resultados |

**Si smoke falla en alguna marca:** investigar drift de código vs. ui-alquilatucarro antes de continuar. No proceder al PR hasta resolver.

---

### Task 8 — Build de producción + unit tests

```bash
# Build
pnpm build

# Unit tests (si aplican después del revert)
pnpm test

# E2E tests
npx playwright test e2e/ --reporter=line
```

**Esperado:**
- Build exitoso en las 3 marcas.
- `e2e/date-range-picker.spec.ts` ya no existe → no se ejecuta (correcto).
- `e2e/searcher-mobile-label-click.spec.ts` y otros tests existentes pasan.
- Tests unitarios: `date-conversion.spec.ts` eliminados junto con `vitest.config.ts` por el revert → sin referencias rotas.

---

### Task 9 — Invocar /verification-before-completion

**Obligatorio por CLAUDE.md.** Confirmar:
- Todos los escenarios 1–8 de la sección "Escenarios Observables" tienen evidencia fresca.
- No claim de "listo" sin output reciente del dev server + screenshots.

---

### Task 10 — PR

```bash
git push -u origin revert/date-range-picker
```

Crear PR con:
- **Título:** `revert: remove unified date-range picker — restore separate pickup/return inputs`
- **Body:** incluir
  - Directiva de reversa.
  - Lista de commits revertidos (`9d8d2e9`, `6489d99`, `89c3bc9`).
  - Screenshots desktop + móvil de los 3 brandings.
  - Checklist de escenarios observables.
  - Link a este plan.
- **Requiere autorización explícita del usuario antes de `git push`.**

---

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| `git revert -m 1` del merge falla por conflictos | Documentar archivo por archivo, resolver manualmente restaurando desde `2db78e8`. NO forzar con `--strategy=ours`. |
| Código externo (stores, pages, composables) importa APIs eliminadas (`dateRange`, `formatDateRange`) | Task 6 (grep estático) detecta. Limpiar en commit separado. |
| URLs con params de fechas existentes rompen la hidratación | Los stores `selectedPickupDate`/`selectedReturnDate` son pre-feature — deberían seguir funcionando. Validar en Task 7 escenario 7. |
| Otros PRs en vuelo que dependen del feature removido | `git log --all --oneline --grep="dateRange\|date-range-picker"` antes de mergear. Coordinar. |
| Pérdida de documentación del feature original | Task 5 preserva docs con banner de reversa. |
| Las 3 marcas tienen drift post-merge | `git log 89c3bc9..HEAD -- packages/*/app/components/Searcher.vue` ya confirmó que NO hay drift. |

---

## Rollback del Rollback

Si después de mergear este revert se decide restaurar el feature:

```bash
git revert <SHA-del-merge-del-revert>
# o
git cherry-pick 89c3bc9 6489d99 9d8d2e9  # con resolución manual del merge
```

Todo el historial queda preservado.

---

## Blast Radius

- **Archivos modificados:** 16 archivos (3× Searcher.vue + 3× Placeholders/Searcher.vue + 3× base.css + 3× vitest.config.ts + 3× date-conversion.spec.ts + 1× e2e spec) + 2 docs.
- **Consumidores impactados:** cualquier página que renderice `<Searcher>` en las 3 marcas. Los stores no cambian.
- **No afecta:** lógica de búsqueda, reservas, precios, APIs backend.
- **Docs a actualizar:** README si menciona el feature; `docs/plans/` archivados con banner.
- **Variables de entorno:** ninguna.
- **Dependencies:** `@internationalized/date` seguirá usándose por Nuxt UI internamente; no es necesario `pnpm remove`.

---

## Checklist Final

- [ ] Task 1 — Rama `revert/date-range-picker` creada
- [ ] Task 2 — Revert `9d8d2e9`
- [ ] Task 3 — Revert `6489d99`
- [ ] Task 4 — Revert merge `89c3bc9`
- [ ] Task 5 — Docs archivados con banner
- [ ] Task 6 — Grep estático sin residuos
- [ ] Task 7 — Escenarios 1–9 verificados con /agent-browser
- [ ] Task 8 — Build + tests verdes
- [ ] Task 9 — /verification-before-completion ejecutado
- [ ] Task 10 — PR creado (push solo con autorización del usuario)
