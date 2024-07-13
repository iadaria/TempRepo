import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { FILTERS } from 'mock/data/filter.data';
import {
  fetchBanner,
  fetchFilters,
  fetchMenus,
  fetchRestaurants,
  search,
} from './shop.services';
import { Banner, Filter, FilterType, Menu, Restaurant } from './shop.types';
import { log, logline } from '@src/6_shared/lib/debug/log';

export type ShopState = {
  restaurants: Restaurant[];
  menus: Menu[];
  banner: Banner | null;
  filters: Filter[];
  //params: Array<string[]>;
  params: { type: string[]; wants?: string };
};

const initialState: ShopState = {
  restaurants: [],
  menus: [],
  banner: null,
  filters: FILTERS, //[],
  params: { type: [FilterType.Restaurant, FilterType.Menu] },
  /* params: [
    ['type', FilterType.Restaurant],
    ['type', FilterType.Menu],
  ], */
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    want: (state, action) => {
      if (!action.payload) delete state.params?.wants;
      else state.params = { ...state.params, wants: action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.restaurants = action.payload;
    });
    builder.addCase(fetchMenus.fulfilled, (state, action) => {
      state.menus = action.payload;
    });

    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    });

    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload;
    });

    builder.addCase(search.fulfilled, (state, action) => {
      const { restaurant = [], menu = [] } = action.payload;
      // wrong if (restaurant) state.restaurants = restaurant;
      state.restaurants = restaurant;
      // was wrong if (menu) state.menus = menu;
      state.menus = menu;
    });
  },
});

export const shopReducer = shopSlice.reducer;

export const { want } = shopSlice.actions;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectMenus = (state: RootState) => state.shop.menus;
export const selectFilters = (state: RootState) => state.shop.filters;
export const selectBanner = (state: RootState) => state.shop.banner;
export const selectWants = (state: RootState) => state.shop.params.wants;
