import { test, expect } from "@playwright/test";

test("homepage works", async ({ page }) => {
  // Given & When
  await page.goto("http://localhost:4000/");

  // Then
  await expect(page.getByRole("img", { name: "Breed 0" })).toBeVisible();
  await expect(await page.screenshot()).toMatchSnapshot();

  // When
  await page.getByRole("button", { name: "count is 0" }).click();

  // Then
  await expect(page.getByRole("button", { name: "count is 3" })).toBeVisible();

  // WHen & Then
  await page.getByText("Number of dogs fetched: 10").click();
  await page.getByRole("combobox").selectOption("5");
  await page.getByText("Number of dogs fetched: 5").click();
  await page.getByRole("combobox").selectOption("20");
  await page.getByText("Number of dogs fetched: 20").click();
});
