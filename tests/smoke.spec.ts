import { test, expect } from "@playwright/test";

test("UI Smoke – landing page loads and CTAs visible", async ({ page }) => {
  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");

  await page.waitForLoadState("networkidle");

  await expect(page.getByPlaceholder(/ort|postleitzahl/i)).toBeVisible();

  await expect(
    page.getByRole("button", { name: /suche starten/i }).first()
  ).toBeVisible();
});
