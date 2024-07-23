import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { log } from '@src/6_shared/lib/debug/log';
import { db } from 'mock/db';
import { withAuth } from 'mock/middleware';
import { DefaultBodyType, http, HttpResponse, StrictRequest } from 'msw';

const { shop } = endpoints;

interface ResolverProps {
  request: {
    userId: number;
    _bodyText: string;
  } & StrictRequest<DefaultBodyType>;
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

  http.post(
    baseUrl(shop.cartAdd),
    withAuth(async ({ request }: ResolverProps) => {
      const data: { id: number; digit: number } = JSON.parse(request._bodyText);
      const { userId } = request;

      const where = {
        userId: { equals: userId },
        productId: { equals: data.id },
      };

      const item = db.cart.findFirst({ where });
      if (item) {
        item.quantity += data.digit;
        item.totalPrice += data.digit;

        db.cart.update({ where, data: { ...item } });

        log('cart.handler', { item });

        return HttpResponse.json({ data: item });
      }
      return new HttpResponse(null, { status: 404 }); // what best? see example
    }),
  ),
];
