import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page';
import { MainPage } from '../pages/main_page';
import { RegistrationPage } from '../pages/registration_page';

const BASE_URL = 'http://localhost:3000';

test('Login with valid credentials', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(BASE_URL, page);
  await loginPage.goto();
  await loginPage.login('test', 'test');

  const mainPage: MainPage = new MainPage(BASE_URL, page);
  await expect(page).toHaveURL(mainPage.pageUrl);
  await expect(mainPage.logoutButton).toBeVisible();
});

test('Login with invalid credentials', async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(BASE_URL, page);
  await loginPage.goto();
  await loginPage.login('not-a-real-user', 'nonexistent-password');
  
  await expect(page).toHaveURL(loginPage.pageUrl);
  await expect(loginPage.userNameField).toBeEmpty();
  await expect(loginPage.passwordField).toBeEmpty();
});

test('Register user', async ({ page }) => {
  const registrationPage: RegistrationPage = new RegistrationPage(BASE_URL, page);
  const loginPage: LoginPage = new LoginPage(BASE_URL, page);
  const mainPage: MainPage = new MainPage(BASE_URL, page);

  const user: string = getUserName();
  const email: string = `${user}@test.com`;
  const password: string = 'my-plain-password';

  await registrationPage.goto();
  await registrationPage.register(user, email, password);
  await expect(page, 'should be back on login page').toHaveURL(loginPage.pageUrl);

  await loginPage.login(user, password);
  await expect(mainPage.logoutButton, 'should be logged in').toBeVisible();
});

[
  {name: 'Empty email', user: getUserName(), email: '', password: 'test'},
  {name: 'Incorrect email format', user: getUserName(), email: 'test', password: 'somewhatMoreComplex#Password'},
  {name: 'Empty password', user: getUserName(), email: 'test@test.hu', password: ''}
].forEach(({ name, user, email, password }) => {
  test(`Failed registration: ${name} @failed-reg`, async ({ page }) => {
    const registrationPage: RegistrationPage = new RegistrationPage(BASE_URL, page);
    const loginPage: LoginPage = new LoginPage(BASE_URL, page);
    const mainPage: MainPage = new MainPage(BASE_URL, page);

    await registrationPage.goto();
    await registrationPage.register(user, email, password);
    
    await loginPage.goto();  // Failed registration does navigate here but I think that should be changed
    await loginPage.login(user, password);
    await expect(page, 'should still be on login page').toHaveURL(loginPage.pageUrl);
    await expect(loginPage.loginButton).toBeVisible();
 })
})

function getUserName() {
  return `user-${Date.now()}`;
}

