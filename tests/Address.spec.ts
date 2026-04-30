import { test, expect } from '@playwright/test';

test.describe('Login Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/my-account/', {
      waitUntil: 'domcontentloaded',
    });

    await page.locator("[name='username']")
      .fill('ghazi.sham001@mailinator.com');

    await page.locator("#password")
      .fill('SShaheen!021');

    await Promise.all([
      page.waitForNavigation(),
      page.locator("[name='login']").click()
    ]);

    await expect(page.getByText(/hello ghazi\.sham001/i)).toBeVisible();

    // ✅ FIX: scope to sidebar navigation
    await page.locator('nav').getByRole('link', { name: 'Addresses' }).click();

    await expect(page).toHaveURL(/edit-address/);
  });

  test('Verify that Account details option is visible and clickable', async ({ page }) => {

   const billingSection = page
    .getByRole('heading', { name: 'Billing Address' })
    .locator('xpath=ancestor::div[contains(@class,"col-1")]');


    await expect(billingSection).toContainText('Ghazi Shamroz');
    await expect(billingSection).toContainText('Shahdara Lahore');
    await expect(billingSection).toContainText('Shahdara');
    await expect(billingSection).toContainText('Pakistan');
    await expect(billingSection).toContainText('0050');
  });

});