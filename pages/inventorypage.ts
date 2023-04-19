import { Page, Locator } from "@playwright/test";

export default class InventoryPage{
    
    readonly pageTitle: Locator;
    readonly buttonAddToCartBackpack: Locator;
    readonly buttonShoppingCart: Locator;


    constructor(public page: Page){

        this.pageTitle = page.getByText('Products');
        this.buttonAddToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.buttonShoppingCart = page.locator('#shopping_cart_container a');
        
    }

}