import { Selector } from "testcafe";

const windowsOS = Selector("#windows");

fixture("Test demonstrating Hover in TestCafe").page(
	"https://devexpress.github.io/testcafe/example"
);

test("Validate Scenario with Hover", async (t) => {
	await t.setTestSpeed(0.01).hover(windowsOS).click(windowsOS);
});
