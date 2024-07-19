import { CartItem } from './cart.types';

export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};
