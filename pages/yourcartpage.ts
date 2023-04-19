import { Page, Locator } from "@playwright/test";

export default class YourCartPage{
    
    readonly pageTitle: Locator;
    readonly buttonCheckout: Locator;


    constructor(public page: Page){

        this.pageTitle = page.getByText('Your Cart');
        this.buttonCheckout = page.locator('[data-test="checkout"]');

    }

}