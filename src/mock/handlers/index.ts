import { restaurantsHandlers } from './restaurant';
import { userHandlers } from './user';

export const handlers = [...userHandlers, ...restaurantsHandlers];
