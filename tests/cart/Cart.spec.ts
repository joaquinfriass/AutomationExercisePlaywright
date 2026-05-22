import { expect, test } from '../../fixtures';
import { generateUser } from '../../data/userFactory';
import { generateExistingUser } from '../../data/existingUserFactory';

test.describe('Test Case 5: Verify All Products and product detail page', () => {
    test('Should verify all products and product detail page', async ({ homePage, productsPage }) => {

        await test.step('Navigate to products page', async () => {
            await productsPage.navigateToProductsPage();
        });

        await test.step('Verify that the user is navigated to ALL PRODUCTS page successfully', async () => {
            await expect(productsPage.allProductsTitle).toBeVisible();  
        });

        await test.step('Click on the first product and verify product detail is opened', async () => {
            await productsPage.clickFirstProductView();
        });

        await test.step('Verify that detail is visible: product name, category, price, availability, condition, brand.', async () => {
                await expect(productsPage.productName).toBeVisible();
                await expect(productsPage.productCategory).toBeVisible();
                await expect(productsPage.productPrice).toBeVisible();
                await expect(productsPage.productAvailability).toBeVisible();
                await expect(productsPage.productCondition).toBeVisible();
                await expect(productsPage.productBrand).toBeVisible();
        });

    });
});

test.describe('Test Case 6: Add to cart', () => {
    test('Should add product to cart and verify', async ({ homePage, productsPage, cartPage }) => {

        await test.step('Navigate to products page', async () => {
            await productsPage.navigateToProductsPage();
        });

        await test.step('Enter product name in search input and click search button', async () => {
            await productsPage.searchProduct('Jeans');
        });

        await test.step('Verify SEARCHED PRODUCTS is visible', async () => {
            await expect(productsPage.searchedProductsTitle).toBeVisible();
        });

        await test.step('Verify that the first result contains the searched word', async () => { 
            const productsCount = await productsPage.getSearchedProductsCount();
            const productNames = await productsPage.getSearchedProductNames('Jeans');

            await expect(productsCount).toBeGreaterThan(0);
            await expect(productNames[0]).toContain('Jeans');
        });
    });
});

test.describe('Test Case 7: Verify Cart After Adding Product', () => {
    test('Should verify cart after adding product', async ({ homePage, productsPage, cartPage }) => {
        
        await test.step('Navigate to products page', async () => {
            await productsPage.navigateToProductsPage();
        });

        await test.step('Hover over first product and click Add to cart', async () => {
            await productsPage.addFirstProductToCart();
        });

        
        await test.step('Click Continue Shopping button', async () => {
            await productsPage.continueShoppingButton.click(); 
        });

        
        await test.step('Hover over second product and click Add to cart', async () => {
            await productsPage.addSecondProductToCart(); 
        });

        
        await test.step('Click View Cart button', async () => {
            await productsPage.viewCartButton.click();
        });

        await test.step('Verify both products are added to Cart', async () => {
            await expect(cartPage.firstProductInCart).toBeVisible();
            await expect(cartPage.secondProductInCart).toBeVisible();          
        });

        await test.step('Verify their prices, quantity and total price', async () => {
            await expect(cartPage.firstproductPriceInCart).toBeVisible();
            await expect(cartPage.secondProductPriceInCart).toBeVisible();
            await expect(cartPage.quantityInputFirstProduct).toBeVisible();
            await expect(cartPage.quantityInputSecondProduct).toBeVisible();
            await expect(cartPage.totalPriceFirstProduct).toBeVisible();
            await expect(cartPage.totalPriceSecondProduct).toBeVisible();
        });
        
    });
});

test.describe('Test Case 8: Remove products in Cart', () => {
        test('Should remove products in cart and verify', async ({ homePage, productsPage, cartPage }) => {
            
            await test.step('Navigate to products page', async () => {
                await productsPage.navigateToProductsPage();
            });

            await test.step('Add products to cart', async () => {
                await productsPage.addFirstProductToCart();
                await productsPage.continueShoppingButton.click(); 
                await productsPage.addSecondProductToCart();
                await productsPage.addSecondProductToCart();
                await productsPage.addSecondProductToCart();  
            });

            await test.step('Click View Cart button', async () => {
                await productsPage.viewCartButton.click();
            });

            await test.step('Verify that cart page is displayed', async () => {
                await expect(cartPage.cartPageTitle).toBeVisible();
            });

            await test.step('Click X button correspondint to partiular product', async () => {
                await expect(cartPage.firstProductInCart).toBeVisible();
                const firstProductName = await cartPage.firstProductNameInCart.innerText();
                await cartPage.removeFirstProductButton.click();
                await expect(cartPage.firstProductInCart).not.toHaveText(firstProductName);
            });
            
            await test.step('Verify that product is removed from the cart', async () => {
                await expect(cartPage.firstProductInCart).not.toBeVisible();
            });
            
        });
});