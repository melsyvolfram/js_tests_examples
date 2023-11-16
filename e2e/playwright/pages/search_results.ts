import { Page, Locator, expect } from '@playwright/test';
import config from '../playwright.config';

export class SearchResultsPage {
  readonly page: Page;
  readonly content: Locator;
  readonly heading: Locator;
  readonly text_under_heading: Locator;
  readonly img_searching: Locator;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator('[class*="search-results-page"]');
    this.heading = page.locator('[class*="search-results-page"] [class*="Heading"]');
    this.text_under_heading = page.locator('//*[contains(@class,"search-results-page")]//*[contains(@class,"Heading")]/../p');
    this.img_searching = page.locator('[class*="search-results-page"] img[alt="Mona looking through a globe hologram for code"]');
    this.baseURL = config.use?.baseURL || '';
  }

  async whenNothingWasFound() {
    await expect(this.content).toBeVisible();
    await expect(this.heading).toHaveText('Your search did not match any repositories');
    await expect(this.text_under_heading).toHaveText('You could try one of the tips below.');
    await expect(this.img_searching).toHaveAttribute('src', '/images/modules/search/light.png');
  }

}
