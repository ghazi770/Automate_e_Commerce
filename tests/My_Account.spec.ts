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

    await page.locator("[name='login']")
      .click();

   
    await expect(page.getByText(/hello ghazi\.sham001/i)).toBeVisible();
  });

  test('Verify that Order option is visible and clickable', async ({ page }) => {

 const sidebar = page.getByRole('navigation');
 await sidebar.getByRole('link', { name: 'Orders' }).click();
 await expect(page).toHaveURL('https://practice.automationtesting.in/my-account/orders/');
  });


test('Verify that Downloads option is visible and clickable', async ({ page }) => {

const sidebar = page.getByRole('navigation');
 await sidebar.getByRole('link', { name: 'Downloads' }).click();
 await expect(page).toHaveURL('https://practice.automationtesting.in/my-account/downloads/');

});

test('Verify that Addresses option is visible and clickable', async ({ page }) => {
const sidebar = page.getByRole('navigation');
 await sidebar.getByRole('link', { name: 'Addresses' }).click();
 await expect(page).toHaveURL('https://practice.automationtesting.in/my-account/');

 });   

test('Verify that Account details option is visible and clickable', async ({ page }) => {
  
const sidebar = page.getByRole('navigation');
 await sidebar.getByRole('link', { name: 'Account Details' }).click();
await expect(page).toHaveURL('https://practice.automationtesting.in/my-account/edit-account/');

});   
   
});