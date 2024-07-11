import { HttpResponse, http } from 'msw';
import { RESTAURANTS } from '../data/restaurants.data';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { db } from 'mock/db';
import { BANNER } from '../data/banner.data';
import { log } from '@src/6_shared/lib/debug/log';

const { shop } = endpoints;

//log('[db] restaurants', db.restaurant.getAll());
//log('[shop.handlers]', db.menu.getAll());

const menus = db.menu.getAll();
const restaurants = db.restaurant.getAll();

export const shopHandlers = [
  http.get(baseUrl(shop.restaurants), () => {
    //await delay(100)

    return HttpResponse.json({
      data: restaurants,
    });
  }),

  http.get(baseUrl(shop.banner), async () => {
    return HttpResponse.json({
      data: BANNER,
    });
  }),

  http.get(baseUrl(shop.menus), () => {
    //log('shop.handlers', { menu: db.menu.getAll() });
    return HttpResponse.json({
      data: menus.map(menu => {
        const restaurant = menu.restaurant;
        delete menu.restaurant;
        return { ...menu, restaurantName: restaurant?.name };
      }),
    });
  }),
];

/* export const MENUS = db.menu.getAll().map(menu => {
  const restaurant = menu.restaurant;
  delete menu.restaurant;
  return { ...menu, restaurantName: restaurant?.name };
});
 */
