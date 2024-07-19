import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { RESTAURANTS } from './data/restaurants.data';
import { log, logline } from '@src/6_shared/lib/debug/log';
import { MENUS } from './data/menu.data';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';

const db = factory({
  user: {
    id: primaryKey(() => '1'),
    firstName: () => 'John',
    lastName: () => 'Maverick',
  },
  restaurant: {
    id: primaryKey(Number),
    name: String,
    location: Number, //location: { lat: Number, lng: Number },
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

console.log({ baseUrl: baseUrl('/shop') });

export const restaurantHandlers = db.restaurant.toHandlers(
  'rest',
  baseUrl('/shop'),
);

export const menuHandlers = db.menu.toHandlers('rest', baseUrl('/shop'));

//console.log(restaurants);
//log('[db] restaurants', db.restaurant.getAll());
// log('[db] menus', db.menu.getAll());

// https://github.com/mswjs/data
