import { API_BASE_URL } from '@env';
import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from './data/restaurants.data';

export const restaurantsHandlers = [
  http.get(`${API_BASE_URL}/restaurants`, () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),
];
