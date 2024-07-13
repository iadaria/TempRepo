// THE SERVER PART
// Simple example

import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { FILTERS } from 'mock/data/filter.data';
import { dataByType, db, menus, restaurants } from 'mock/db';
import { log, logline } from '@src/6_shared/lib/debug/log';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  http.get(baseUrl(shop.search), ({ request }) => {
    const url = new URL(request.url);
    //log('handlers', { url });
    const wants = url.searchParams.get('wants');
    const types = url.searchParams.get('type')?.split(',') || [
      'restaurant',
      'menu',
    ];
    log('handlers', { wants, types });

    if (!wants) {
      return HttpResponse.json({
        data: { restaurant: restaurants, menu: menus },
      });
    }

    const found = types.reduce((toReturn: object, type: any) => {
      log;
      const rows = dataByType(type).findMany({
        where: { name: { contains: wants } },
      });
      return { ...toReturn, [type]: rows };
    }, {});

    return HttpResponse.json({ data: found });
  }),
];
