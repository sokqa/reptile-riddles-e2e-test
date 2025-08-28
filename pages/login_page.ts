import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base_page';

const URL_SUFFIX: string = '/login';

export class LoginPage extends BasePage {
  
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  private loginButton: Locator;

  protected constructor(baseUrl: string, page: Page) {
    super(baseUrl, URL_SUFFIX, page);
    
    this.userNameField = this.page.locator('#user-name');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.getByRole('button', { name: 'LOGIN', exact: true });
  }

  async login(user: string, password: string) {
    await this.userNameField.fill(user);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

}
