import { Page, Locator } from "@playwright/test";

export default class CheckoutYourInformationPage{
    
    readonly pageTitle: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly buttonContinue: Locator;


    constructor(public page: Page){

        this.pageTitle = page.getByText('Checkout: Your Information');
        this.firstNameField = page.locator('[data-test="firstName"]');
        this.lastNameField = page.locator('[data-test="lastName"]');
        this.postalCodeField = page.locator('[data-test="postalCode"]');
        this.buttonContinue = page.locator('[data-test="continue"]');
        
    }

}