import { shopFilterHandlers } from './shop-filter.handlers';
import { shopHandlers } from './shop.handlers';
import { userHandlers } from './user.handlers';

export const handlers = [
  ...userHandlers,
  ...shopHandlers,
  ...shopFilterHandlers,
];
