export const FILTERS = [
  {
    name: 'type',
    by: ['restaurant', 'menu'],
  },
  {
    name: 'location',
    by: ['1 Km', '>10 Km', '<10 Km'],
  },
  {
    name: 'food',
    by: ['cake', 'soup', 'main course', 'appetizer', 'dessert'],
  },
];

export const FILTERS_2 = {
  type: ['restaurant', 'menu'],
  location: ['1 Km', '>10 Km', '<10 Km'],
  food: ['cake', 'soup', 'main course', 'appetizer', 'dessert'],
};

export type Filter2 = {
  type: string[];
  location: string[];
  food: string[];
};
