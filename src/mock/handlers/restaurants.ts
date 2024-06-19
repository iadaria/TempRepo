import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from './data/restaurants.data';
import { baseUrl } from '../utils';
import { endpoints } from '@src/shared/consts/endpoints';

export const restaurantsHandlers = [
  http.get(baseUrl(endpoints.shop.restaurants), () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),
];
