import { shopHandlers } from './shop.request';
import { userHandlers } from './user.request';

export const handlers = [...userHandlers, ...shopHandlers];
