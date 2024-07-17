import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/1_app/providers/StoreProvider/config/store';
import {
  fetchBanner,
  fetchFilters,
  fetchMenus,
  fetchRestaurants,
  search,
} from './shop.services';
import {
  Banner,
  Filter,
  FilterItem,
  FilterName,
  FilterType,
  Food,
  Location,
  Menu,
  Restaurant,
} from './shop.types';

export type ShopState = {
  restaurants: Restaurant[];
  menus: Menu[];
  banner: Banner | null;
  filters: Filter;
  params: {
    [FilterItem.Type]?: FilterType[];
    [FilterItem.Location]?: Location[];
    [FilterItem.Food]?: Food[];
    wants?: string;
    //[key: string]: Array<string>; // what about whats?
  };
};

const initialState: ShopState = {
  restaurants: [],
  menus: [],
  banner: null,
  params: {
    [FilterItem.Type]: [FilterType.Restaurant, FilterType.Menu],
    //[FilterItem.Location]: [Location.OneKm],
    //[FilterItem.Food]: [Food.Appetizer, Food.Cake],
  },
  filters: { type: [], food: [], location: [] },
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
    deleteParam: (
      state,
      action: PayloadAction<{ name: FilterName; item: string }>,
    ) => {
      const { name, item: itemToDelete } = action.payload;
      const { [name]: items, ...others } = state.params;

      const left = items?.filter(item => item != itemToDelete);

      state.params = { ...others, ...(left?.length && { [name]: left }) };
    },
    addParam: (
      state,
      action: PayloadAction<{ name: FilterName; item: string }>,
    ) => {
      const { name, item } = action.payload;
      if (name === 'location') delete state.params[name];

      const { [name]: items, ...others } = state.params;

      const newItems = items ? [...items, item] : [item];
      state.params = { ...others, ...{ [name]: newItems } };
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
      const { restaurants = [], menus = [] } = action.payload;
      state.restaurants = restaurants;
      state.menus = menus;
    });
  },
});

export const shopReducer = shopSlice.reducer;

export const {
  want,
  lookBoth,
  lookRestaurant,
  lookMenu,
  //setParam,
  deleteParam,
  addParam,
} = shopSlice.actions;

export const selectRestaurants = (state: RootState) => state.shop.restaurants;
export const selectMenus = (state: RootState) => state.shop.menus;
export const selectFilters = (state: RootState) => state.shop.filters;
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

/* state.filters = action.payload.reduce<Filter[]>((prev, current) => {
  const { name, by } = current;
  const items = by.map(item => {
    const alreadySelectedItems = state.params?.[name] || [];
    const selected = alreadySelectedItems.includes(item);
    return { item, selected };
  });
  return [...prev, { name, by: items }];
}, []); */
/* 
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
}, */
