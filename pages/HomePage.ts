import {Page, expect, Locator} from '@playwright/test';

export class HomePage {
    
    //locators
    readonly loginLink: Locator;
    
    constructor(private page: Page) {
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
    }
    

    async navigate() {
        await this.page.goto('https://automationexercise.com/',{ timeout: 60000, waitUntil: 'domcontentloaded' });
    }

    async verifyHomePage() {
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

}