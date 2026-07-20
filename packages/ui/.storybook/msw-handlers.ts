import { http, HttpResponse } from 'msw';

export const mswHandlers = [
    http.post('*/v1/email', async ({ request }) => {
        const data = await request.json() as any;

        if (data.email === 'error@example.com') {
            return new HttpResponse(null, { status: 500 });
        }

        return HttpResponse.json({ success: true }, { status: 200 });
    }),
];
