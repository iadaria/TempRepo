import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';
import { Order } from './order.types';
import { Alert } from 'react-native';
import { fetchCart } from '../cart/cart.services';

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
  async (_, { dispatch }) => {
    const response = await request({
      endpoint: endpoints.order.create,
    });
    const json = await response.json();
    Alert.alert('Your order was created successful');
    dispatch(fetchCart());
    dispatch(fetchOrders());

    return json.data;
  },
);
