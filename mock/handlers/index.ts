import { menuHandlers, restaurantHandlers } from 'mock/db';
import { shopFilterHandlers } from './filter.handlers';
import { shopHandlers } from './shop.handlers';
import { userHandlers } from './user.handlers';
import { cartHandlers } from './cart.handlers';
import { orderHandlers } from './order.handlers';

export const handlers = [
  ...userHandlers,
  ...shopHandlers,
  ...shopFilterHandlers,
  ...restaurantHandlers,
  ...menuHandlers,
  ...cartHandlers,
  ...orderHandlers,
];
