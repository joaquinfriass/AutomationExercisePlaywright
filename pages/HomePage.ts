import {Page, expect} from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyHomePage() {
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

}