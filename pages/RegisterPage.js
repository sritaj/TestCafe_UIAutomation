import { Selector, t } from "testcafe";

class RegisterPage {
	constructor() {
		this.genderOption = Selector("#gender-male");
		this.firstName = Selector("#FirstName");
		this.lastName = Selector("#LastName");
		this.dateOfBirthDayList = Selector("select#DateOfBirthDay");
		this.dateOfBirthMonthList = Selector("select#DateOfBirthMonth");
		this.dateOfBirthYearList = Selector("select#DateOfBirthYear");
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
}

export default new RegisterPage();
