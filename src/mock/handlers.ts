import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { http, HttpResponse, PathParams } from 'msw';

console.log('handlers', { API_BASE_URL });

let count = 0;
let token = nanoid();

export const handlers = [
  // Login
  http.post(`${API_BASE_URL}/login`, () => {
    return HttpResponse.json({
      data: { token, user: { firstName: 'Daria', lastName: 'Iakimova' } },
    });
  }),
];
