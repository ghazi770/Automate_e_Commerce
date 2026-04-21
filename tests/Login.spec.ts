import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/my-account/');
  });

  test('Case_#001: Verify that user login with Valid Email and Password', async ({ page }) => {
    await page.fill("[name='username']", 'ghazi.sham001@mailinator.com');
    await page.fill("#password", 'SShaheen!021');
    await page.click("[name='login']");

    await expect(
  page.getByText(/Hello\s+ghazi\.sham001/i)
).toBeVisible();


  });

  
  test('Case_#002: Verify that user login with Valid Username and Password', async ({ page }) => {
    await page.fill("[name='username']", 'ghazi.sham001');
    await page.fill("#password", 'SShaheen!021');
    await page.click("[name='login']");

       await expect(
  page.getByText(/Hello\s+ghazi\.sham001/i)
).toBeVisible();

  });

test('Case_#003: Verify that error is shown with invalid password', async ({ page }) => {
    await page.fill("[name='username']", 'ghazi.sham001');
    await page.fill("#password", 'wrongpassword');
    await page.click("[name='login']");

    await expect(page.getByText('The password you entered for the username ghazi.sham001 is incorrect. Lost your password?'))
    .toBeVisible();
  });

test('Case_#004: Verify that error is shown with invalid email', async ({ page }) => {
    await page.fill("[name='username']", 'invalid.email@mailinator.com');
    await page.fill("#password", 'SShaheen!021');
    await page.click("[name='login']");

    await expect(page.getByText('Error: A user could not be found with this email address.'))
    .toBeVisible();
  });


test('Case_#005: Verify that error is shown with empty email', async ({ page }) => {
    
    await page.fill("#password", 'SShaheen!021');
    await page.click("[name='login']");

    await expect(page.getByText('Error: Username is required.'))
    .toBeVisible();
  });


  test('Case_#006: Verify that error is shown with Empty password', async ({ page }) => {
    await page.fill("[name='username']", 'invalid.email@mailinator.com');
    await page.click("[name='login']");

    await expect(page.getByText('Error: Password is required.'))
    .toBeVisible();
  });


    test('Case_#007: Verify that error is shown when click on empty login & Password ', async ({ page }) => {
    await page.click("[name='login']");

    await expect(page.getByText('Error: Username is required.'))
    .toBeVisible();


  });


  test('Case_#008: Verify password field is masked', async ({ page }) => {
  const passwordField = page.locator('#password');
  await expect(passwordField).toHaveAttribute('type', 'password');
});



test('Case_#009:: Login Authentication', async ({ page }) => {
    await page.fill("[name='username']", 'ghazi.sham001@mailinator.com');
    await page.fill("#password", 'SShaheen!021');
    await page.click("[name='login']");

    await expect(
  page.getByText(/Hello\s+ghazi\.sham001/i)
).toBeVisible();



  // 7: Logout
  await page.click('text=Logout');

  // Assertion: verify logout (login button visible again)
  await expect(page.locator('[name="login"]')).toBeVisible();

  // 8: Press browser back button
  await page.goBack();

  // 9: Verify user is NOT logged in
  await expect(page.getByText(/Hello/i)).not.toBeVisible();
  await expect(page.locator('[name="login"]')).toBeVisible();
});


});