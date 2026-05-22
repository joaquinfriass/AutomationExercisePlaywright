import {Page, expect, Locator} from '@playwright/test';

export class LoginPage {

    readonly RegisterNameInput: Locator;
    readonly RegisterEmailInput: Locator;
    readonly loginButton: Locator;
    readonly newUserSignupTitle: Locator;
    readonly emailAlreadyExistErrorMessage: Locator;
    readonly loginToYourAccountTitle: Locator;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButtonLoginForm: Locator;
    readonly errorMessageIncorrectLogin: Locator;
    readonly loggedInAsUserNameLink: Locator;

    constructor(private page: Page) {
        this.RegisterNameInput = page.getByTestId('signup-name');
        this.RegisterEmailInput = page.getByTestId('signup-email');
        this.loginButton = page.getByRole('button', { name: 'Signup' });
        this.newUserSignupTitle = page.getByRole('heading', { name: 'New User Signup!' });
        this.emailAlreadyExistErrorMessage = page.getByText('Email Address already exist!');
        this.loginToYourAccountTitle = page.getByRole('heading', { name: 'Login to your account' });
        this.loginEmailInput = page.getByTestId('login-email');
        this.loginPasswordInput = page.getByTestId('login-password');
        this.loginButtonLoginForm = page.getByTestId('login-button');
        this.errorMessageIncorrectLogin = page.getByText('Your email or password is incorrect!');
        this.loggedInAsUserNameLink = page.locator('li', { hasText: ' Logged in as' });
    }

    async fillRegistrationForm(name: string, email: string) {
        await this.RegisterNameInput.fill(name);
        await this.RegisterEmailInput.fill(email);
        await this.loginButton.click();
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async fillLoginForm(email: string, password: string) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButtonLoginForm.click();
    }
}