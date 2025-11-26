import {expect, test} from '@playwright/test';
test('E2E add two numbers', async ({page}) => {
    await page.goto('/');
    const inpput1 = page.locator('#number1');
    const inpput2 = page.locator('#number2');

    await inpput1.fill('4');
    await inpput2.fill('8');
    await page.getByRole('button').click();
    await expect(page.locator('#addResult')).toContainText('12');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Calculator');
    await page.waitForTimeout(2000);
});