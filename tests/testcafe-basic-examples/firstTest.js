fixture("Test demonstrating TestCafe").page(
	"https://devexpress.github.io/testcafe/example/"
);

test("Validate First Test with TestCafe", async (t) => {
	await t.typeText("#developer-name", "Sritaj").click("#submit-button");
});
