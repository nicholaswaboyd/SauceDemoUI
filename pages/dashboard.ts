import { Page, Locator } from "@playwright/test";

export default class Dashboard{
    
    readonly linkNewcastleJetsFC: Locator;

    constructor(public page: Page){
        this.linkNewcastleJetsFC = page.getByRole('link', { name: 'Newcastle Jets FC' });
    }
    
}