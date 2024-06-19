import { restaurantsHandlers } from './restaurants';
import { userHandlers } from './user';

export const handlers = [...userHandlers, ...restaurantsHandlers];
