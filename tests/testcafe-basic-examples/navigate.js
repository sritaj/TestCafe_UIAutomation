import { Selector } from "testcafe";

fixture("Test demonstrating Navigation to different pages in TestCafe").page(
	"https://www.google.com/"
);

test.page("https://devexpress.github.io/testcafe/example/")(
	"Validate Scenario with Page Navigation usage",
	async (t) => {
		const nameInputField = Selector("#developer-name");
		const submitButton = Selector("#submit-button");
		const articleHeader = Selector("#article-header");
		await t
			.typeText(nameInputField, "Sritaj")
			.click(submitButton)
			.expect(Selector(articleHeader).innerText)
			.contains("Sritaj");
	}
);
