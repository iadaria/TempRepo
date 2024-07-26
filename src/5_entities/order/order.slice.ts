import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderStatus } from './order.types';
import { createOrder, fetchOrders } from './order.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { logline } from '@src/6_shared/lib/debug/log';

export type OrderState = {
  orders: Order[];
};

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    checkStatus: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload.map(order => {
        const items = order.items.map(item => ({
          ...item,
          disabled: order.status === OrderStatus.Done,
        }));
        return { ...order, items };
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      if (action.payload) orderSlice.caseReducers.checkStatus(state, action);
    });

    builder.addCase(createOrder.fulfilled, (state, action) => {
      if (action.payload) orderSlice.caseReducers.checkStatus(state, action);
    });
  },
});

export const orderReducer = orderSlice.reducer;

export const selectOrderItems = (state: RootState) => state.order.orders;
