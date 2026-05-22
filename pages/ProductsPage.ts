import {Page, expect, Locator} from '@playwright/test';

export class ProductsPage {

    //Locators
    readonly allProductsTitle: Locator;
    readonly firstProductView: Locator;
    readonly productName: Locator;
    readonly productCategory: Locator
    readonly productPrice: Locator;
    readonly productAvailability: Locator;
    readonly productCondition: Locator
    readonly productBrand: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchedProductsTitle: Locator;
    readonly searchedProducts: Locator;
    readonly searchedProductNames: Locator;
    readonly continueShoppingButton: Locator;
    readonly viewCartButton: Locator;

    constructor(private page: Page) {
        this.allProductsTitle = page.getByRole('heading', { name: 'All Products' });
        this.firstProductView = page.getByRole('link', { name: 'View Product' }).first();
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p').nth(0);
        this.productPrice = page.getByText('Rs. 500', { exact: true });
        this.productAvailability = page.locator('.product-information p').nth(1);
        this.productCondition = page.locator('.product-information p').nth(2);
        this.productBrand = page.locator('.product-information p').nth(3);
        this.searchInput = page.getByPlaceholder('Search Product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' });
        this.searchedProducts = page.locator('.single-products');
        this.searchedProductNames = this.searchedProducts.locator('.productinfo p');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
    }

    async navigateToProductsPage() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async clickFirstProductView() {
        await this.firstProductView.click();
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async getSearchedProductsCount() {
        return await this.searchedProducts.count();
    }

    async getSearchedProductNames(name: string) {
        return await this.searchedProductNames.allTextContents();
    }

    async addFirstProductToCart() {
        const firstProduct = this.searchedProducts.first();
        await firstProduct.hover();
        await firstProduct.locator('a').filter({ hasText: 'Add to cart' }).last().click();
    }

    async addSecondProductToCart() {
        const secondProduct = this.searchedProducts.nth(1);
        await secondProduct.hover();
        await secondProduct.locator('a').filter({ hasText: 'Add to cart' }).last().click();
    }

    async getAllProductNames() {
        return this.searchedProductNames.allTextContents();
    }

}