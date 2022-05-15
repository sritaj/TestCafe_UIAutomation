import xPathToCSS from "xpath-to-css";

const nameInputFieldXpath = "//input[@id='developer-name']";
const submitButtonXpath = "//button[@id='submit-button']";
const articleHeaderXpath = "//h1[@id='article-header']";
const nameInputField = xPathToCSS(nameInputFieldXpath);
const submitButton = xPathToCSS(submitButtonXpath);
const articleHeader = xPathToCSS(articleHeaderXpath);

fixture("Test demonstrating XPath Usage in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Scenario with XPath usage", async (t) => {
	await t
		.typeText(nameInputField, "Sritaj")
		.click(submitButton)
		.expect(articleHeader.includes("Sritaj")).ok;
});
