import { Page } from "@playwright/test";


export async function handleConsent(page: Page) {
  try {
    const acceptBtn = page.locator('button:has-text("Alle akzeptieren"), button:has-text("Accept")');
    if (await acceptBtn.isVisible({ timeout: 5000 })) {
      await acceptBtn.click();
      await page.waitForTimeout(1000);
    }
  } catch (e) {
  }
}
