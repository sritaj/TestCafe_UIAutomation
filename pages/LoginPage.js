import { Selector, t } from "testcafe";

class LoginPage {
	constructor() {
		this.emailInput = Selector("#Email");
		this.passwordInput = Selector("#Password");
		this.loginButton = Selector("button[class='button-1 login-button']");
		this.accountHeader = Selector("strong").withText("Returning Customer");
	}

	async loginToAccount(email, password) {
		await t
			.typeText(this.emailInput, email)
			.typeText(this.passwordInput, password)
			.click(this.loginButton);
	}
}

export default new LoginPage();
