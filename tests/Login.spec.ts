import test, { test as setup, expect } from '@playwright/test';

test('authenticate', async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/my-account/');

  await page.locator("[name='username']")
    .fill('ghazi.sham001@mailinator.com');

  await page.locator("#password")
    .fill('SShaheen!021');

  await page.locator("[name='login']")
    .click();

  // Wait until logged in
  await expect(page.getByText('Hello ghazi.sham001')).toBeVisible();
});