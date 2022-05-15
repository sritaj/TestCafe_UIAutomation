import { Selector } from "testcafe";

const fileUpload = Selector("input#file-upload");
const uploadFileButton = Selector("input#file-submit.button");
const uploadedFiles = Selector("#uploaded-files");

fixture("Test demonstrating DebugMode in TestCafe").page(
	"https://the-internet.herokuapp.com/upload"
);

test("Validate Scenario with Debug Mode", async (t) => {
	await t
		.setFilesToUpload(fileUpload, "../../../z-test-files/white.png")
		//.debug()
		.click(uploadFileButton);

	await t.expect(uploadedFiles.innerText).contains("white.png");
});
