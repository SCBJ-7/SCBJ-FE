import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const title = page.getByRole('heading', { name: 'Vite + React' });

  // Expect a title "to contain" a substring.
  await expect(title).toBeVisible();
});
