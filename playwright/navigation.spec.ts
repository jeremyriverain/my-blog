import { test } from '@playwright/test';

test('navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Hi, I am Jérémy.').click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Get in touch' }).click();
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.getByRole('link', { name: 'Create forms faster with Formkit' }).nth(1).click();
  await page.getByRole('heading', { name: 'Create forms faster with Formkit' }).click();
});