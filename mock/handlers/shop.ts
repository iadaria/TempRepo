import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from '../data/restaurants.data';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { BANNER } from '../data/banner.data';
import { logline } from '@src/6_shared/lib/debug/log';
import { db } from 'mock/db';

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

  http.get(baseUrl(shop.menus), () => {
    return HttpResponse.json({
      data: db.menu.getAll().map(menu => {
        const restaurant = menu.restaurant;
        delete menu.restaurant;
        return { ...menu, restaurant: restaurant?.name };
      }),
    });
  }),
];

export const MENUS = db.menu.getAll().map(menu => {
  const restaurant = menu.restaurant;
  delete menu.restaurant;
  return { ...menu, restaurantName: restaurant?.name };
});
