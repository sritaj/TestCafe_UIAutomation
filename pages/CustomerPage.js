import { Selector, t } from "testcafe";

class CustomerPage {
	constructor() {
		this.ordersLink = Selector("a").withText("Orders");
		this.noOrdersLabel = Selector("div.no-data").withText("No orders");
	}

	async clickOnOrdersLink() {
		await t.click(this.ordersLink);
	}
}

export default new CustomerPage();
