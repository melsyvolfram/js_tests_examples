import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main';
import { SearchResultsPage } from '../pages/search_results';
import { SearchComponent } from '../components/search';

test('getting started should contain table of contents', async ({ page }) => {
  await page.goto('');
  const mainPage = new MainPage(page);
  await expect(mainPage.header_menu).toBeVisible();

  const searchComponent = new SearchComponent(page);
  await expect(mainPage.header_menu.locator(searchComponent.input)).toBeVisible();
  await expect(searchComponent.input_text).toHaveText('Search or jump to...');
  await searchComponent.input.click();

  const text = 'veryLongTextForSearchWhichWillNotBeFound';
  await searchComponent.fillOverlayAndSearch(text);
  await expect(page).toHaveURL(`/search?q=${text}&type=repositories`);
  
  const searchResultsPage = new SearchResultsPage(page);
  await searchResultsPage.whenNothingWasFounded();
  await expect(searchComponent.input_text).toHaveText(text);
});
