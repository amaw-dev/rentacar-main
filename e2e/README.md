# Pruebas E2E con Playwright

Este directorio contiene las pruebas end-to-end (E2E) de la aplicación Alquilatucarro usando Playwright.

## Estado actual

✅ **61 pruebas E2E implementadas**
✅ **49 pruebas pasando** (80% de éxito)
✅ **Navegadores instalados** (Chromium, Firefox, WebKit)
✅ **Pruebas funcionando** en Chromium
⚠️ 12 pruebas con ajustes pendientes (principalmente timeouts y configuración desarrollo/producción)

## Inicio rápido

```bash
# Ejecutar todas las pruebas en Chromium
pnpm test:e2e:chromium

# Ejecutar solo pruebas de homepage
pnpm test:e2e:chromium e2e/homepage.spec.ts

# Ver interfaz visual
pnpm test:e2e:ui
```

Para más detalles de instalación, ver [INSTALL-PLAYWRIGHT.md](../INSTALL-PLAYWRIGHT.md)

## Estructura de pruebas

- **homepage.spec.ts** - Pruebas de la página principal
- **navigation.spec.ts** - Pruebas de navegación general del sitio
- **cities.spec.ts** - Pruebas de todas las páginas de ciudades
- **blog.spec.ts** - Pruebas de las páginas del blog
- **performance.spec.ts** - Pruebas de rendimiento y Core Web Vitals
- **accessibility.spec.ts** - Pruebas de accesibilidad
- **seo.spec.ts** - Pruebas de SEO y metadatos

## Ejecutar pruebas

### Ejecutar todas las pruebas
```bash
pnpm test:e2e
```

### Ejecutar con interfaz visual
```bash
pnpm test:e2e:ui
```

### Ejecutar con navegador visible (headed mode)
```bash
pnpm test:e2e:headed
```

### Ejecutar en modo debug
```bash
pnpm test:e2e:debug
```

### Ejecutar solo en Chromium
```bash
pnpm test:e2e:chromium
```

### Ver reporte de resultados
```bash
pnpm test:e2e:report
```

## Navegadores soportados

Las pruebas se ejecutan en:
- Chromium
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## Configuración

La configuración de Playwright se encuentra en [playwright.config.ts](../playwright.config.ts).

## Servidor de desarrollo

Las pruebas inician automáticamente el servidor de desarrollo de Nuxt en `http://localhost:3000`. No necesitas iniciar el servidor manualmente.

## Variables de entorno

Puedes configurar la URL base usando:
```bash
PLAYWRIGHT_BASE_URL=http://localhost:3000 pnpm test:e2e
```

## CI/CD

En entornos de CI:
- Las pruebas se ejecutan con 2 reintentos automáticos
- Se ejecutan secuencialmente (workers=1)
- Se capturan screenshots y videos de fallos

## Mejores prácticas

1. Usar selectores semánticos (roles, labels)
2. Esperar a que los elementos estén visibles antes de interactuar
3. Capturar evidencia en fallos (screenshots, traces)
4. Mantener las pruebas independientes entre sí
5. Limpiar el estado después de cada prueba
