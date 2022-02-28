import { test, expect } from '@playwright/test';

test('Math works', async () => {
  expect(1 + 1).toBe(2);
});

test('Page demo', async ({ page }) => {
  await page.goto('https://google.com');

  const searchInput = page.locator('input[title=Search]');
  await searchInput.type('Hello Egghead');
  await searchInput.press('Enter');

  await new Promise(res => setTimeout(res, 2000));
});