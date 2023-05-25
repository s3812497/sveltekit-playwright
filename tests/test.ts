import { expect, test } from '@playwright/test';

test('my endpoint works correctly', async ({ request }) => {
	const response = await request.get('/my-endpoint');
	expect(await response.json()).toEqual({ a: 1, b: 2 });
});