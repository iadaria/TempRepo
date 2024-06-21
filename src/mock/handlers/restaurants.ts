import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from './data/restaurants.data';

import { endpoints } from '@src/shared/consts/endpoints';
import { baseUrl } from '@src/shared/lib/api/baseUrl';

export const restaurantsHandlers = [
  http.get(baseUrl(endpoints.shop.restaurants), () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),
];
