import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { baseUrl } from '@src/6_shared/lib/api/baseUrl';
import { MENUS } from './data/menu.data';
import { RESTAURANTS } from './data/restaurants.data';

const db = factory({
  user: {
    id: primaryKey(Number),
    firstName: String,
    lastName: String,
    email: String,
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
    discount: Number,
  },
  cart: {
    id: primaryKey(Number),
    userId: Number,
    productId: Number,
    name: String,
    category: String, // ?
    uri: String,
    price: Number,
    quantity: Number,
    totalPrice: Number,
    restaurantName: String,
    discount: Number,
  },
  order: {
    id: primaryKey(Number),
    date: () => new Date(),
    userId: Number,
    productId: Number,
    name: String,
    uri: String,
    price: Number,
    quantity: Number,
    totalPrice: Number,
    restaurantName: String,
    status: String,
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
db.user.create({
  id: 1,
  firstName: 'Daria',
  lastName: 'iakimova',
  email: 'email@gmail.com',
});

db.cart.create({
  ...MENUS[0],
  id: 1,
  productId: MENUS[0].id,
  quantity: 2,
  totalPrice: 2 * MENUS[0].price,
  userId: 1,
  restaurantName: 'Vegan Resto',
});

db.cart.create({
  ...MENUS[1],
  id: 2,
  productId: MENUS[1].id,
  quantity: 1,
  totalPrice: 1 * MENUS[1].price,
  userId: 1,
  restaurantName: 'Vegan Resto',
});

db.order.create({
  ...MENUS[5],
  id: 1,
  productId: MENUS[5].id,
  quantity: 1,
  totalPrice: 1 * MENUS[5].price,
  userId: 1,
  restaurantName: 'Vegan Resto',
  date: new Date(),
  status: 'done',
});

db.order.create({
  ...MENUS[6],
  id: 2,
  productId: MENUS[6].id,
  quantity: 2,
  totalPrice: 2 * MENUS[5].price,
  userId: 1,
  restaurantName: 'Vegan Resto',
  date: new Date(),
  status: 'delivery ',
});

export { db };

export const menus = db.menu.getAll();
export const restaurants = db.restaurant.getAll();

export function dataByType(type: 'menu' | 'restaurant') {
  return db[type];
}

export const restaurantHandlers = db.restaurant.toHandlers(
  'rest',
  baseUrl('/shop'),
);
export const menuHandlers = db.menu.toHandlers('rest', baseUrl('/shop'));

//console.log(restaurants);
//log('[db] restaurants', db.restaurant.getAll());
//log('[db] menus', db.menu.getAll());

//https://github.com/mswjs/data
