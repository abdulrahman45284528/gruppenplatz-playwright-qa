import { test } from "@playwright/test";
import { SearchMapPage } from "../pages/searchMap.page";
import { handleConsent } from "../utils/consent";

test("Search by city returns results and renders map/list", async ({ page }) => {
  const smp = new SearchMapPage(page);

  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");
  await handleConsent(page);

  await smp.searchLocation("Berlin");
  await smp.expectResultsVisible();
});
