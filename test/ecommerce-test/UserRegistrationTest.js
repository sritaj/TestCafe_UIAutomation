import { ClientFunction } from "testcafe";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import CustomerPage from "../../pages/CustomerPage";
import { faker } from "@faker-js/faker";

const URL = "https://demo.nopcommerce.com/";
const getPageURL = ClientFunction(() => window.location.href);

fixture("Registration Fixture").page(URL);

test("Assert Home Page", async (t) => {
	await t.expect(getPageURL()).eql(URL);
	await t.expect(HomePage.subTitleHeader.exists).ok;
});

test("User Registration and Login Test", async (t) => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	await t
		.click(HomePage.registerLink)
		.expect(getPageURL())
		.contains("register")
		.click(RegisterPage.genderOption)
		.typeText(RegisterPage.firstName, firstName)
		.typeText(RegisterPage.lastName, lastName);

	await RegisterPage.selectDay("10");
	await RegisterPage.selectMonth("March");
	await RegisterPage.selectYear("1990");
	await t
		.typeText(RegisterPage.email, faker.internet.email())
		.typeText(RegisterPage.password, "12345678")
		.typeText(RegisterPage.confirmPassword, "12345678")
		.click(RegisterPage.registerButton)
		.expect(RegisterPage.successfullMessage.exists)
		.ok();
});
