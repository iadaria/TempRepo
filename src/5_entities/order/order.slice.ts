import { createSlice } from '@reduxjs/toolkit';
import { OrderItem } from './order.types';
import { fetchOrders } from './order.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';

export type OrderState = {
  items: OrderItem[];
};

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const orderReducer = orderSlice.reducer;

export const selectOrderItems = (state: RootState) => state.order.items;
