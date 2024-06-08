import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { http, HttpResponse } from 'msw';

console.log('handlers', { API_BASE_URL });

let count = 0;
let token = nanoid();

export const handlers = [
  http.post(`${API_BASE_URL}/login`, () => {
    console.log('*****msw login');
    return HttpResponse.json({
      data: { token },
    });
  }),
];
