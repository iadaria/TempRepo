import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { log } from '@src/6_shared/lib/debug/log';
import { db } from 'mock/db';
import { http, HttpResponse } from 'msw';

const { shop } = endpoints;

export const cartHandlers = [
  http.get(baseUrl(shop.cart), ({ request }) => {
    const userId = 1;
    log('handler', {
      cart: db.cart.findMany({ where: { userId: { equals: userId } } }),
    });
    return HttpResponse.json({
      data: db.cart.findMany({ where: { userId: { equals: userId } } }),
    });
  }),
];
