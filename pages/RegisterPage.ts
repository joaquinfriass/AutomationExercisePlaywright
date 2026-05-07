import {Page, expect, Locator} from '@playwright/test';
import { UserData } from '../data/userFactory';
export class RegisterPage {
    readonly newUserSignupTitle: Locator;
    readonly enterAccountInformationTitle: Locator;
    readonly titleCheckbox: Locator;
    readonly passwordInput: Locator;
    readonly dayOfBirthInput: Locator;
    readonly monthOfBirthInput: Locator;
    readonly yearOfBirthInput: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly createAccountSuccessMessage: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsUserNameLink: Locator;

    constructor(private page: Page) {

        this.newUserSignupTitle = page.getByRole('heading', { name: 'New User Signup!' });
        this.enterAccountInformationTitle = page.getByRole('heading', { name: 'Enter Account Information' });
        //Fill registration form locators
        this.titleCheckbox = page.getByRole('radio', { name: 'Mr.' });
        this.passwordInput = page.getByTestId('password');
        this.dayOfBirthInput = page.getByTestId('days');
        this.monthOfBirthInput = page.getByTestId('months');
        this.yearOfBirthInput = page.getByTestId('years');
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.offersCheckbox = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
        this.firstNameInput = page.getByTestId('first_name');
        this.lastNameInput = page.getByTestId('last_name');
        this.companyInput = page.getByTestId('company');
        this.address1Input = page.getByTestId('address');
        this.address2Input = page.getByTestId('address2');
        this.countrySelect = page.getByTestId('country');
        this.stateInput = page.getByTestId('state');
        this.cityInput = page.getByTestId('city');
        this.zipcodeInput = page.getByTestId('zipcode');
        this.mobileNumberInput = page.getByTestId('mobile_number');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.createAccountSuccessMessage = page.getByRole('heading', { name: 'Account Created!' });
        this.continueButton = page.getByTestId('continue-button');
        this.loggedInAsUserNameLink = page.locator('li', { hasText: ' Logged in as' });
    }

    async fillRegistrationForm(user: UserData) {
        await this.titleCheckbox.check();
        await this.passwordInput.fill(user.password);
        await this.dayOfBirthInput.selectOption(user.day);
        await this.monthOfBirthInput.selectOption(user.month);
        await this.yearOfBirthInput.selectOption(user.year);
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
        await this.firstNameInput.fill(user.name);
        await this.lastNameInput.fill(user.lastName);
        await this.companyInput.fill(user.company);
        await this.address1Input.fill(user.address1);
        await this.address2Input.fill(user.address2);
        await this.countrySelect.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.phone);
    }

    async verifyNewUserSignupVisible() {
        await expect(this.newUserSignupTitle).toBeVisible();
    }

    async verifyEnterAccountInformationVisible() {
        await expect(this.enterAccountInformationTitle).toBeVisible();
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async verifyCreateAccountSuccess() {
        await expect(this.createAccountSuccessMessage).toBeVisible();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async verifyLoggedInAsUserName(userName: string) {
        await expect(this.loggedInAsUserNameLink).toHaveText(` Logged in as ${userName} `);
    }

}