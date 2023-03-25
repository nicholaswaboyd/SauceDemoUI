import { Page, Locator } from "@playwright/test";

export default class LoginPage{
    
    readonly buttonLogin: Locator;
    readonly checkboxRememberMe: Locator;
    readonly errorUnknownEmailOrPassword: Locator;

    constructor(public page: Page){

        this.buttonLogin = page.locator('#logIn');
        this.checkboxRememberMe = page.getByLabel('Remember me');
        this.errorUnknownEmailOrPassword = page.getByText('IconHelpWe didn\'t recognize that email and/or password.Need help?');


    }
    async fillEmailAddress(emailaddress: string){
        await this.page.fill('input[name="email"]',emailaddress);
    }

    async fillPassword(password: string){
        await this.page.fill('input[name="password"]',password)
    }

}