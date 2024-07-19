import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from './cart.types';
import { fetchCart } from './cart.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';

export type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
