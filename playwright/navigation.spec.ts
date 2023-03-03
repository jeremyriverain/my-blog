import { expect, test } from '@playwright/test';

test('navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Hi, I am Jérémy.').click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Get in touch' }).click();
  await page.getByRole('link', { name: 'Articles' }).click();
  const link = await page.locator('.articles-list .featured h1')
  const postTitle = await link.innerText()
  const url = await page.url()
  await link.click()
  await page.getByRole('heading', { name: postTitle}).click();
  await expect(page.url()).not.toBe(url)
});