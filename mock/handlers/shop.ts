import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from '../data/restaurants.data';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { BANNER } from '../data/banner.data';
import { logline } from '@src/6_shared/lib/debug/log';

const { shop } = endpoints;

export const shopHandlers = [
  http.get(baseUrl(shop.restaurants), () => {
    return HttpResponse.json({
      data: RESTAURANTS,
    });
  }),

  http.get(baseUrl(shop.banner), async () => {
    return HttpResponse.json({
      data: BANNER,
    });
  }),
];
