import { Menu } from '../shop/shop.types';

export type CartItem = Menu & {
  productId: string;
  quantity: number;
  totalPrice: number;
};
