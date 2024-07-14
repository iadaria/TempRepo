import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import {
  fetchBanner,
  fetchFilters,
  fetchMenus,
  fetchRestaurants,
  search,
} from './shop.services';
import { Banner, Filter, FilterType, Menu, Restaurant } from './shop.types';
import { log, logline } from '@src/6_shared/lib/debug/log';
import { Filter2, FILTERS_2 } from 'mock/data/filter.data';

export type ShopState = {
  restaurants: Restaurant[];
  menus: Menu[];
  banner: Banner | null;
  filters: Filter[];
  filters2: Filter2;
  params: {
    [key: string]: Array<string>; // what about whats?
  };
  //params: { type: Array<FilterType>; wants?: string };
};

const initialState: ShopState = {
  restaurants: [],
  menus: [],
  banner: null,
  filters: [], //[],
  params: { type: [FilterType.Restaurant, FilterType.Menu] },
  filters2: FILTERS_2,
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
    setParam: (state, action) => {
      const { name, item, toDelete } = action.payload;

      const { [name]: items, ...others } = state.params;

      if (toDelete) {
        const left = items.filter(param => param != item);
        state.params = { ...others, ...(left.length && { [name]: left }) };
      } else {
        const newItems = items ? [...items, item] : [item];
        state.params = { ...others, ...{ [name]: newItems } };
      }
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

export const { want, lookBoth, lookRestaurant, lookMenu, setParam } =
  shopSlice.actions;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectMenus = (state: RootState) => state.shop.menus;
export const selectFilters = (state: RootState) => state.shop.filters;
export const selectFilters2 = (state: RootState) => state.shop.filters2;
export const selectBanner = (state: RootState) => state.shop.banner;
export const selectWants = (state: RootState) => state.shop.params.wants;
export const selectParams = (state: RootState) => state.shop.params;

/* setFilter: (state, action) => {
  const { name, item, selected } = action.payload;

  const { [name]: checkedParams, ...others } = state.params;

  if (!selected) {
    const left = checkedParams.filter(param => param !== item);

    state.params = { ...others, [name]: left };
    if (!left.length) delete state.params[name];
  } else {
    const params = checkedParams ? [...checkedParams, item] : [item];
    state.params = { ...others, [name]: params };
  }

  state.filters = state.filters.map(filter => {
    if (filter.name === name) {
      const by = filter.by.map(b =>
        b.item === item ? { ...b, selected } : b,
      );
      return { name, by };
    }
    return filter;
  });
}, */

// params = left.length ? {[name]: left} : {}
//state.params = {...others, ...(left.length && {[name]: left})}
