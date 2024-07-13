import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { RestaurantList } from '@src/4_features/RestaurantList';
import { focusRestaurantScreen } from '@src/5_entities/shop/shop.services';
import { selectRestaurants } from '@src/5_entities/shop/shop.slice';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const RestaurantsScreen = () => {
  useFocus(focusRestaurantScreen);
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
