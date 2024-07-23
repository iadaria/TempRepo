import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { cartAdd, fetchCart } from './cart.services';
import { CartItem } from './cart.types';

export type CartState = {
  items: CartItem[];
  amount: number;
  totalPrice: number;
  totalDiscount: number;
  total: number;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: CartState = {
  items: [],
  amount: 0,
  totalPrice: 0,
  totalDiscount: 0,
  total: 0,
  status: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ id: string; digit: -1 | 1 }>) => {
      const { id, digit } = action.payload;
      const item = state.items.find(item => item.id === id);
      if ([-1, 1].includes(digit) && item && item.quantity + digit >= 0) {
        item.quantity += digit;
        item.totalPrice += digit;

        cartSlice.caseReducers.calculate(state);
      }
    },
    calculate: state => {
      const items = state.items;
      state.amount = items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      );
      state.totalDiscount = items.reduce((sum, item) => {
        //console.log({ sum, plus: (item.discount / 100) * item.price });
        return sum + (item.discount / 100) * item.price * item.quantity;
      }, 0);
      state.total = state.totalPrice - state.totalDiscount;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        cartSlice.caseReducers.calculate(state); //https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
      })
      .addCase(cartAdd.fulfilled, (state, action) => {
        state.status = 'idle';

        const { id } = action.payload;

        const index = state.items.findIndex(item => item.id === id);
        if (index != -1) state.items[index] = action.payload;
        cartSlice.caseReducers.calculate(state);
      })
      .addCase(cartAdd.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(cartAdd.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const cartReducer = cartSlice.reducer;

export const { add } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartAmount = (state: RootState) => state.cart.amount;
export const selectPrices = (state: RootState) => {
  const { items, amount, ...others } = state.cart;
  return others;
};
export const selectStatus = (state: RootState) => state.cart.status;
