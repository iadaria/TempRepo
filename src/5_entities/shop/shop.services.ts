import { createAsyncThunk } from '@reduxjs/toolkit';
import { Banner, Filter, Menu, Restaurant } from './shop.types';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { request } from '@src/6_shared/lib/api/request';
import { ShopState } from './shop.slice';

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

export const fetchMenus = createAsyncThunk<Menu[]>('shop/menus', async () => {
  const response = await request({ endpoint: shop.menus });
  //log('[fetchRestaurants]', response);
  const json = await response.json();
  return json.data;
});

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

export const focusShopHomeScreen = createAsyncThunk(
  'shop/focusHomeScreen',
  (_, { dispatch }) => {
    dispatch(fetchRestaurants());
    dispatch(fetchMenus());
  },
);

//Why are my wants so fathomless?
export const search = createAsyncThunk<
  { restaurant: Restaurant[]; menu: Menu[] },
  string,
  { state: { shop: ShopState } }
>('shop/search', async (wants: string, { getState }) => {
  const { params } = getState().shop;
  const response = await request({
    endpoint: shop.search,
    params: { ...params, wants },
  });
  const json = await response.json();
  return json.data;
});
