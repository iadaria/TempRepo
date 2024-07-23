import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';
import { CartItem } from './cart.types';

const { shop } = endpoints;

export const fetchCart = createAsyncThunk<CartItem[]>(
  'cart/fetch',
  async () => {
    const response = await request({
      endpoint: shop.cart,
    });
    const json = await response.json();
    return json.data;
  },
);

export const focusCartScreen = createAsyncThunk(
  'cart/focusStreen',
  (_, { dispatch }) => {
    dispatch(fetchCart());
  },
);

export const cartAdd = createAsyncThunk<
  CartItem,
  { id: string; digit: number }
>('cart/add', async (data, { dispatch }) => {
  const endpoint = shop.cartAdd;
  const method = 'post';
  const body = JSON.stringify(data);
  const response = await request({ endpoint, method, body });
  const json = await response.json();
  return json.data;
});
