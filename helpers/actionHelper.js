import { Selector, t } from "testcafe";

export async function click(selector) {
	await t.click(selector);
}
