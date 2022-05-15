import { Selector } from "testcafe";

fixture("Test demonstrating MetaTestData usage in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

const nameInputField = Selector("#developer-name");
const submitButton = Selector("#submit-button");
const articleHeader = Selector("#article-header");

test.meta("severity", "p1")(
	"Validate Scenario with Test MetaData usage - Example 1",
	async (t) => {
		await t
			.typeText(nameInputField, "Sritaj")
			.click(submitButton)
			.expect(articleHeader.innerText)
			.contains("Sritaj");
	}
);

test.meta("severity", "p2")(
	"Validate Scenario with Test MetaData usage - Example 2",
	async (t) => {
		await t
			.typeText(nameInputField, "Anusha")
			.click(submitButton)
			.expect(articleHeader.innerText)
			.contains("Anusha");
	}
);
