import { Selector } from "testcafe";

const fileUpload = Selector("input#file-upload");
const uploadFileButton = Selector("input#file-submit.button");
const uploadedFiles = Selector("#uploaded-files");

fixture("Test demonstrating FileUpload in TestCafe").page(
	"https://the-internet.herokuapp.com/upload"
);

test("Validate Scenario with File Upload - Example 1", async (t) => {
	await t
		.setFilesToUpload(fileUpload, "../../../z-test-files/white.png")
		.click(uploadFileButton);

	await t.expect(uploadedFiles.innerText).contains("white.png");
});

test("Validate Scenario with File Upload - Example 2", async (t) => {
	await t
		.setFilesToUpload(fileUpload, "../../../z-test-files/white.png")
		.clearUpload(fileUpload)
		.setFilesToUpload(fileUpload, "../../../z-test-files/white copy.png")
		.click(uploadFileButton);

	await t.expect(uploadedFiles.innerText).contains("white copy.png");
});
