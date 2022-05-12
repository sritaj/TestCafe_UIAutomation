import { Selector } from "testcafe";

fixture`Getting started with Test Cafe`
	.page`https://devexpress.github.io/testcafe/example/`;

test("My first Test Cafe test", async (t) => {
	await t.typeText("#developer-name", "Sritaj");
	await t.click("#submit-button");
	await t.expect(Selector("#article-header").innerText).contains("Sritaj");
});
