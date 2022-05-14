import { Selector } from "testcafe";

fixture("Test demonstrating Selectors in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario with Selectors usage", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(Selector(articleHeader).innerText)
		.contains("Sritaj");
});
