import { Page, Locator } from "@playwright/test";

export default class CheckoutOverviewPage{
    
    readonly pageTitle: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;


    constructor(public page: Page){

        this.pageTitle = page.getByText('Checkout: Overview');

    }

    async extractItemTotalValue(): Promise<number> {
        const itemTotalLabel = await this.page.locator('[class="summary_subtotal_label"]');
        const itemTotalText = await itemTotalLabel.innerText();
        const itemTotalValue = parseFloat(itemTotalText.replace('Item total: $', ''));
        return itemTotalValue
    }

    async extractTaxValue(): Promise<number> {
        const taxLabel = await this.page.locator('[class="summary_tax_label"]');
        const taxText = await taxLabel.innerText();
        const taxValue = parseFloat(taxText.replace('Tax: $', ''));
        return taxValue
    }

    async extractTotalValue(): Promise<number> {
        const totalLabel = await this.page.locator('[class="summary_info_label summary_total_label"]');
        const totalText = await totalLabel.innerText();
        const totalValue = parseFloat(totalText.replace('Total: $', ''));
        return totalValue
    }

}