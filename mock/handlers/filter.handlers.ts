// THE SERVER PART

import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { FILTERS } from 'mock/data/filter.data';
import { db } from 'mock/db';
import { log, logline } from '@src/6_shared/lib/debug/log';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  // Simple example
  http.get(baseUrl(shop.search), ({ request }) => {
    const url = new URL(request.url);
    //log('handlers', { url });
    // Givn "/search?wants=text"
    const wants = url.searchParams.get('wants') || undefined;
    //log('handlers', { wants });
    const types = url.searchParams.get('type')?.split(',') || [
      'restaurant',
      'menu',
    ];

    logline('shop-filter.handlers', { types });

    const found = types.reduce((toReturn: object, type: any) => {
      log;
      const rows = db[type].findMany({
        where: { name: { contains: wants } },
      });
      return { ...toReturn, [type]: rows };
    }, {});

    return HttpResponse.json({ data: found });
  }),
];
