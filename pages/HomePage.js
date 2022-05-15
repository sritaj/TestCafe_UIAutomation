import { Selector, t } from "testcafe";

/**
 * Class to declare Locators and common functions required for actions in HomePage
 */
class HomePage {
	/**
	 * Constructor to initialise the Selectors
	 */
	constructor() {
		this.subTitleHeader = Selector("h2").withText("Welcome to our store");
		this.registerLink = Selector("a").withText("Register");
		this.logInLink = Selector("a").withText("Log in");
		this.shoppingCartLink = Selector("a").withText("Shopping cart");
		this.logOutLink = Selector("a").withText("Log out");
		this.myAccountLink = Selector("a").withText("My account");
		this.currencyList = Selector("select#customerCurrency");
	}

	/**
	 * @property {Function} productSearch - Get the locator for Search box
	 * @returns Selector
	 */
	get productSearch() {
		return Selector("input[id='small-searchterms']");
	}

	/**
	 * @property {Function} search - Search for the product specified
	 * @property {string} product - Product to be searched
	 * @returns void
	 */
	async search(product) {
		await t.typeText(this.productSearch, product).wait(3000).pressKey("enter");
	}

	/**
	 * @property {Function} changeCurrency - Change the currency
	 * @property {string} currency - Currency type
	 * @returns void
	 */
	async changeCurrency(currency) {
		await t
			.click(this.currencyList)
			.click(Selector("option", { text: currency }));
	}

	/**
	 * @property {Function} logInLink - Navigate to Login section
	 * @returns void
	 */
	async clickOnLogin() {
		await t.click(this.logInLink);
	}

	/**
	 * @property {Function} logOutLink - Logout the current user
	 * @returns void
	 */
	async clickOnLogout() {
		await t.click(this.logOutLink);
	}

	/**
	 * @property {Function} clickOnMyAccount - Navigate to My Account section
	 * @returns void
	 */
	async clickOnMyAccount() {
		await t.click(this.myAccountLink);
	}

	/**
	 * @property {Function} clickOnRegisterLink - Navigate to Register section
	 * @returns void
	 */
	async clickOnRegisterLink() {
		await t.click(this.registerLink);
	}
}

export default new HomePage();
