import { Selector } from "testcafe";

fixture("Test demonstrating Assertions usage in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

const nameInputField = Selector("#developer-name");
const submitButton = Selector("#submit-button");
const articleHeader = Selector("#article-header");
const input = "Sritaj";

test("Validate Scenario with Assertions usage", async (t) => {
	await t
		.expect(nameInputField.value)
		.eql("", "Input is not empty")
		.typeText(nameInputField, input)
		.expect(nameInputField.value)
		.eql(input, `Input is not as per expected value : ${input}`)
		.click(submitButton)
		.expect(articleHeader.innerText)
		.contains(input);
});
