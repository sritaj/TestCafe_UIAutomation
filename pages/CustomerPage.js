import { Selector, t } from "testcafe";

/**
 * Class to declare Locators and common functions required for actions in CustomerPage
 */
class CustomerPage {
	/**
	 * Constructor to initialise the Selectors
	 */
	constructor() {
		this.ordersLink = Selector("a").withText("Orders");
		this.noOrdersLabel = Selector("div.no-data").withText("No orders");
	}

	/**
	 * @property {Function} clickOnOrdersLink - Navigate to Orders section
	 * @returns void
	 */
	async clickOnOrdersLink() {
		await t.click(this.ordersLink);
	}
}

export default new CustomerPage();
