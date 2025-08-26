import { type Page, type Locator } from '@playwright/test';

export class MainPage {
  private pageUrl: string;
  private page: Page;

  readonly logoutButton: Locator;

  constructor(baseUrl: string, page: Page) {
    this.pageUrl = baseUrl;
    this.page = page;

    this.logoutButton = this.page.getByText('Logout');
  }
}

