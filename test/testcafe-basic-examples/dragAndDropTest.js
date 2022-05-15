import { Selector } from "testcafe";

const triedCheckbox = Selector("label").withText("I have tried TestCafe");
const slider = Selector("#slider");

fixture("Test demonstrating Drag and Drop in TestCafe").page(
	"https://devexpress.github.io/testcafe/example"
);

test("Validate Scenario with Drag and Drop", async (t) => {
	await t
		.setTestSpeed(0.01)
		.click(triedCheckbox)
		.drag(slider, 360, 0, { offsetX: 10, offsetY: 10 });
});
