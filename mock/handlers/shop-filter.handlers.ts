// THE SERVER PART

import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { FILTERS } from 'mock/data/filter.data';
import { db } from 'mock/db';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  // Simple example
  http.get(baseUrl(shop.search), ({ request }) => {
    const url = new URL(request.url);
    // Givn "/search?wants=text"
    const wants = url.searchParams.get('wants') || undefined;
    const types = url.searchParams.get('type') || ['restaurant', 'menu'];

    console.log({ types });

    const found = types.reduce((toReturn, type, index) => {
      console.log({ type, wants });
      const rows = db[type].findMany({ where: { name: { contains: wants } } });
      console.log({ rows });
      return { ...toReturn, [type]: rows };
    }, {});

    return HttpResponse.json({ data: found });
  }),
];
