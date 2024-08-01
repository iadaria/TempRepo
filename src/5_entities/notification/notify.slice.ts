import { createSlice } from '@reduxjs/toolkit';
import { Notification } from './notify.types';
import { fetchNotifications } from './notify.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';

export type NotificationState = {
  items: Notification[];
  amount: number;
};

const initialState: NotificationState = {
  items: [],
  amount: 0,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.items = action.payload;
      state.amount = action.payload.length;
    });
  },
});

export const notifyReducer = notificationSlice.reducer;

export const selectNotifications = (state: RootState) =>
  state.notifications.items;

export const selectNotifyAmount = (state: RootState) =>
  state.notifications.amount;
