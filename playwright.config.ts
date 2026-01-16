import { defineConfig, devices } from '@playwright/test';

/**
 * Configuración de Playwright para pruebas E2E
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',

  // Tiempo máximo de ejecución de una prueba (aumentado para Nuxt)
  timeout: 60 * 1000,

  // Número de reintentos ante fallos
  // 1 retry en local para manejar timeouts intermitentes en cold start
  retries: process.env.CI ? 2 : 1,

  // Ejecutar pruebas en paralelo
  workers: process.env.CI ? 1 : undefined,

  // Reporter para los resultados
  reporter: [
    ['html', { outputFolder: 'e2e-results' }],
    ['list']
  ],

  use: {
    // URL base para las pruebas
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',

    // Capturar trazas al fallar
    trace: 'on-first-retry',

    // Capturar screenshots al fallar
    screenshot: 'only-on-failure',

    // Capturar video al fallar
    video: 'retain-on-failure',

    // Timeout de navegación aumentado para Nuxt SSR en WSL2
    // 45s permite cold start + competencia de recursos en pruebas paralelas
    navigationTimeout: 45 * 1000,

    // Timeout de acción aumentado
    actionTimeout: 20 * 1000,
  },

  // Configuración de proyectos para diferentes navegadores
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Pruebas móviles
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Servidor de desarrollo
  webServer: {
    command: 'pnpm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180 * 1000, // 3 minutos para Nuxt en WSL
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
