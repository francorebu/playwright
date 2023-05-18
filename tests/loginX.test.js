const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

describe('describe test', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let loginPage = null;

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage = new LoginPage(page); // Corrected assignment
    });

    afterEach(async () => {
        await context.close();
        await browser.close();
    });

    it('Login xx', async () => {
        await loginPage.loginUser("xx","xx");
    });

    it('Login xxx', async () => {
        await loginPage.loginUser("xxx","xxx");
    });
});


