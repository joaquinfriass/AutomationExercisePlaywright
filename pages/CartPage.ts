import {Page, expect, Locator} from '@playwright/test';

export class CartPage {

    //Locators
    readonly firstProductInCart: Locator;
    readonly secondProductInCart: Locator;
    readonly firstproductPriceInCart: Locator;
    readonly secondProductPriceInCart: Locator;
    readonly quantityInputFirstProduct: Locator;
    readonly quantityInputSecondProduct: Locator
    readonly totalPriceFirstProduct: Locator;
    readonly totalPriceSecondProduct: Locator;
    readonly cartPageTitle: Locator;
    readonly removeFirstProductButton: Locator;
    readonly removeSecondProductButton: Locator;
    readonly firstProductNameInCart: Locator;
    readonly secondProductNameInCart: Locator;
    readonly productNamesInCart: Locator;

    constructor(private page: Page) {
        this.firstProductInCart = page.locator('.cart_info .cart_product').nth(0);
        this.secondProductInCart = page.locator('.cart_info .cart_product').nth(1);
        this.firstproductPriceInCart = page.locator('.cart_info .cart_price').nth(0);
        this.secondProductPriceInCart = page.locator('.cart_info .cart_price').nth(1);
        this.quantityInputFirstProduct = page.locator('.cart_info .cart_quantity').nth(0).locator('button');
        this.quantityInputSecondProduct = page.locator('.cart_info .cart_quantity').nth(1).locator('button');
        this.totalPriceFirstProduct = page.locator('.cart_info .cart_total').nth(0);
        this.totalPriceSecondProduct = page.locator('.cart_info .cart_total').nth(1);
        this.cartPageTitle = page.locator('li', { hasText: 'Shopping Cart' });
        this.removeFirstProductButton = page.locator('.cart_info .cart_delete').nth(0).locator('a');
        this.removeSecondProductButton = page.locator('.cart_info .cart_delete').nth(1).locator('a');
        this.firstProductNameInCart = page.locator('.cart_info .cart_description').nth(0).locator('h4 a');
        this.secondProductNameInCart = page.locator('.cart_info .cart_description').nth(1).locator('h4 a');
        this.productNamesInCart = page.locator('.cart_info .cart_description h4 a');

    }

    async totalPriceVerification(productPriceLocator: Locator, totalPriceLocator: Locator) {
        const productPriceText = await productPriceLocator.innerText();
        const productPrice = parseFloat(productPriceText.replace('Rs. ', ''));
        const quantityInputValue = await productPriceLocator.locator('..').locator('.cart_quantity').locator('button').innerText();
        const quantity = parseInt(quantityInputValue);
        const expectedTotalPrice = productPrice * quantity;
        const totalPriceText = await totalPriceLocator.innerText();
        const totalPrice = parseFloat(totalPriceText.replace('Rs. ', ''));
        expect(totalPrice).toBeCloseTo(expectedTotalPrice, 2);
    }

    async removeProductButton(productName: string) {
        //obtener todos los nombres de los productos en el carrito
        const productNames = await this.productNamesInCart.allTextContents();
        for (let i = 0; i < productNames.length; i++) {
            if (productNames[i] === productName) {
                await this.removeFirstProductButton.click();
                break;
            }
        }
    }

}