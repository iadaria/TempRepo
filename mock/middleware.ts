import { HttpResponse } from 'msw';

export function withAuth(resolver: any) {
  return (input: any) => {
    const { request } = input;

    if (!request.headers.get('Authorization')) {
      return new HttpResponse(null, { status: 401 });
    }

    return resolver(input);
  };
}
