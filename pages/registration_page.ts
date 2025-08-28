import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base_page';

const  URL_SUFFIX: string = '/register';

export class RegistrationPage extends BasePage {

  readonly userNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  private registerButton: Locator;

  constructor(baseUrl: string, page: Page) {
    super(baseUrl, URL_SUFFIX, page);
    this.userNameField = this.page.locator('#user-name');
    this.emailField = this.page.locator('#email');
    this.passwordField = this.page.locator('#password');
    this.registerButton = this.page.getByRole('button', { name: 'SIGN UP', exact: true });
  }

  async register(user: string, email: string, password: string) {
    await this.userNameField.fill(user);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.registerButton.click();
  }
}

