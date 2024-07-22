import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from './cart.types';
import { fetchCart, fetchCartAmount } from './cart.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';

export type CartState = {
  items: CartItem[];
  amount: number;
  totalPrice: number;
  totalDiscount: number;
  total: number;
};

const initialState: CartState = {
  items: [],
  amount: 0,
  totalPrice: 0,
  totalDiscount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      const items = action.payload;
      state.items = items;
      state.totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);
      state.totalDiscount = items.reduce((sum, item) => sum + item.discount, 0);
      state.total =
        state.totalPrice - (state.totalPrice / 100) * state.totalDiscount;
    });

    builder.addCase(fetchCartAmount.fulfilled, (state, action) => {
      state.amount = action.payload;
    });
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartAmount = (state: RootState) => state.cart.amount;
export const selectPrices = (state: RootState) => {
  const { items, amount, ...others } = state.cart;
  return others;
};
