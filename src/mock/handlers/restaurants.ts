import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from './data/restaurants.data';

import { endpoints } from '@src/shared/consts/endpoints';
import { baseUrl } from '@src/shared/lib/api/baseUrl';

const { shop } = endpoints;

export const restaurantsHandlers = [
  http.get(baseUrl(shop.restaurants), () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),
];
