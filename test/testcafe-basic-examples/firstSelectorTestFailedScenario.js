import { Selector } from "testcafe";

fixture("Test demonstrating Failures in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario with Failure conditions", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Failure Condition")
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj");
});
