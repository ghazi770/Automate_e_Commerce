import { test, expect } from '@playwright/test';

test.describe('Registeration Testcases', () => {

 // Generate random user
  const randomEmail = `user_${Date.now()}@mailinator.com`;
  const password = 'Test@12345';
 const ExistingEmail = 'ghazi.sham001@mailinator.com';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.automationtesting.in/my-account/', {
    waitUntil: 'domcontentloaded',
  });
});

 test('Case_#001: Verify the Registeration with valid Email & Password', async ({ page }) => {

  await page.locator("[name='username']").fill(randomEmail);
  await page.locator("[id='reg_password']").fill(password);
  await page.locator("[name='register']").click();

  });


  test('Case_#002: Verify the Registeration Fail with invalid Email', async ({ page }) => {
   
  await page.getByRole('textbox', { name: 'Email address *', exact: true }).fill('Khanghazi770@21');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Error: Please enter a valid email address.');

});


test('Case_#003: Verify the Registeration Fail with Empty Email', async ({ page }) => {
  await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill('Shaheen@21655');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Error: Please provide a valid email address.');
 });


test('Case_#004: Verify the Registeration Fail with Empty Password ', async ({ page }) => {
  
  await page.getByRole('textbox', { name: 'Email address *', exact: true }).
  fill('ghazi.shamroz003@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Error: Please enter an account password.');

});


 test('Case_#005: Verify the Registeration Fail with esisting valid Email', async ({ page }) => {

  await page.locator("[name='username']").fill(ExistingEmail);
  await page.locator("[id='reg_password']").fill(password);
  await page.locator("[name='register']").click();
 await page.getByText('Error: An account is already registered with your email address. Please login.');

  });

});