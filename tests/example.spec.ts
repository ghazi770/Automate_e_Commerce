import { test } from '@playwright/test';
import { LoginPage } from '../Pages/Login';
import { loginData } from '../Data/Login_Data';

test.describe('Authentication Tests (POM + Data Driven)', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoBaseURL();
  });

  for (const data of loginData) {
    test(`${data.testCase}`, async ({ page }) => {
      const login = new LoginPage(page);

      await login.login(data.username, data.password);

      if (data.expected === 'success') {
        await login.expectHello(data.name!);
      } else {
        await login.expectError(data.expected);
      }
    });
  }

  test('Password field is masked', async ({ page }) => {
    const login = new LoginPage(page);
    await login.expectPasswordMasked();
  });

  test('Login + Logout flow', async ({ page }) => {
    const login = new LoginPage(page);

    await login.login('ghazi.sham001@mailinator.com', 'SShaheen!021');
    await login.expectHello('ghazi.sham001');

    await login.logout();
    await login.expectLoggedOut();
  });

});
