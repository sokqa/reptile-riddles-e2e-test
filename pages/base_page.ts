import { type Page } from '@playwright/test';

export class BasePage {
  readonly pageUrl: string;
  protected page: Page;

  constructor(baseUrl: string, urlSuffix: string, page: Page) {
    this.pageUrl = baseUrl + urlSuffix;
    this.page = page;
  }
}

