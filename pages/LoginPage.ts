// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // Declaración de propiedades para la página y los elementos
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Asignación de selectores (usando IDs)
    this.usernameInput = page.locator('#user-name'); // [cite: 65]
    this.passwordInput = page.locator('#password'); // [cite: 66]
    this.loginButton = page.locator('#login-button'); // [cite: 67]
  }

  // Función para navegar a la URL
  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/index.html'); // [cite: 68]
  }

  // Función para realizar el login
  async login(username: string, password: string) {
    await this.usernameInput.fill(username); // [cite: 70]
    await this.passwordInput.fill(password); // [cite: 71]
    await this.loginButton.click(); // [cite: 72]
  }
}