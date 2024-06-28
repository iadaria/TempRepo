import { factory, oneOf, primaryKey } from '@mswjs/data';
import { RESTAURANTS } from './data/restaurants.data';
import { log } from '@src/shared/lib/debug/log';
import { MENUS } from './data/menu.data';

export const db = factory({
  restaurant: {
    id: primaryKey(Number),
    name: String,
    location: { lat: Number, lng: Number },
    img: String,
  },
  menu: {
    id: primaryKey(Number),
    name: String,
    price: Number,
    uri: String,
    pupular: Boolean,
    restaurant: oneOf('restaurant'),
  },
});

RESTAURANTS.forEach(rest => {
  db.restaurant.create(rest);
});

MENUS.forEach(({ restaurantId, ...menu }) => {
  const restaurant = db.restaurant.findFirst({
    where: { id: { equals: restaurantId } },
  });
  db.menu.create({ ...menu, restaurant });
});

//log('[db]', db.restaurant.getAll());
//log('[db]', db.menu.getAll());
