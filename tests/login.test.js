import { Selector } from "testcafe";
import { click } from "../helpers/actionHelper";

fixture`Login Test`.page("http://zero.webappsecurity.com/index.html");

test("User cannot login with invalid Credentials", async (t) => {
	const signInButton = Selector("#signin_button");
	await t.click(signInButton);

	const loginForm = Selector("#login_form");
	await t.expect(loginForm.exists).ok();

	const userNameInput = Selector("#user_login");
	const passwordInput = Selector("#user_password");
	const submitButton = Selector(".btn-primary");

	await t.typeText(userNameInput, "invalidUserName", { paste: true });
	await t.typeText(passwordInput, "wrongPassword", { paste: true });
	//await t.click(submitButton);
	await click(submitButton);

	const errorMessage = await Selector(".alert-error").innerText;
	const actualErrorMessage = "Login and/or password are wrong.";

	await t
		.expect(errorMessage)
		.eql(actualErrorMessage, "The error message mismatches");
});
