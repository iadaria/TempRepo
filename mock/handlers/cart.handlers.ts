import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { log } from '@src/6_shared/lib/debug/log';
import { db } from 'mock/db';
import { withAuth } from 'mock/middleware';
import { http, HttpResponse } from 'msw';

const { shop } = endpoints;

interface ResolverProps {
  request: { userId: number };
}

export const cartHandlers = [
  http.get(
    baseUrl(shop.cart),
    withAuth(({ request: { userId } }: ResolverProps) => {
      return HttpResponse.json({
        data: db.cart.findMany({ where: { userId: { equals: userId } } }),
      });
    }),
  ),
  http.get(
    baseUrl(shop.cartQuantity),
    withAuth(({ request: { userId } }: ResolverProps) => {
      const items = db.cart.findMany({ where: { userId: { equals: userId } } });
      const sum = items.reduce((sum, item) => sum + item.quantity, 0);
      return HttpResponse.json({
        data: sum,
      });
    }),
  ),
];
