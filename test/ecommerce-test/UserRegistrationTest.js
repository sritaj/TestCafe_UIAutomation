import { ClientFunction } from "testcafe";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import CustomerPage from "../../pages/CustomerPage";
import { faker } from "@faker-js/faker";

const dataSet = require("../../z-test-files/data.json");
const URL = "https://demo.nopcommerce.com/";
const getPageURL = ClientFunction(() => window.location.href);

fixture("Registration Fixture").page(URL);

test("Assert Home Page", async (t) => {
	await t.expect(getPageURL()).eql(URL);
	await t.expect(HomePage.subTitleHeader.exists).ok;
});

test("Assert User Registration and Login Test", async (t) => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email();
	const password = "12345678";
	await t
		.click(HomePage.registerLink)
		.expect(getPageURL())
		.contains("register")
		//Create New User
		.click(RegisterPage.genderOption)
		.typeText(RegisterPage.firstName, firstName)
		.typeText(RegisterPage.lastName, lastName);

	await RegisterPage.selectDay("10");
	await RegisterPage.selectMonth("March");
	await RegisterPage.selectYear("1990");
	await t
		.typeText(RegisterPage.email, email)
		.typeText(RegisterPage.password, password)
		.typeText(RegisterPage.confirmPassword, password)
		.click(RegisterPage.registerButton)
		.expect(RegisterPage.successfullMessage.exists)
		.ok()
		//Logout and Login
		.click(HomePage.logOutLink)
		.click(HomePage.logInLink)
		.expect(LoginPage.accountHeader.exists)
		.ok()
		.typeText(LoginPage.emailInput, email)
		.typeText(LoginPage.passwordInput, password)
		.click(LoginPage.loginButton)
		//Navigate to Customer Page and Verify Orders
		.click(HomePage.myAccountLink)
		.expect(CustomerPage.ordersLink.exists)
		.ok()
		.click(CustomerPage.ordersLink)
		.expect(CustomerPage.noOrdersLabel.exists)
		.ok();
});

test("Assert User Registration and Login Test - Code Refactored", async (t) => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email();
	const password = "12345678";

	await HomePage.clickOnRegisterLink();
	await t.expect(getPageURL()).contains("register");
	//Create New User
	await RegisterPage.registerUser(
		firstName,
		lastName,
		"10",
		"March",
		"1990",
		email,
		password
	);
	await t.expect(RegisterPage.successfullMessage.exists).ok();
	//Logout and Login
	await HomePage.clickOnLogout();
	await HomePage.clickOnLogin();
	await t.expect(LoginPage.accountHeader.exists).ok();
	await LoginPage.loginToAccount(email, password);
	//Navigate to Customer Page and Verify Orders
	await HomePage.clickOnMyAccount();
	await t.expect(CustomerPage.ordersLink.exists).ok();
	await CustomerPage.clickOnOrdersLink();
	await t.expect(CustomerPage.noOrdersLabel.exists).ok();
});

/*
Test Validating User Registration and Login Test with Data Driven approach
*/
dataSet.forEach((data) => {
	test("Assert User Registration and Login Test - Data Driven", async (t) => {
		await HomePage.clickOnRegisterLink();
		await t.expect(getPageURL()).contains("register");
		//Create New User
		await RegisterPage.registerUser(
			data.firstname,
			data.lastname,
			data.birthday,
			data.birthmonth,
			data.birthyear,
			data.email,
			data.password
		);
		await t.expect(RegisterPage.successfullMessage.exists).ok();
		//Logout and Login
		await HomePage.clickOnLogout();
		await HomePage.clickOnLogin();
		await t.expect(LoginPage.accountHeader.exists).ok();
		await LoginPage.loginToAccount(data.email, data.password);
		//Navigate to Customer Page and Verify Orders
		await HomePage.clickOnMyAccount();
		await t.expect(CustomerPage.ordersLink.exists).ok();
		await CustomerPage.clickOnOrdersLink();
		await t.expect(CustomerPage.noOrdersLabel.exists).ok();
	});
});
