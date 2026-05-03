import { BasePage } from '../Base/Base';
import { expect, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  username = this.page.getByLabel('Username or email address');
  password = this.page.locator('#password');
  loginBtn = this.page.getByRole('button', { name: 'Login' });

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);

    await this.handleOverlays(); // ✅ important
    await this.loginBtn.click();
  }

  async expectHello(name: string) {
    await expect(
      this.page.getByText(new RegExp(`Hello\\s+${name}`, 'i'))
    ).toBeVisible();
  }

  async expectError(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async expectPasswordMasked() {
    await expect(this.password).toHaveAttribute('type', 'password');
  }

  async logout() {
    await this.page.getByText('Logout').click();
  }

  async expectLoggedOut() {
    await expect(this.loginBtn).toBeVisible();
  }
}