import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { RESTAURANTS } from './data/restaurants.data';
import { log, logline } from '@src/6_shared/lib/debug/log';
import { MENUS } from './data/menu.data';

const db = factory({
  restaurant: {
    id: primaryKey(Number),
    name: String,
    //location: { lat: Number, lng: Number },
    location: Number,
    img: String,
    menus: manyOf('menu'),
  },
  menu: {
    id: primaryKey(Number),
    name: String,
    price: Number,
    uri: String,
    pupular: Boolean,
    restaurantId: Number,
    restaurantName: String,
    restaurant: oneOf('restaurant'), //
    category: String,
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
    const dbMenu = db.menu.create({
      ...menu,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      restaurant,
    });
  }
}

export { db };

export const menus = db.menu.getAll();
export const restaurants = db.restaurant.getAll();

export function dataByType(type: 'menu' | 'restaurant') {
  return db[type];
}
//console.log(restaurants);
//log('[db] restaurants', db.restaurant.getAll());
// log('[db] menus', db.menu.getAll());

// https://github.com/mswjs/data
