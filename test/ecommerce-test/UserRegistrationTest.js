import { ClientFunction } from "testcafe";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import CustomerPage from "../../pages/CustomerPage";

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => {
	window.location.href;
});

fixture("Registration Fixture").page(URL);

test("Assert Home Page", async (t) => {
	await t.expect(getURL()).eql("hello").expect(HomePage.subTitleHeader.exists)
		.ok;
});
