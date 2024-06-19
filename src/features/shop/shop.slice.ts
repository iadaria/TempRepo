import { createSlice } from '@reduxjs/toolkit';
import { Restuarant } from './shop.types';
import { fetchRestaurants } from './shop.services';
import { RootState } from '@src/app/providers/StoreProvider/config/store';

type ShopState = {
  restaurants: Restuarant[];
};

const initialState: ShopState = {
  restaurants: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.restaurants = action.payload;
    });
  },
});

export const shopReducer = shopSlice.reducer;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
