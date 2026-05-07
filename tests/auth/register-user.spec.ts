import { test } from '../../fixtures';
import { generateUser } from '../../data/userFactory';

test.describe('Test Case 1: Register User', () => {

  // // Se cierra la página después de cada prueba para asegurar un entorno limpio para la siguiente prueba
  // test.afterEach(async ({ page }) => {
  //   await page.close();
  // });

  test('Flujo registro de usuario', async ({ homePage, loginPage, registerPage }) => {

    // Generamos un usuario único para cada prueba
    const user = generateUser();

  await test.step('Navigate login page', async () => {
    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickLoginLink();

    });

    await test.step('Verify New User Signup! is visible', async () => {
      await registerPage.verifyNewUserSignupVisible();
    });

    await test.step('Fill registration form', async () => {
      await loginPage.fillRegistrationForm(user.name, user.email);
    });

    await test.step('Verify that "ENTER ACCOUNT INFORMATION" is visible', async () => {
      await registerPage.verifyEnterAccountInformationVisible();
    });

    await test.step("Fill form with user data", async () => {
      await registerPage.fillRegistrationForm(user); 
    });

    await test.step('Click Create Account button', async () => {
      await registerPage.clickCreateAccountButton();
    });

    await test.step('Verify that "ACCOUNT CREATED!" is visible', async () => {
      await registerPage.verifyCreateAccountSuccess();
    });

    await test.step('Click Continue button', async () => {
      await registerPage.clickContinueButton();
    });

    await test.step('Verify that "Logged in as username" is visible', async () => {
      await registerPage.verifyLoggedInAsUserName(user.name);
    });


  });
});

// test.describe('Test Case 2: Register User with existing email'
//test.describe('Test Case 3: Login User with incorrect email and password'
//test.describe('Test Case 4: Login User with correct email and password'