import { Page, Locator } from "@playwright/test";

export default class LoginPage{
    
    readonly buttonLogin: Locator;

    constructor(public page: Page){

        this.buttonLogin = page.locator('#logIn');

    }
    async fillEmailAddress(emailaddress: string){
        await this.page.fill('input[name="email"]',emailaddress);
    }

    async fillPassword(password: string){
        await this.page.fill('input[name="password"]',password)
    }

}