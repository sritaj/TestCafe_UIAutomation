import { Selector } from "testcafe";

fixture("Test demonstrating Screenshots in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario with Screenshot usage", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj")
		.takeScreenshot();
});

test("Validate Scenario with Element Screenshot usage", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Sritaj")
		.takeElementScreenshot(nameInputField)
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj");
});
