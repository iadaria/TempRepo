import { View, Text } from 'react-native';
import React from 'react';
import { Box } from '@src/6_shared/ui/Box';
import { AppText } from '@src/6_shared/ui/AppText';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { Restaurant } from '@src/5_entities/shop/shop.types';
import { RESTAURANTS } from 'mock/data/restaurants.data';
import { RestaurantList } from '@src/4_features/RestaurantList';

export const ShopRestaurantsScreen = () => {
  const restaurants: Restaurant[] = RESTAURANTS;
  return (
    <Box>
      <FilterHeader />
      <AppText h4 bold>
        Popular Restaurant
      </AppText>
      <RestaurantList restaurants={restaurants} horizontal={false} />
    </Box>
  );
};
