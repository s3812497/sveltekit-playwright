import { json } from '@sveltejs/kit';

export async function GET() {
	const data = {
		a: 1,
		b: 2
	};
	return json(data);
}
