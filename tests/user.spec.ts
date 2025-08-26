import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { MainPage } from '../pages/main_page';

const BASE_URL = 'http://localhost:3000';

test('Login with valid credentials', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(BASE_URL, page);
  await loginPage.goto();
  await loginPage.login('test', 'test');

  const mainPage: MainPage = new MainPage(BASE_URL, page);
  await expect(mainPage.logoutButton).toBeVisible();
});


