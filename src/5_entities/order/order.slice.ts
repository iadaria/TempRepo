import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderStatus } from './order.types';
import { createOrder, fetchOrders } from './order.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { log, logline } from '@src/6_shared/lib/debug/log';

export type OrderState = {
  orders: Order[];
  selectedOrder: Order | null;
};

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    checkStatus: (state, action: PayloadAction<Order[]>) => {
      const orders = action.payload.map(order => {
        const items = order.items.map(item => ({
          ...item,
          disabled: order.status === OrderStatus.Done,
        }));
        return { ...order, items };
      });
      state.orders = orders.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    pickOrder: (state, action: PayloadAction<Order>) => {
      state.selectedOrder = action.payload;
    },
    deselectOrder: (state, _) => {
      state.selectedOrder = null;
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

export const { pickOrder, deselectOrder } = orderSlice.actions;

export const selectOrders = (state: RootState) => state.order.orders;
export const selectOrder = (state: RootState) => state.order.selectedOrder;
