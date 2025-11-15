// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directorio donde buscará las pruebas [cite: 115]
  retries: 1, // Número de reintentos en caso de fallo [cite: 116]
  use: {
    headless: true, // Ejecución sin interfaz gráfica, ideal para CI [cite: 118, 193]
    screenshot: 'only-on-failure', // Solo toma captura si la prueba falla [cite: 119]
    video: 'retain-on-failure', // Conserva el video si la prueba falla [cite: 120]
  },
});