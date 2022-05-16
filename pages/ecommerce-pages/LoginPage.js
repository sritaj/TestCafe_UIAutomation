import { Selector, t } from "testcafe";

/**
 * Class to declare Locators and common functions required for actions in LoginPage
 */
class LoginPage {
	/**
	 * Constructor to initialise the Selectors
	 */
	constructor() {
		this.emailInput = Selector("#Email");
		this.passwordInput = Selector("#Password");
		this.loginButton = Selector("button[class='button-1 login-button']");
		this.accountHeader = Selector("strong").withText("Returning Customer");
	}

	/**
	 * @property {Function} loginToAccount - Login to the application
	 * @property {string} email - Email address
	 * @property {string} password - Password
	 * @returns void
	 */
	async loginToAccount(email, password) {
		await t
			.typeText(this.emailInput, email)
			.typeText(this.passwordInput, password)
			.click(this.loginButton);
	}
}

export default new LoginPage();
