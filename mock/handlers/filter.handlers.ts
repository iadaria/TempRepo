// THE SERVER PART
// Simple example

import { HttpResponse, http } from 'msw';

import { endpoints } from '@src/6_shared/consts/endpoints';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { log } from '@src/6_shared/lib/debug/log';
import { FILTERS, operator } from 'mock/data/filter.data';
import { dataByType, db } from 'mock/db';
import { FilterType } from '@src/5_entities/shop/shop.types';

const { shop } = endpoints;

type Type = 'restaurant' | 'menu';

export const shopFilterHandlers = [
  http.get(baseUrl(shop.filters), () => HttpResponse.json({ data: FILTERS })),

  http.get(baseUrl(shop.search), ({ request }) => {
    const getParams = (name: string) => url.searchParams.get(name)?.split(',');
    const url = new URL(request.url);
    //log('handlers', { url });
    const wants = url.searchParams.get('wants');
    const types = getParams('type') || [FilterType.Restaurant, FilterType.Menu];
    const food = getParams('food') || [];
    const distance = url.searchParams.get('location');
    const isBoth = types.length > 1;

    log('handlers', { wants, types, food, distance });

    if (!wants && !food.length && !distance) {
      return HttpResponse.json({
        data: {
          restaurants: dataByType(FilterType.Restaurant).getAll(),
          menus: dataByType(FilterType.Menu).getAll(),
        },
      });
    }

    const restaurants = dataByType(FilterType.Restaurant).findMany({
      where: {
        ...(!isBoth && wants && { name: { contains: wants } }), // maybe not to do
        ...(distance && { location: operator(distance) }),
      },
    });

    const menus = dataByType(FilterType.Menu).findMany({
      where: {
        ...(wants && { name: { contains: wants } }),
        ...(food.length && { category: { in: food } }),
        ...(distance && {
          restaurantsId: { in: restaurants.map(rest => rest.id) },
        }),
      },
    });

    return HttpResponse.json({ data: { restaurants, menus } });
  }),
];
