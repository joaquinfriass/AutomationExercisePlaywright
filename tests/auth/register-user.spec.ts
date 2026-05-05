import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Test Case 1: Register User', () => {
  test('Flujo registro de usuario', async ({ page }) => {

    const homePage = new HomePage(page);

    test.step('Navigate to the home page', async () => {
    await homePage.navigate();
    await homePage.verifyHomePage();
    });
  });
});
