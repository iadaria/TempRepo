import { shopHandlers } from './shop';
import { userHandlers } from './user';

export const handlers = [...userHandlers, ...shopHandlers];
