import { API_BASE_URL } from '@env';
import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from './data/restaurants.data';
import { baseUrl } from '../utils';

export const restaurantsHandlers = [
  http.get(baseUrl('/restaurants'), () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),
];
