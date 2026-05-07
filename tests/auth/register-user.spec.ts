import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';

test.describe('Test Case 1: Register User', () => {
  test('Flujo registro de usuario', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);

  await test.step('Navigate login page', async () => {
    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickLoginLink();

    });

    await test.step('Verify New User Signup! is visible', async () => {
      await registerPage.verifyNewUserSignupVisible();
    });

    await test.step('Fill registration form', async () => {
      await loginPage.fillRegistrationForm("JoaTest", "JoaTest@example.com");
    });

    await test.step('Verify that "ENTER ACCOUNT INFORMATION" is visible', async () => {
      await registerPage.verifyEnterAccountInformationVisible();
    });

    await test.step("Fill form with user data", async () => {
      await registerPage.fillRegistrationForm("JoaTest", "Test", "12345", "10", "2", "1990", "JoaCompany", "Address1", "Address2", "United States", "State", "City", "Zipcode", "1234567890"); 
    });


  });
});
