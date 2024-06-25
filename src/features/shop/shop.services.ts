import { createAsyncThunk } from '@reduxjs/toolkit';
import { Banner, Restuarant } from './shop.types';
import { endpoints } from '@src/shared/consts/endpoints';
import { request } from '@src/shared/lib/api/request';
import { log, logline } from '@src/shared/lib/debug/log';
import { BANNER } from '@src/mock/handlers/data/banner.data';

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

export const fetchBanner = createAsyncThunk<Banner>('shop/banner', async () => {
  const response = await request({ endpoint: shop.banner });
  const json = await response.json();
  console.log({ json });
  return json.data;
});
