import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class MainPage extends BasePage {
  private static URL_SUFFIX: string = '';
  readonly logoutButton: Locator;

  constructor(baseUrl: string, page: Page) {
    super(baseUrl, this.URL_SUFFIX, page);
    this.logoutButton = this.page.getByText('Logout');
  }
}

