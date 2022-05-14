import { Selector } from "testcafe";

const iFrameName = Selector("iframe#mce_0_ifr");
const textArea = Selector("#tinymce");

fixture("Test demonstrating IFrame Handling in TestCafe").page(
	"https://the-internet.herokuapp.com/iframe"
);

test("Validate Scenario with iFrames", async (t) => {
	await t
		.switchToIframe(iFrameName)
		.click(textArea)
		.pressKey("ctrl+a delete")
		.typeText(textArea, "Hello There");

	await t.expect(textArea.innerText).contains("Hello");

	await t.switchToMainWindow();
});
