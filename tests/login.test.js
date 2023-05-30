const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const { WEB_URL } = require('./config');
const LoginPage = require('../pages/LoginPage');

test.describe('test desc', () => {
  let browser = null;
  let context = null;
  let page = null;
  let loginPage = null;

  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(`${WEB_URL}`);
    loginPage = new LoginPage(page);
  });

  test.afterEach(async () => {
    await context.close();
    await browser.close();
  });

  test('Login ss', async () => {
    await loginPage.loginUser("ss", "ss");
  });

});
