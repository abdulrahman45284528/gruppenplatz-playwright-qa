import { Page, Locator, expect } from "@playwright/test";

export class SearchMapPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly results: Locator;
  readonly detailsLink: Locator;
  readonly nextPageBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Prefer semantic selectors (resilient to OutSystems changes)
    this.searchInput = page.getByPlaceholder(/ort|postleitzahl/i);
    this.searchButton = page.getByRole("button", { name: /gruppen suchen/i });

    this.results = page.locator(".map-list-item");
    this.detailsLink = page.getByText("Details", { exact: true });

    this.nextPageBtn = page.getByRole("button", { name: /next|weiter/i });
  }

  async searchLocation(value: string) {
    await this.searchInput.fill(value);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
    await this.searchButton.click();

    // Wait for async update (important with React + API)
    await this.page.waitForTimeout(2000);
  }

  async expectResultsVisible() {
    await expect(this.results.first()).toBeVisible();
  }
}
