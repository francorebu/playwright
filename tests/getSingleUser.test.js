const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('./config');

test('API Test - GET request for user', async ({ page }) => {
  const userId = 2;
  const url = `${BASE_URL}/users/${userId}`;

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
  expect(response.body.data.id).toBe(userId);
  expect(response.body.data.email).toBe("janet.weaver@reqres.in");
  console.log('Response:', response.body); // Print the response to the console
});
