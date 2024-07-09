import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { FILTERS } from 'mock/data/filter.data';
import { db } from 'mock/db';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  //http.get(baseUrl(shop.search + '/:wants'), ({ params }) => {
  http.get(baseUrl(shop.search), ({ request }) => {
    const url = new URL(request.url);
    // Givn "/search?wants=text"
    const wants = url.searchParams.get('wants') || undefined;
    const type = url.searchParams.get('type') || 'restaurant';

    // Simple example
    const searched = db[type].findMany({
      where: {
        name: {
          contains: wants,
        },
      },
    });

    return HttpResponse.json({ data: searched });
  }),
];
