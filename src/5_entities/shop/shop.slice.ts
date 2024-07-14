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
  params: {
    [key: string]: Array<string> | string;
  };
  //params: { type: Array<FilterType>; wants?: string };
};

const initialState: ShopState = {
  restaurants: [],
  menus: [],
  banner: null,
  filters: [], //[],
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
    lookBoth: state => {
      state.params = { ...state.params, type: initialState.params.type };
    },
    lookRestaurant: state => {
      state.params = { ...state.params, type: [FilterType.Restaurant] };
    },
    lookMenu: state => {
      state.params = { ...state.params, type: [FilterType.Menu] };
    },
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
      //const filters = action.payload;
      state.filters = action.payload.reduce<Filter[]>((prev, current) => {
        const { name, by } = current;
        const items = by.map(item => {
          const alreadySelectedItems = state.params?.[name] || [];
          const selected = alreadySelectedItems.includes(item);
          return { item, selected };
        });
        return [...prev, { name, by: items }];
      }, []);
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

export const { want, lookBoth, lookRestaurant, lookMenu } = shopSlice.actions;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectMenus = (state: RootState) => state.shop.menus;
export const selectFilters = (state: RootState) => state.shop.filters;
export const selectBanner = (state: RootState) => state.shop.banner;
export const selectWants = (state: RootState) => state.shop.params.wants;
export const selectParams = (state: RootState) => state.shop.params;
