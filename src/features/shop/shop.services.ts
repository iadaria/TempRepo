import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restuarant } from './shop.types';
import { API_BASE_URL } from '@env';

export const fetchRestaurants = createAsyncThunk<Restuarant[]>(
  'shop/restaurants',
  async () => {
    const response = await fetch(`${API_BASE_URL}/restaurant`, {
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    return json.data;
  },
);
