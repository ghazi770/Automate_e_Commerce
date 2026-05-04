import { Locator, Page, expect } from '@playwright/test';

export class My_AccountPage {
  readonly page: Page;
  readonly sidebar: Locator;
  readonly orderOption: Locator;
  readonly downloadsOption: Locator;
  readonly addressOption: Locator;
  readonly accountDetailsOption: Locator;

  // URLs
  readonly ordersURL: string = 'https://practice.automationtesting.in/my-account/orders/';
  readonly downloadsURL: string = 'https://practice.automationtesting.in/my-account/downloads/';
  readonly addressesURL: string = 'https://practice.automationtesting.in/my-account/edit-address/';
  readonly accountDetailsURL: string = 'https://practice.automationtesting.in/my-account/edit-account/';

  constructor(page: Page) {
    this.page = page;
    this.sidebar = this.page.getByRole('navigation');
    this.orderOption = this.sidebar.getByRole('link', { name: 'Orders' });
    this.downloadsOption = this.sidebar.getByRole('link', { name: 'Downloads' });
    this.addressOption = this.sidebar.getByRole('link', { name: 'Addresses' });
    this.accountDetailsOption = this.sidebar.getByRole('link', { name: 'Account Details' });
  }

  async clickOrderOption() {
    await this.orderOption.click();
    await expect(this.page).toHaveURL(this.ordersURL);
  }

  async clickDownloadsOption() {
    await this.downloadsOption.click();
    await expect(this.page).toHaveURL(this.downloadsURL);
  }

  async clickAddressOption() {
    await this.addressOption.click();
    await expect(this.page).toHaveURL(this.addressesURL);
  }

  async clickAccountDetailsOption() {
    await this.accountDetailsOption.click();
    await expect(this.page).toHaveURL(this.accountDetailsURL);
  }
}