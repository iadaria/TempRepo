import { createAsyncThunk } from '@reduxjs/toolkit';
import { Restuarant } from './shop.types';
import { endpoints } from '@src/shared/consts/endpoints';
import { request } from '@src/shared/lib/api/request';
import { log, logline } from '@src/shared/lib/debug/log';

const { shop } = endpoints;

export const fetchRestaurants = createAsyncThunk<Restuarant[]>(
  'shop/restaurants',
  async () => {
    const response = await request({ endpoint: shop.restaurants });
    //log('[fetchRestaurants]', response);
    const json = await response.json();
    return json.data;
  },
);
