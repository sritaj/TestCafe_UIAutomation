import { Selector } from "testcafe";

fixture("Test demonstrating Page Load Timeout in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario Page Load Timeout", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj");
}).timeouts({
	pageLoadTimeout: 0,
	pageRequestTimeout: 0,
	ajaxRequestTimeout: 0,
});
