import { test, expect, Page } from '@playwright/test';
import Dashboard from '../pages/dashboard';
import HomePage from '../pages/homepage';
import LoginPage from '../pages/loginpage';

//Constants to be used during test cases. Will investigate not storing test password in plaintext
const emailAddress = "nicholaswaboyd@gmail.com"
const password = "sW@bnZGzcg$7Z_U"
const pageUrl = "https://www.hudl.com/"

let homepage: HomePage
let loginpage: LoginPage
let dashboard: Dashboard

test.describe('Login Tests', () => {

    //The following is carried out before each test case in this file
    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page);
        loginpage = new LoginPage(page);
        dashboard = new Dashboard(page);
        //Navigate to Hudl
        await page.goto(pageUrl);
        //Click the login dropdown
        await homepage.clickDropdownLogin();
        //Select Hudl from the available options
        await homepage.clickButtonLoginHudl();
        //Check the client has navigated to the correct page and the login button is visible
        await expect(loginpage.buttonLogin).toBeVisible();
    });

    test('Verify Happy Path Login', async () =>{
        //Fill the email and password fields using the constants on lines 7/8
        await loginpage.fillEmailAddress(emailAddress);
        await loginpage.fillPassword(password);
        await expect(loginpage.checkboxRememberMe).not.toBeChecked();
        await loginpage.buttonLogin.click();
        //Check that the user has succesfully logged in
        await expect(dashboard.linkNewcastleJetsFC).toBeVisible();

    });

    test('Check Remember Me can be toggled', async () =>{
        //Fill email and password again
        await loginpage.fillEmailAddress(emailAddress);
        await loginpage.fillPassword(password);
        //Verify the checkbox is unchecked
        await expect(loginpage.checkboxRememberMe).not.toBeChecked();
        //Needs force:true as another element loads over the checkbox on hover
        await loginpage.checkboxRememberMe.click({ force:true });
        //Re-check after clicking it
        await expect(loginpage.checkboxRememberMe).toBeChecked();
        await loginpage.buttonLogin.click();
        //Check that the user has succesfully logged in
        await expect(dashboard.linkNewcastleJetsFC).toBeVisible();
    })

    test('Verify an error is displayed when no password is entered', async ({page}) =>{
        //Fill only the email address
        await loginpage.fillEmailAddress(emailAddress);
        await loginpage.buttonLogin.click();
        //Verify the error message has appeared
        await expect(loginpage.errorUnknownEmailOrPassword).toBeVisible();
        //Verify the Log In button is disabled
        await expect(loginpage.buttonLogin).toBeDisabled();
    })

    //TBD
    //test incorrect password
    //test organization login screen is available
    //test help button
});
