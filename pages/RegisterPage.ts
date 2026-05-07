import {Page, expect, Locator} from '@playwright/test';

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
    }

    async fillRegistrationForm(firstName: string, lastName: string, password: string, dayOfBirth: string, monthOfBirth: string, yearOfBirth: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.titleCheckbox.check();
        await this.passwordInput.fill(password);
        await this.dayOfBirthInput.selectOption(dayOfBirth);
        await this.monthOfBirthInput.selectOption(monthOfBirth);
        await this.yearOfBirthInput.selectOption(yearOfBirth);
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.address1Input.fill(address1);
        await this.address2Input.fill(address2);
        await this.countrySelect.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async verifyNewUserSignupVisible() {
        await expect(this.newUserSignupTitle).toBeVisible();
    }

    async verifyEnterAccountInformationVisible() {
        await expect(this.enterAccountInformationTitle).toBeVisible();
    }


}