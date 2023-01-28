import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:4000/");
  await page.getByRole("button", { name: "count is 0" }).click();
  await page.getByText("Number of dogs fetched: 10").click();
  await page.getByRole("combobox").selectOption("5");
  await page.getByText("Number of dogs fetched: 5").click();
  await page.getByRole("combobox").selectOption("20");
  await page.getByText("Number of dogs fetched: 20").click();
});
