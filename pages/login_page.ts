import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  private baseUrl: string;
  private urlSuffix: string = '/login';
  private pageUrl: string;

  private page: Page;
  
  private userNameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(baseUrl: string, page: Page) {
    this.baseUrl = baseUrl;
    pageUrl = baseUrl + urlSuffix;
    this.page = page;
    
    userNameField = page.locator('#user-name');
    passwordField = page.locator('#password');
  }


}
