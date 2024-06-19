import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { HttpResponse, http } from 'msw';
import { baseUrl } from '../utils';

let token = nanoid();

export const userHandlers = [
  http.post(baseUrl('/login'), () => {
    console.log('*****msw login');
    return HttpResponse.json({
      data: { token },
    });
  }),
];
