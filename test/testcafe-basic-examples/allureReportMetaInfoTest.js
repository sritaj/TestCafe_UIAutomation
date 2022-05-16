import { Selector } from "testcafe";

fixture(
	"Test demonstrating Meta Info Options for AllureReport in TestCafe"
).page("https://devexpress.github.io/testcafe/example/");

test.meta({
	ID: "12901",
	SEVERITY: "normal",
	STORY: "S001",
	TEST_RUN: "12133",
})("Validate Scenario with AllureReports MetaInfo usage", async (t) => {
	const nameInputField = Selector("#developer-name");
	const submitButton = Selector("#submit-button");
	const articleHeader = Selector("#article-header");
	await t
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains("Sritaj");
});
