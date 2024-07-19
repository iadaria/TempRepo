import { API_BASE_URL } from '@env';
import { nanoid } from '@reduxjs/toolkit';
import { HttpResponse, http } from 'msw';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';

export const token = '28Zb1iJA92kbv9FQTEbDy';

export const userHandlers = [
  http.post(baseUrl(endpoints.account.login), () => {
    console.log('*****msw login');
    return HttpResponse.json({
      data: { token },
    });
  }),
];
