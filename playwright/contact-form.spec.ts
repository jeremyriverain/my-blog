import { test, expect } from '@playwright/test';

test('contact form happy path', async ({ page }) => {
  await page.goto('/contact');
  await page.getByText('Get in touch');
  await expect(page.locator('#form-contact[name=contact][data-netlify=true]')).toBeVisible()
  await page.getByLabel('Your name').type('Jérémy Riverain')
  await page.getByLabel('Email').type('jeremy@riverain.com')
  await page.getByLabel('Phone number').type('09887')
  await page.getByLabel('Subject').type('Test')
  await page.getByLabel('Message').type('Hello world')

  const requestPromise = page.waitForRequest(request => request.url().endsWith('/contact/') && request.method() === 'POST');
  await page.getByText('Send message').click()
  await page.getByText('Thank you. I will answer you as soon as possible.')
  await expect(page.locator('#form-contact')).not.toBeVisible()
  const request = await requestPromise;
  expect(request.postDataJSON()).toMatchObject({"email": "jeremy@riverain.com", "form-name": "contact", "message": "Hello world", "name": "Jérémy Riverain", "phoneNumber": "09887", "subject": "Test"})
});

test('contact form validation rules', async ({ page }) => {
  await page.goto('/contact');
  await page.getByText('Get in touch');
  await page.getByText('Send message').click()
  await page.getByText('Your name is required')
  await page.getByText('Email is required')
  await page.getByText('Phone number is required')
  await page.getByText('Subject is required')
  await page.getByText('Message is required')
  await page.getByText('Sorry, not all fields are filled out correctly.')
  await page.getByLabel('Email').type('jeremyriverain.com')
  await page.getByText('Please enter a valid email address.')
  await page.getByText('Send message').click()
  await page.getByText('Sorry, not all fields are filled out correctly.')
});