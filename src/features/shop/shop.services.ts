import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restuarant } from './shop.types';
import { endpoints } from '@src/shared/consts/endpoints';
import { request } from '@src/shared/lib/api/request';

const { shop } = endpoints;

export const fetchRestaurants = createAsyncThunk<Restuarant[]>(
  'shop/restaurants',
  async () => {
    const response = await request({ endpoint: shop.restaurants });
    console.log({ response });
    const json = await response.json();
    return json.data;
  },
);
