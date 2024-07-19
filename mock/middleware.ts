import { log } from '@src/6_shared/lib/debug/log';
import { HttpResponse } from 'msw';
import { userByToken } from './data/redis.data';

export function withAuth(resolver: any) {
  return (input: any) => {
    const { request } = input;

    if (!request.headers.get('Authorization')) {
      return new HttpResponse(null, { status: 401 });
    }

    const token = request.headers.get('Authorization');
    const userId = userByToken[token];

    if (!userId) {
      return new HttpResponse('Authorization error', { status: 401 });
    }

    return resolver({ input, request: { ...input.request, userId } });
  };
}
