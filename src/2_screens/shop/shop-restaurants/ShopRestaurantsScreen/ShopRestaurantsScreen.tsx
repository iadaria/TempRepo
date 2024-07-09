import { FilterHeader } from '@src/4_features/FilterHeader';
import { RestaurantList } from '@src/4_features/RestaurantList';
import { selectRestaurants } from '@src/5_entities/shop/shop.slice';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { useSelector } from 'react-redux';

export const ShopRestaurantsScreen = () => {
  const restaurants = useSelector(selectRestaurants);

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
