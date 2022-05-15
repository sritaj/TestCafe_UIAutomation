import { Selector } from "testcafe";

fixture("Test demonstrating SkipTests in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

const nameInputField = Selector("#developer-name");
const submitButton = Selector("#submit-button");
const articleHeader = Selector("#article-header");
const macOS = Selector("#macos");
const windowsOS = Selector("#windows");
const linuxOS = Selector("#linux");

test("Validate Scenario for MacOS checkbox selection", async (t) => {
	await t
		.typeText(nameInputField, "Sritaj")
		.click(macOS)
		.click(submitButton)
		.expect(Selector(articleHeader).innerText)
		.contains("Sritaj");
});

test.skip("Validate Scenario for Linux checkbox selection", async (t) => {
	await t
		.typeText(nameInputField, "Sritaj")
		.click(windowsOS)
		.click(submitButton)
		.expect(Selector(articleHeader).innerText)
		.contains("Sritaj");
});

test("Validate Scenario for Windows checkbox selection", async (t) => {
	await t
		.typeText(nameInputField, "Sritaj")
		.click(linuxOS)
		.click(submitButton)
		.expect(Selector(articleHeader).innerText)
		.contains("Sritaj");
});
