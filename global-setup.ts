import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/");

  // Accept cookies once
  const acceptBtn = page.locator('button:has-text("Alle akzeptieren"), button:has-text("Accept")');

  if (await acceptBtn.isVisible({ timeout: 5000 })) {
    await acceptBtn.click();
  }

  // Save storage state
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
