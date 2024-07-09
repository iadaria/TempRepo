import { createAsyncThunk } from '@reduxjs/toolkit';
import { Banner, Filter, Restaurant } from './shop.types';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';

const { shop } = endpoints;

export const fetchRestaurants = createAsyncThunk<Restaurant[]>(
  'shop/restaurants',
  async () => {
    const response = await request({ endpoint: shop.restaurants });
    //log('[fetchRestaurants]', response);
    const json = await response.json();
    return json.data;
  },
);

export const fetchBanner = createAsyncThunk<Banner>('shop/banner', async () => {
  //console.log('* fetchBanner');
  const response = await request({ endpoint: shop.banner });
  const json = await response.json();
  return json.data;
});

export const fetchFilters = createAsyncThunk<Filter[]>(
  'shop/filters',
  async () => {
    const response = await request({ endpoint: shop.filters });
    const json = await response.json();
    return json.data;
  },
);

//Why are my wants so fathomless?
export const searchRestaurants = createAsyncThunk<Restaurant[], string>(
  'shop/search',
  async (wants: string) => {
    const response = await request({ endpoint: shop.search, params: wants });
    const json = await response.json();
    return json.data;
  },
);
