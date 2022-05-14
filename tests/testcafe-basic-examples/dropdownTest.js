import { Selector } from "testcafe";

const interfaceSelect = Selector("select#preferred-interface");
const interfaceOptions = interfaceSelect.find("option");

fixture("Test demonstrating Dropdown Selection in TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate Dropdown Selection with TestCafe", async (t) => {
	await t
		.typeText("#developer-name", "Sritaj")
		.click(interfaceSelect)
		.click(interfaceOptions.withText("Both"));
});
