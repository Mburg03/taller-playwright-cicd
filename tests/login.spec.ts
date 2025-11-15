// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Importar la clase LoginPage [cite: 93]
import { ProductsPage } from '../pages/ProductsPage'; // Importar la clase ProductsPage [cite: 94]

test('Login exitoso en SauceDemo con POM', async ({ page }) => { // [cite: 95]
  // Inicializar las Page Classes [cite: 96, 97]
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // 1. Navegar a la página de login
  await loginPage.goto(); // [cite: 99]

  // 2. Realizar el login con credenciales válidas
  await loginPage.login('standard_user', 'secret_sauce'); // [cite: 100]

  // 3. Verificar que estamos en la página de productos
  await productsPage.verifyIsOnProductsPage(); // [cite: 104]

  // 4. Verificación de texto explícita
  await expect(productsPage.title).toHaveText('Products'); // [cite: 107]
});