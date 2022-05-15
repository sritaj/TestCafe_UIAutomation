import { Selector, t } from "testcafe";

fixture("Test demonstrating Hooks in TestCafe")
	.page("https://devexpress.github.io/testcafe/example/")
	.beforeEach(async (t) => {
		await t.maximizeWindow().setTestSpeed(0.01);
	})
	.afterEach(async (t) => {
		console.log("After Each Test");
	});

const nameInputField = Selector("#developer-name");
const submitButton = Selector("#submit-button");
const articleHeader = Selector("#article-header");

test.meta("severity", "p1")(
	"Validate Scenario with Hooks usage - Example 1",
	async (t) => {
		await t
			.typeText(nameInputField, "Sritaj")
			.click(submitButton)
			.expect(Selector(articleHeader).innerText)
			.contains("Sritaj");
	}
);

test.meta("severity", "p2")(
	"Validate Scenario with Hooks usage - Example 2",
	async (t) => {
		await t
			.typeText(nameInputField, "Anusha")
			.click(submitButton)
			.expect(Selector(articleHeader).innerText)
			.contains("Anusha");
	}
);
