import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://example.com/user', () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),
];
