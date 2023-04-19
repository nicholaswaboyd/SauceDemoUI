import { Page, Locator } from "@playwright/test";

export default class LoginPage{
    
    readonly buttonLogin: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;

    constructor(public page: Page){

        this.buttonLogin = page.locator('[data-test="login-button"]');
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');

    }

}