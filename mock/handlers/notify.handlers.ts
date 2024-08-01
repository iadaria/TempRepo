import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { withAuth } from 'mock/middleware';
import { http, HttpResponse } from 'msw';
import { ResolverProps } from './handler.types';
import { db } from 'mock/db';

const { notify } = endpoints;

export const notifyHandlers = [
  http.get(
    baseUrl(notify.fetch),
    withAuth(({ request }: ResolverProps) => {
      const { userId } = request;
      const where = { userId: { equals: userId } };
      return HttpResponse.json({ data: db.notification.findMany({ where }) });
    }),
  ),
];
