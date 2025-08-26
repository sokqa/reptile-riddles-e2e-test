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
    this.pageUrl = this.baseUrl + this.urlSuffix;
    this.page = page;
    
    this.userNameField = this.page.locator('#user-name');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.getByRole('button', { name: 'LOGIN', exact: true });
  }

  async goto() {
    await this.page.goto(this.pageUrl);
  }

  async login(user: string, password: string) {
    await this.userNameField.fill(user);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

}
