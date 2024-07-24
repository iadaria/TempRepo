import { Menu } from '../shop/shop.types';

export type OrderItem = Menu & {
  productId: string;
  quantity: number;
  status: OrderStatus;
  totalPrice: number;
  date: Date;
};

export enum OrderStatus {
  Proccess = 'process',
  Done = 'done',
  Delivery = 'delivery',
}
