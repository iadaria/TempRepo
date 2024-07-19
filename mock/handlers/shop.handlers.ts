import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { menus, restaurants } from 'mock/db';
import { BANNER } from '../data/banner.data';

const { shop } = endpoints;

export const shopHandlers = [
  /* http.get(baseUrl(shop.restaurants), () => {
    //await delay(100)

    return HttpResponse.json({
      data: restaurants,
    });
  }), */

  http.get(baseUrl(shop.banner), async () => {
    return HttpResponse.json({
      data: BANNER,
    });
  }),
  /* 
  http.get(baseUrl(shop.menus), () => {
    return HttpResponse.json({
      data: menus.map(({ restaurant, ...menu }) => {
        return { ...menu, restaurantName: restaurant?.name };
      }),
    });
  }), */
];
