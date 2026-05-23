const { test, expect } = require('@playwright/test');

test('logowanie i podstawowa nawigacja w aplikacji', async ({ page }) => {
  await page.goto('/');

  await page.fill('input[placeholder="jan.kowalski@firma.pl"]', 'admin@flota.pl');
  await page.fill('input[placeholder="••••••••"]', 'secret');
  await page.click('text=ZALOGUJ SIĘ');

  await expect(page.getByText('Twój wyjazd na dzisiaj')).toBeVisible();
  await page.click('text=ODBIERZ POJAZD');
  await expect(page.getByText('Odbiór pojazdu')).toBeVisible();
});
