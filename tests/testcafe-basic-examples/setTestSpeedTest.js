import { Selector } from "testcafe";

fixture("Test demonstrating Test Speed in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario with controlled Test Speed", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.setTestSpeed(0.01)
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj");
});
