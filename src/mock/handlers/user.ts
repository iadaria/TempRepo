import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { HttpResponse, http } from 'msw';
import { endpoints } from '@src/shared/consts/endpoints';
import { baseUrl } from '@src/shared/lib/api/baseUrl';

let token = nanoid();

export const userHandlers = [
  http.post(baseUrl(endpoints.account.login), () => {
    console.log('*****msw login');
    return HttpResponse.json({
      data: { token },
    });
  }),
];
