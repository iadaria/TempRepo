import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
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
    withAuth(({ request: { userId } }: ResolverProps) => {
      return HttpResponse.json({
        data: db.order.findMany({ where: { userId: { equals: userId } } }),
      });
    }),
  ),
];
