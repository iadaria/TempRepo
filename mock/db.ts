import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { RESTAURANTS } from './data/restaurants.data';
import { log, logline } from '@src/6_shared/lib/debug/log';
import { MENUS } from './data/menu.data';

const db = factory({
  restaurant: {
    id: primaryKey(Number),
    name: String,
    location: { lat: Number, lng: Number },
    img: String,
    menu: manyOf('menu'),
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

for (const rest of RESTAURANTS) {
  db.restaurant.create(rest);
}

for (const menu of MENUS) {
  const restaurant = db.restaurant.findFirst({
    where: { id: { equals: menu.restaurantId } },
  });
  if (restaurant) {
    db.menu.create({ ...menu, restaurant });
  }
}

export { db };

// log('[db] restaurants', db.restaurant.getAll());
// log('[db] menus', db.menu.getAll());

// https://github.com/mswjs/data
