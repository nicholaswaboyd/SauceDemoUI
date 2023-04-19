import { test, expect, Page } from '@playwright/test';
import LoginPage from '../pages/loginpage';
import InventoryPage from '../pages/inventorypage';
import YourCartPage from '../pages/yourcartpage';
import CheckoutYourInformationPage from '../pages/checkoutyourinformationpage';
import CheckoutOverviewPage from '../pages/checkoutoverviewpage';

//Constants to be used during test cases. Will investigate not storing test password in plaintext
const validUsername = "standard_user"
const password = "secret_sauce"
const firstName = "Automation"
const lastName = "Tester"
const postalCode = "OX44DQ"
const pageUrl = "https://www.saucedemo.com/"

let loginpage: LoginPage
let inventorypage: InventoryPage
let yourcartpage: YourCartPage
let checkoutyourinformationpage: CheckoutYourInformationPage
let checkoutoverviewpage: CheckoutOverviewPage

test.describe('Login Tests', () => {

    //The following is carried out before each test case in this file
    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        inventorypage = new InventoryPage(page);
        yourcartpage = new YourCartPage(page);
        checkoutyourinformationpage = new CheckoutYourInformationPage(page);
        checkoutoverviewpage = new CheckoutOverviewPage(page);
        //Navigate to SauceDemo
        await page.goto(pageUrl);
        

    });

    test('Verify Happy Path Login', async ({page}) =>{
        //Fill the email and password fields using the constants on lines 7/8
        await loginpage.usernameField.fill(validUsername);
        await loginpage.passwordField.fill(password);
        //Click login button
        await loginpage.buttonLogin.click();
        //Verify inventory page has loaded
        await expect(inventorypage.pageTitle).toBeVisible();
        //Add backpack to cart
        await inventorypage.buttonAddToCartBackpack.click();
        //Open cart
        await inventorypage.buttonShoppingCart.click();
        //Verify the cart page has opened
        await expect(yourcartpage.pageTitle).toBeVisible();
        //Click checkout
        await yourcartpage.buttonCheckout.click();
        //Verify page has opened
        await expect(checkoutyourinformationpage.pageTitle).toBeVisible();
        //Fill fields
        await checkoutyourinformationpage.firstNameField.fill(firstName);
        await checkoutyourinformationpage.lastNameField.fill(lastName);
        await checkoutyourinformationpage.postalCodeField.fill(postalCode);
        //Click continue
        await checkoutyourinformationpage.buttonContinue.click();
        //Check page has opened
        await expect(checkoutoverviewpage.pageTitle).toBeVisible();
        //Extract item total and tax for comparison
        const itemTotalValue = await checkoutoverviewpage.extractItemTotalValue();
        const taxValue = await checkoutoverviewpage.extractTaxValue();
        const totalValue = await checkoutoverviewpage.extractTotalValue();
        expect(itemTotalValue + taxValue).toEqual(totalValue);
        page.close();
    });

});
