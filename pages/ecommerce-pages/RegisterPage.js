import { Selector, t } from "testcafe";

/**
 * Class to declare Locators and common functions required for actions in RegisterPage
 */
class RegisterPage {
	/**
	 * Constructor to initialise the Selectors
	 */
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

	/**
	 * @property {Function} selectDay - Setting the Day for the Calendar
	 * @property {string} day - Day of the month
	 * @returns void
	 */
	async selectDay(day) {
		const dayOption = this.dateOfBirthDayList.find("option");

		await t.click(this.dateOfBirthDayList).click(dayOption.withText(day));
	}

	/**
	 * @property {Function} selectMonth - Setting the Month for the Calendar
	 * @property {string} month - Month
	 * @returns void
	 */
	async selectMonth(month) {
		const monthOption = this.dateOfBirthMonthList.find("option");

		await t.click(this.dateOfBirthMonthList).click(monthOption.withText(month));
	}

	/**
	 * @property {Function} selectYear - Setting the Year for the Calendar
	 * @property {string} year - Year
	 * @returns void
	 */
	async selectYear(year) {
		const yearOption = this.dateOfBirthYearList.find("option");

		await t.click(this.dateOfBirthYearList).click(yearOption.withText(year));
	}

	/**
	 * @property {Function} registerUser - Resgister New User
	 * @property {string} firstName - First Name
	 * @property {string} lastName - Last Name
	 * @property {string} day - Day of the Month
	 * @property {string} month - Month
	 * @property {string} year - Year
	 * @property {string} email - Email address
	 * @property {string} password - Password
	 * @returns void
	 */
	async registerUser(firstName, lastName, day, month, year, email, password) {
		await t
			.click(this.genderOption)
			.typeText(this.firstName, firstName)
			.typeText(this.lastName, lastName);

		await this.selectDay(day);
		await this.selectMonth(month);
		await this.selectYear(year);
		await t
			.typeText(this.email, email)
			.typeText(this.password, password)
			.typeText(this.confirmPassword, password)
			.click(this.registerButton);
	}
}

export default new RegisterPage();
