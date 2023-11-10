import { Page, Locator, expect } from '@playwright/test';

export class SearchComponent {
  readonly page: Page;
  readonly input: Locator;
  readonly input_text: Locator;
  readonly input_overlay: Locator;
  readonly prompt: Locator;
  readonly action_list_item: Locator;
  readonly action_list_item_description: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('[class="search-input"]');
    this.input_text = page.locator('[data-target="qbsearch-input.inputButtonText"]');
    this.input_overlay = page.locator('input[id="query-builder-test"]');
    this.prompt = page.locator('[class*="search-feedback-prompt"] a[class*="Link"]');
    this.action_list_item = page.locator('[class="ActionListItem-label text-normal"] span');
    this.action_list_item_description = page.locator('[class="ActionListItem-description QueryBuilder-ListItem-trailing"]');
  }

  async fillOverlayAndSearch(text) {
    await expect(this.input_overlay).toBeVisible();
    await expect(this.prompt).toHaveText('Search syntax tips');
    await expect(this.prompt).toHaveAttribute('href', 'https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax');
    await this.input_overlay.fill(text);
    await expect(this.action_list_item).toBeVisible();
    await expect(this.action_list_item).toHaveText(text);
    await expect(this.action_list_item_description).toHaveText('Search all of GitHub');
    await this.action_list_item.click();
  }

}
