const { test, expect } = require('@playwright/test');

test('odbiór pojazdu i przejście do ekranu sukcesu', async ({ page }) => {
  await page.goto('/');

  await page.fill('input[placeholder="jan.kowalski@firma.pl"]', 'admin@flota.pl');
  await page.fill('input[placeholder="••••••••"]', 'secret');
  await page.click('text=ZALOGUJ SIĘ');

  await expect(page.getByText('Twój wyjazd na dzisiaj')).toBeVisible();
  await page.click('text=ODBIERZ POJAZD');

  await expect(page.getByText('Odbiór pojazdu')).toBeVisible();

  await page.click('text=Kluczyki i dokumenty są w pojeździe');
  await page.click('text=Wnętrze jest czyste i zadbane');
  await page.click('text=Brak nowych, niezgłoszonych uszkodzeń');

  await page.click('text=ROZPOCZNIJ TRASĘ');
  await expect(page.getByText('Szerokiej drogi!')).toBeVisible();
});
