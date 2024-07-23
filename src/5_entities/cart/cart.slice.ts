import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { fetchCart } from './cart.services';
import { CartItem } from './cart.types';

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
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index != -1) {
        state.items[index].quantity++;
        state.items[index].totalPrice += state.items[index].price;
        state.amount++;

        cartSlice.caseReducers.calculate(state);
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index != -1) {
        state.items[index].quantity--;
        state.items[index].totalPrice -= state.items[index].price;
        state.amount--;

        cartSlice.caseReducers.calculate(state);
      }
    },
    calculate: state => {
      const items = state.items;
      state.amount = items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);
      state.totalDiscount = items.reduce((sum, item) => sum + item.discount, 0);
      state.total =
        state.totalPrice - (state.totalPrice / 100) * state.totalDiscount;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
      cartSlice.caseReducers.calculate(state); //https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
    });
  },
});

export const cartReducer = cartSlice.reducer;

export const { increment, decrement } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartAmount = (state: RootState) => state.cart.amount;
export const selectPrices = (state: RootState) => {
  const { items, amount, ...others } = state.cart;
  return others;
};
