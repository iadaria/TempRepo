import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restuarant } from './shop.types';
import { API_BASE_URL } from '@env';
import { endpoints } from '@src/shared/consts/endpoints';

const { shop } = endpoints;

export const fetchRestaurants = createAsyncThunk<Restuarant[]>(
  'shop/restaurants',
  async () => {
    const response = await fetch(`${API_BASE_URL}/${shop.restaurants}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    return json.data;
  },
);
