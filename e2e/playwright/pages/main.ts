import { Page, Locator } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly header: Locator;
  readonly header_menu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header[class*="Header-old header-logged-out"]');
    this.header_menu = page.locator('header [class*="header-menu-wrapper"]');
  }

}
