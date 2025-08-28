import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base_page';

const URL_SUFFIX: string = '';

export class MainPage extends BasePage {
  readonly logoutButton: Locator;

  constructor(baseUrl: string, page: Page) {
    super(baseUrl, URL_SUFFIX, page);
    this.logoutButton = this.page.getByText('Logout');
  }
}

