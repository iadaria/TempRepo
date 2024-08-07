import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '@src/6_shared/consts/endpoints';
import { controller } from '@src/6_shared/lib/api/_fetch';
import { request } from '@src/6_shared/lib/api/request';
import { lookBoth, lookMenu, lookRestaurant, ShopState } from './shop.slice';
import { Banner, Filter, Menu, Restaurant } from './shop.types';

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

export const fetchFilters = createAsyncThunk<Filter>(
  'shop/filters',
  async () => {
    const response = await request({ endpoint: shop.filters });
    const json = await response.json();
    return json.data;
  },
);

//Why are my wants so fathomless?
export const search = createAsyncThunk<
  { restaurants: Restaurant[]; menus: Menu[] },
  void,
  { state: { shop: ShopState } }
>('shop/search', async (_, { getState }) => {
  const { params } = getState().shop;

  const signal = controller.signal;
  const response = await request({
    endpoint: shop.search,
    params,
    signal,
  });
  const json = await response.json();
  return json.data;
});

export const focusShopHomeScreen = createAsyncThunk(
  'shop/focusHomeScreen',
  (_, { dispatch }) => {
    dispatch(lookBoth());
    dispatch<any>(search());
  },
);

export const focusRestaurantScreen = createAsyncThunk(
  'shop/focusRestaurantsScreen',
  (_, { dispatch }) => {
    dispatch(lookRestaurant());
  },
);
export const focusMenusScreen = createAsyncThunk(
  'shop/focusMenusScreen',
  (_, { dispatch }) => {
    dispatch(lookMenu());
  },
);

export const focusFilterScreen = createAsyncThunk<
  void,
  void,
  { state: { shop: ShopState } }
>('shop/focusFilterScreen', (_, { getState, dispatch }) => {
  dispatch(fetchFilters());
  //const { filters, params } = getState().shop;
});
