import { Menu } from '../shop/shop.types';

export type Order = {
  id: string;
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress: string;
  date: Date;
  items: OrderMenuItem[];
};
export type OrderMenuItem = Menu & {
  productId: string;
  quantity: number;
  totalPrice: number;
  date: Date;
};

export enum OrderStatus {
  Proccess = 'process',
  Done = 'done',
  Delivery = 'delivery',
}
