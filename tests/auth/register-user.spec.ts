import { expect, test } from '../../fixtures';
import { generateUser } from '../../data/userFactory';
import { generateExistingUser } from '../../data/existingUserFactory';

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe('Test Case 1: Register User', () => {
  test('Should register a new user successfully', async ({ homePage, loginPage, registerPage }) => {

    // Generamos un usuario único para cada prueba
    const user = generateUser();

  await test.step('Navigate to login page', async () => {
    await homePage.navigate();
    await homePage.verifyHomePage();
    await homePage.clickLoginLink();

    });

    await test.step('Verify New User Signup! is visible', async () => {
      await expect(registerPage.newUserSignupTitle).toBeVisible();
    });

    await test.step('Fill registration form', async () => {
      await loginPage.fillRegistrationForm(user.name, user.email);
    });

    await test.step('Verify that "ENTER ACCOUNT INFORMATION" is visible', async () => {
      await expect(registerPage.enterAccountInformationTitle).toBeVisible();
    });

    await test.step("Fill form with user data", async () => {
      await registerPage.fillRegistrationForm(user); 
    });

    await test.step('Click Create Account button', async () => {
      await registerPage.clickCreateAccountButton();
    });

    await test.step('Verify that "ACCOUNT CREATED!" is visible', async () => {
      await expect(registerPage.createAccountSuccessMessage).toBeVisible();
    });

    await test.step('Click Continue button', async () => {
      await registerPage.clickContinueButton();
    });

    await test.step('Verify that "Logged in as username" is visible', async () => {
      await expect(registerPage.loggedInAsUserNameLink).toHaveText(` Logged in as ${user.name} `);
    });

        await test.step('Delete account and verify deletion', async () => {
      await registerPage.deleteAccount();
      await expect(registerPage.accountDeletedMessage).toBeVisible();
    });

  });
});

test.describe('Test Case 2: Register User with existing email', () => {
  test('Should display error message when trying to register with existing email', async ({ homePage, loginPage, registerPage }) => {
    // Implementation for this test case
    const existingUser = generateExistingUser();

    await test.step('Navigate to login page', async () => {
      await loginPage.navigate();
    });

    await test.step('Verify New User Signup! is visible', async () => {
      await expect(loginPage.newUserSignupTitle).toBeVisible();
    });

    await test.step('Fill registration form with existing email', async () => {
      await loginPage.fillRegistrationForm(existingUser.name, existingUser.email);
    });

    await test.step('Verify that error message "Email Address already exist!" is visible', async () => {
      await expect(loginPage.emailAlreadyExistErrorMessage).toBeVisible();
    });

  });
});

test.describe('Test Case 3: Login User with incorrect email and password', () => {
  test('Should display error message when trying to login with incorrect email and password', async ({ homePage, loginPage }) => {

    await test.step('Navigate to login page', async () => {
      await loginPage.navigate();
    });

    await test.step('Verify Login to your account is visible', async () => {
      await expect(loginPage.loginToYourAccountTitle).toBeVisible();
    });

    await test.step('Fill login form with incorrect email and password', async () => {
      await loginPage.fillLoginForm("incorrect@example.com", "wrongpassword");
    });

    await test.step('Verify that error message "Your email or password is incorrect!" is visible', async () => {
      await expect(loginPage.errorMessageIncorrectLogin).toBeVisible();
    });
  });
});

test.describe('Test Case 4: Login User with correct email and password', () => {
  test('Should login successfully with correct email and password', async ({ homePage, loginPage }) => {
    // Implementation for this test case
    const existingUser = generateExistingUser();

    await test.step('Navigate to login page', async () => {
      await loginPage.navigate();
    });

    await test.step('Verify Login to your account is visible', async () => {
      await expect(loginPage.loginToYourAccountTitle).toBeVisible();
    });

    await test.step('Fill login form with correct email and password', async () => {
      await loginPage.fillLoginForm(existingUser.email, existingUser.password);
    });

    await test.step('Verify that "Logged in as username" is visible', async () => {
      await expect(loginPage.loggedInAsUserNameLink).toHaveText(` Logged in as ${existingUser.name} `);
    });
  });
});
