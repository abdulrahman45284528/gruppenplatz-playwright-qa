import { test, expect } from "@playwright/test";
import { handleConsent } from "../utils/consent";

test("Details page opens for a result", async ({ page }) => {
  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");

  await page.getByPlaceholder(/ort|postleitzahl/i).fill("Berlin");
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: /gruppen suchen/i }).click();

  const firstResult = page.locator(".map-list-item").first();
  await expect(firstResult).toBeVisible();

  await firstResult.getByText("Details").click();

  await expect(page).toHaveURL(/details|gruppe|therapie/i);
});
