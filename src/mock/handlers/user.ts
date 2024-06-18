import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { HttpResponse, http } from 'msw';

let token = nanoid();

export const userHandlers = [
  http.post(`${API_BASE_URL}/login`, () => {
    console.log('*****msw login');
    return HttpResponse.json({
      data: { token },
    });
  }),
];
