// pages/ProductsPage.ts
import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  // Declaración de propiedades
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    // Asignación del selector del título de la página
    this.title = page.locator('.product_label'); // [cite: 78]
  }

  // Función para esperar a que el título esté visible (verificación implícita)
  async verifyIsOnProductsPage() {
    await this.title.waitFor(); // [cite: 87]
  }
}