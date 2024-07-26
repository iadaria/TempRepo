import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';
import { Order } from './order.types';
import { Alert } from 'react-native';

const { shop } = endpoints;

export const fetchOrders = createAsyncThunk<Order[]>(
  'order/fetch',
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

export const createOrder = createAsyncThunk<Order[]>(
  'order/create',
  async () => {
    const response = await request({
      endpoint: endpoints.order.create,
    });
    const json = await response.json();
    Alert.alert('Your order was created successful');
    return json.data;
  },
);
