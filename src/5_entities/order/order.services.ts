import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';
import { OrderItem } from './order.types';

const { shop } = endpoints;

export const fetchOrders = createAsyncThunk<OrderItem[]>(
  'cart/fetch',
  async () => {
    const response = await request({
      endpoint: shop.ordersHistory,
    });
    const json = await response.json();
    return json.data;
  },
);

export const focusOrdersScreen = createAsyncThunk(
  'order/focusStreen',
  (_, { dispatch }) => {
    dispatch(fetchOrders());
  },
);
