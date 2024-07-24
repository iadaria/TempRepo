import { CartItem } from '../cart/cart.types';

export type OrderItem = CartItem & {
  date: Date;
  status: OrderStatus;
};

export enum OrderStatus {
  Proccess = 'process',
  Done = 'done',
  Delivery = 'delivery',
}
