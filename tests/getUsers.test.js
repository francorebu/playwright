const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('./config');

test('API Test - GET request', async ({ page }) => {
    const url = `${BASE_URL}/users?page=2`;

  const response = await page.evaluate(async (url) => {
    const fetchResponse = await fetch(url);
    const json = await fetchResponse.json();
    return {
      status: fetchResponse.status,
      body: json,
    };
  }, url);

  const statusCode = response.status;
  expect(statusCode).toBe(200);
});


