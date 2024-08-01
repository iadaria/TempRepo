import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notification } from './notify.types';
import { request } from '@src/6_shared/lib/api/request';
import { endpoints } from '@src/6_shared/consts/endpoints';

const { notify } = endpoints;

export const fetchNotifications = createAsyncThunk<Notification[]>(
  'notification/fetch',
  async () => {
    const response = await request({ endpoint: notify.fetch });
    const json = await response.json();
    return json.data;
  },
);
