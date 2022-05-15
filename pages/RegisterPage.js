import { Selector, t } from "testcafe";

class RegisterPage {
	constructor() {
		this.genderOption = Selector("#gender-male");
		this.firstName = Selector("#FirstName");
		this.lastName = Selector("#LastName");
		this.dateOfBirthDayList = Selector("select[name='DateOfBirthDay']");
		this.dateOfBirthMonthList = Selector("select[name='DateOfBirthMonth']");
		this.dateOfBirthYearList = Selector("select[name='DateOfBirthYear']");
		this.email = Selector("#Email");
		this.password = Selector("#Password");
		this.confirmPassword = Selector("#ConfirmPassword");
		this.registerButton = Selector("#register-button");
		this.successfullMessage = Selector("div.result").withText(
			"Your registration completed"
		);
	}

	async selectDay(day) {
		const dayOption = this.dateOfBirthDayList.find("option");

		await t.click(this.dateOfBirthDayList).click(dayOption.withText(day));
	}

	async selectMonth(month) {
		const monthOption = this.dateOfBirthMonthList.find("option");

		await t.click(this.dateOfBirthMonthList).click(monthOption.withText(month));
	}

	async selectYear(year) {
		const yearOption = this.dateOfBirthYearList.find("option");

		await t.click(this.dateOfBirthYearList).click(yearOption.withText(year));
	}
}

export default new RegisterPage();
