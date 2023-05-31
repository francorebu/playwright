const { test, expect, request } = require('@playwright/test');
const { BASE_URL } = require('./config');

test('API Test - POST request', async ({ page }) => {
  const url = `${BASE_URL}/users`;
  const body = {
    name: 'morpheus',
    job: 'leader',
  };

  console.log('Request Body:', body); // Print the request body to the console

  const response = await page.evaluate(async ({ url, body }) => {
    const fetchResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await fetchResponse.json();

    return {
      status: fetchResponse.status,
      body: json,
    };
  }, { url, body });

  const statusCode = response.status;
  expect(statusCode).toBe(201);

  console.log('Response:', response.body); // Print the response to the console
});


