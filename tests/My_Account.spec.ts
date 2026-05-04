import { test, expect } from '@playwright/test';
import { My_AccountPage } from '../Pages/My_Account';

test.describe('Account screen test cases Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/my-account/', {
      waitUntil: 'domcontentloaded',     });

    await page.locator("[name='username']")
      .fill('ghazi.sham001@mailinator.com');

    await page.locator("#password")
      .fill('SShaheen!021');

   await Promise.all([
  page.waitForNavigation(),
  page.locator("[name='login']").click()
]);

   
      await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  });


  test('Verify that Order option is visible and clickable', async ({ page }) => {

 const acc = new My_AccountPage(page);
    await acc.clickOrderOption();
  });


  test('Verify that Downloads option is visible and clickable', async ({ page }) => {

const acc = new My_AccountPage(page);
    await acc.clickDownloadsOption();

});

test('Verify that Addresses option is visible and clickable', async ({ page }) => {
const acc = new My_AccountPage(page);
    await acc.clickAddressOption();
});

test('Verify that Account details option is visible and clickable', async ({ page }) => {
  
const acc = new My_AccountPage(page);
    await acc.clickAccountDetailsOption();

});  

 
   
});