import { test, expect } from "@playwright/test";

test("Filter regression – Alter: Erwachsene updates results", async ({ page }) => {
  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");

  await page.getByPlaceholder(/ort|postleitzahl/i).fill("Berlin");
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: /gruppen suchen/i }).click();

  await expect(page.locator(".map-list-item").first()).toBeVisible();
  const resultsBefore = await page.locator(".map-list-item").count();

  await page.getByText(/mehr filter/i).click();

  await page.locator("#b4-b1-b6-selectInputReduced").click();

  const option = page.locator(".dropdown-popup-row:has-text('Erwachsene')");
  await option.waitFor({ state: "visible" });

  await option.click();

await expect(
  page.locator("#b4-b1-b6-selectInputReduced")
).toHaveValue("Erwachsene");

});
