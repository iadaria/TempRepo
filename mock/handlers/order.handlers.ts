import { OrderStatus } from '@src/5_entities/order/order.types';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { logline } from '@src/6_shared/lib/debug/log';
import { db } from 'mock/db';
import { withAuth } from 'mock/middleware';
import { DefaultBodyType, http, HttpResponse, StrictRequest } from 'msw';

interface ResolverProps {
  request: {
    userId: number;
    _bodyText: string;
  } & StrictRequest<DefaultBodyType>;
}

export const orderHandlers = [
  http.get(
    baseUrl(endpoints.shop.ordersHistory),
    withAuth((resolve: ResolverProps) => {
      const userId = resolve.request.userId;
      const where = { userId: { equals: userId } };
      const orders = db.order.findMany({ where });

      return HttpResponse.json({
        data: orders,
      });
    }),
  ),

  http.get(
    baseUrl(endpoints.order.create),
    withAuth((resolve: ResolverProps) => {
      const userId = resolve.request.userId;
      const where = { userId: { equals: userId } };

      const items = db.cart.findMany({ where });

      logline('found items', { items });

      if (!items.length) {
        return new HttpResponse('Add products into the cart', { status: 400 });
      }

      items.forEach(({ id, ...props }) => {
        db.order.create({ ...props, status: OrderStatus.Proccess });
      });

      db.cart.deleteMany({ where });

      return HttpResponse.json({ data: db.order.findMany({ where }) });
    }),
  ),
];

//https://dev.to/bshadmehr/designing-database-tables-for-an-online-food-ordering-service-eli
