import { createSlice } from '@reduxjs/toolkit';
import { Banner, Filter, Menu, Restaurant } from './shop.types';
import { fetchBanner, fetchFilters, fetchRestaurants } from './shop.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import { RESTAURANTS } from 'mock/data/restaurants.data';
import { MENUS } from 'mock/handlers/shop';
import { FILTERS } from 'mock/data/filter.data';

type ShopState = {
  restaurants: Restaurant[];
  menus: Menu[];
  banner: Banner | null;
  filters: Filter[];
};

const initialState: ShopState = {
  restaurants: RESTAURANTS, //[]
  menus: MENUS, //[]
  banner: null,
  filters: FILTERS, //[],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.restaurants = action.payload;
    });

    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    });

    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload;
    });
  },
});

export const shopReducer = shopSlice.reducer;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectMenus = (state: RootState) => state.shop.menus;
export const selectFilters = (state: RootState) => state.shop.filters;
export const selectBanner = (state: RootState) => state.shop.banner;
