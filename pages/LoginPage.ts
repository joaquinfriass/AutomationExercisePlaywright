import {Page, expect, Locator} from '@playwright/test';

export class LoginPage {

    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly loginButton: Locator;

    constructor(private page: Page) {
        this.nameInput = page.getByTestId('signup-name');
        this.emailInput = page.getByTestId('signup-email');
        this.loginButton = page.getByRole('button', { name: 'Signup' });
    }

    async fillRegistrationForm(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.loginButton.click();
    }

}