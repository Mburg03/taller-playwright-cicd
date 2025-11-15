import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js'; // Importación corregida con .js
import { ProductsPage } from '../pages/ProductsPage.js'; // Importación corregida con .js

test('Login exitoso en SauceDemo con POM', async ({ page }) => {
  // Inicializar las Page Classes
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // 1. Navegar a la página de login
  await loginPage.goto();

  // 2. Realizar el login con credenciales válidas (standard_user, secret_sauce)
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Verificar que estamos en la página de productos (esperando el selector)
  await productsPage.verifyIsOnProductsPage();

  // 4. Aserción final: verificar que el título de la página es "Products"
  await expect(productsPage.title).toHaveText('Products');
});