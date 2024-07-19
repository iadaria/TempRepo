import { menuHandlers, restaurantHandlers } from 'mock/db';
import { shopFilterHandlers } from './filter.handlers';
import { shopHandlers } from './shop.handlers';
import { userHandlers } from './user.handlers';

export const handlers = [
  ...userHandlers,
  ...shopHandlers,
  ...shopFilterHandlers,
  ...restaurantHandlers,
  ...menuHandlers,
];
