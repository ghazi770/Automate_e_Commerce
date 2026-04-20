import { test, expect } from '@playwright/test';

test('Register with random user and auto-login verification', async ({ page }) => {

  // Generate random user
  const randomEmail = `user_${Date.now()}@mailinator.com`;
  const password = 'Test@12345';

  // Go to register page
  await page.goto('https://practice.automationtesting.in/my-account/');

  // Fill registration form
  await page.locator("[name='username']").fill(randomEmail);

await page.locator("[id='reg_password']").fill(password);
  

  // Submit
  await page.locator("[name='register']").click();

  // Assert registration success message
 // await expect(page.locator('.result')).toHaveText('Your registration completed');

//   // Continue after registration
//   await page.click('text=Continue');

//   // ✅ Assertion: User is logged in

//   // 1. URL check (should NOT be login page)
//   await expect(page).toHaveURL('https://demo.nopcommerce.com/');

//   // 2. "My account" should be visible (means logged in)
//   await expect(page.locator('text=My account')).toBeVisible();

//   // 3. Logout button should be visible
//   await expect(page.locator('text=Log out')).toBeVisible();
});