import { API_BASE_URL } from '@env';
import { http, HttpResponse } from 'msw';

console.log('handlers', { API_BASE_URL });

export const handlers = [
  http.get(`${API_BASE_URL}/user`, () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),
];
