import { createSlice } from '@reduxjs/toolkit';
import { Banner, Restaurant } from './shop.types';
import { fetchBanner, fetchRestaurants } from './shop.services';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';

type ShopState = {
  restaurants: Restaurant[];
  banner: Banner | null;
};

const initialState: ShopState = {
  restaurants: [],
  banner: null,
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
  },
});

export const shopReducer = shopSlice.reducer;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectBanner = (state: RootState) => state.shop.banner;
