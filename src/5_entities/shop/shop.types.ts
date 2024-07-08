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
};

export type Filter = {
  name: string;
  by: string[];
};
