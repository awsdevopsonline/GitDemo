import { test } from '@playwright/test';

test('Make HTTP GET call', async ({ page }) => {
  // Intercept and listen to API responses
  const responsePromise = page.waitForResponse(response => 
    response.url().includes('api.github.com') && response.status() === 200
  );

  // Navigate to a page that makes the API call
  await page.goto('https://api.github.com/users/github');

  // Wait for the response
  const response = await responsePromise;

  // Get response body
  const responseBody = await response.json();

  // Log the response
  console.log('Response Status:', response.status());
  console.log('Response Body:', responseBody);

  // Verify the response
  if (response.status() === 200) {
    console.log('GET request successful!');
  }
});

test('Make GET request using fetch API', async ({ page }) => {
  await page.goto('about:blank');

  // Execute fetch request in browser context
  const response = await page.evaluate(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    return {
      status: res.status,
      data: data
    };
  });

  console.log('Response Status:', response.status);
  console.log('Response Data:', response.data);
});
