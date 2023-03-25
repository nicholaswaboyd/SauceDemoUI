import { Page } from "@playwright/test";

export default class HomePage{

    constructor(public page: Page){

    }
    async clickDropdownLogin(){
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }

    async clickButtonLoginHudl(){
        await this.page.getByRole('link', { name: 'Hudl logo mark Hudl' }).click();
    }
}