import { PATH } from './consts';

export const MENUS = [
  {
    id: 1,
    name: 'Herbal Pancacke',
    price: 7,
    restaurantId: 1,
    uri: `${PATH}/menu/m1.png`,
    pupular: true,
    category: 'soup',
    discount: 0,
  },
  {
    id: 2,
    name: 'Furit Salad',
    price: 5,
    restaurantId: 1,
    uri: `${PATH}/menu/m2.png`,
    popular: true,
    category: 'soup',

    discount: 3,
  },
  {
    id: 3,
    name: 'Green Noddle',
    price: 6,
    restaurantId: 1,
    uri: `${PATH}/menu/m3.png`,
    popular: true,
    category: 'main course',

    discount: 1,
  },
  {
    id: 4,
    name: 'Herbal Good Pancacke',
    price: 7,
    restaurantId: 1,
    uri: `${PATH}/menu/m1.png`,
    pupular: true,
    category: 'dessert',

    discount: 2,
  },
  {
    id: 5,
    name: 'Herbal Good Pancacke',
    price: 7,
    restaurantId: 2,
    uri: `${PATH}/menu/m1.png`,
    pupular: true,
    category: 'dessert',

    discount: 2,
  },
];

// https://medium.com/admitad-tech/mocks-without-roadblocks-the-magic-of-mswjs-faker-js-306541458c2a
// https://github.com/mswjs/data
//https://medium.com/@alexpagnotta/improve-mocking-and-local-development-with-mswjs-and-mswjsdata-deddcae15585
// https://next.fakerjs.dev/api/food
