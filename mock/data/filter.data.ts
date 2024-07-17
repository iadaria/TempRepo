export const FILTERS = {
  type: ['restaurant', 'menu'],
  location: ['1 Km', '>10 Km', '<10 Km'],
  food: ['cake', 'soup', 'main course', 'appetizer', 'dessert'],
};

export function operator(distance: string) {
  switch (distance) {
    case '1 Km':
      return { lte: 1 };
    case '>10 Km':
      return { gte: 10 };
    case '<10 Km':
      return { lte: 10 };
  }
}
