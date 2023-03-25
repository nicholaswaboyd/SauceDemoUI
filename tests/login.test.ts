import { test, expect, Page } from '@playwright/test';
import Dashboard from '../pages/dashboard';
import HomePage from '../pages/homepage';
import LoginPage from '../pages/loginpage';

//Constants to be used during test cases. Will investigate not storing test password in plaintext
const emailaddress = "nicholaswaboyd@gmail.com"
const password = "sW@bnZGzcg$7Z_U"

//The following is carried out before each test case in this file
test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    //Navigate to Hudl
    await page.goto('https://www.hudl.com/');
    //Click the login dropdown
    await homepage.clickDropdownLogin();
    //Select Hudl from the available options
    await homepage.clickButtonLoginHudl();
    //Check the client has navigated to the correct page and the login button is visible
    await expect(loginpage.buttonLogin).toBeVisible();
});

test.describe('Login Tests', () => {

    test('Verify Happy Path Login', async ({page}) =>{
        const loginpage = new LoginPage(page);
        const dashboard = new Dashboard(page);

        //Fill the email and password fields using the constants on lines 7/8
        await loginpage.fillEmailAddress(emailaddress);
        await loginpage.fillPassword(password);
        await loginpage.buttonLogin.click();
        //Check that the user has succesfully logged in
        await expect(dashboard.linkNewcastleJetsFC).toBeVisible();

    });

    
});