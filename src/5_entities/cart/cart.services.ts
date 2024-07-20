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

export const fetchCartAmount = createAsyncThunk<number>(
  'cart/count',
  async () => {
    const response = await request({
      endpoint: shop.cartQuantity,
    });
    const json = await response.json();
    return json.data;
  },
);

export const focusCartScreen = createAsyncThunk(
  'cart/focusStreen',
  (_, { dispatch }) => {
    dispatch(fetchCartAmount());
  },
);
