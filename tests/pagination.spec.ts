import { test, expect } from "@playwright/test";
import { handleConsent } from "../utils/consent";

test("Pagination – next page loads new results", async ({ page }) => {
  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");
  await handleConsent(page);

  await page.getByPlaceholder(/ort|postleitzahl/i).fill("Berlin");
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: /gruppen suchen/i }).click();

  const firstItemText = await page.locator(".map-list-item").first().innerText();

  await page.getByRole("button", { name: /next|weiter/i }).click();
  await page.waitForLoadState("networkidle");

  const secondPageItemText = await page.locator(".map-list-item").first().innerText();

  expect(secondPageItemText).not.toEqual(firstItemText);
});
