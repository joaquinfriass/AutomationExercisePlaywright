import {test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
};

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => { await use(new HomePage(page)); },
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
    registerPage: async ({ page }, use) => { await use(new RegisterPage(page)); },
    productsPage: async ({ page }, use) => { await use(new ProductsPage(page)); },
    cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
});

export { expect } from '@playwright/test';