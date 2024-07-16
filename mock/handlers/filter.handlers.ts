// THE SERVER PART
// Simple example

import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { FILTERS, operatorByDistance } from 'mock/data/filter.data';
import { dataByType, db, menus, restaurants } from 'mock/db';
import { log, logline } from '@src/6_shared/lib/debug/log';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  http.get(baseUrl(shop.search), ({ request }) => {
    const getParams = (name: string) => url.searchParams.get(name)?.split(',');
    const isMenu = (type: string) => type === 'menu';

    const url = new URL(request.url);
    //log('handlers', { url });
    const wants = url.searchParams.get('wants');
    const types = getParams('type') || ['restaurant', 'menu'];
    const food = getParams('food') || [];
    const fooded = food.length;
    const distance = url.searchParams.get('location');

    log('handlers', { wants, types, food, distance });

    if (!wants && !fooded && !distance) {
      return HttpResponse.json({
        data: { restaurant: restaurants, menu: menus },
      });
    }

    const found = types.reduce((toReturn: object, type: any) => {
      const rows = dataByType(type).findMany({
        where: {
          ...(wants && { name: { contains: wants } }),
          ...(isMenu(type) && fooded && { category: { in: food } }),
          ...(!isMenu(type) &&
            distance && { location: operatorByDistance(distance) }),
        },
      });
      return { ...toReturn, [type]: rows };
    }, {});

    return HttpResponse.json({ data: found });
  }),
];
