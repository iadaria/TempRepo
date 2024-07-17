export type Restaurant = {
  id: string;
  name: string;
  img: string;
  location: { lat: number; lng: number };
};

export type Banner = {
  id: string;
  img: string;
};

export type Menu = {
  id: string;
  name: string;
  price: number;
  restaurantId: string;
  restaurantName: string;
  uri: string;
  pupular: boolean;
  category: string;
};

export type Filter = {
  [FilterItem.Type]: FilterType[];
  [FilterItem.Location]: Location[];
  [FilterItem.Food]: Food[];
};

export type FilterKey = keyof Filter;

export type Filters = FilterType[] | Location[] | Food[];

export enum FilterType {
  Restaurant = 'restaurant',
  Menu = 'menu',
}

export enum FilterItem {
  Type = 'type',
  Location = 'location',
  Food = 'food',
  //Wants = 'wants',
}

export const filterItems = Object.values(FilterItem);

export const paramNames = [
  FilterItem.Type,
  FilterItem.Food,
  FilterItem.Location,
  'wants',
  //FilterItem.Wants,
] as const;
export type ParamName = (typeof paramNames)[number];

export const filterNames = [
  FilterItem.Type,
  FilterItem.Location,
  FilterItem.Food,
] as const;
export type FilterName = (typeof filterNames)[number];

export type ParamName2 = (typeof paramNames)[number];
export type ParamName3 = Partial<ParamName2>;

//export type ParamName = 'type' | 'location' | 'food';

export enum Location {
  OneKm = '1 Km',
  MoreTenKm = '>10 Km',
  LessTenKm = '<10 Km',
}

export enum Food {
  Cake = 'cake',
  Soup = 'soup',
  MainCourse = 'main course',
  Appetizer = 'appetizer',
  Dessert = 'dessert',
}
