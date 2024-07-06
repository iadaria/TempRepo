import { useAppDispatch } from '@src/1_app/hooks';
import { Banner } from '@src/3_widgets/banner/Banner';
import { RestaurantList } from '@src/4_features/RestaurantList';
import { Menu, Restaurant } from '@src/5_entities/shop/shop.types';
import { Box } from '@src/6_shared/ui/Box';
import { RESTAURANTS } from 'mock/data/restaurants.data';
import React, { useEffect } from 'react';

import { FilterHeader } from '@src/4_features/FilterHeader/FilterHeader';
import { Menus } from '@src/4_features/menu/Menus';
import { MENUS } from 'mock/handlers/shop';
import { ListHeader } from '@src/4_features/ListHeader/ListHeader';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { routes } from '@src/6_shared/consts/routes';

const { shop } = routes;

export const ShopHomeScreen = () => {
  const dispatch = useAppDispatch();
  //const restaurants = useSelector(selectRestaurants);
  const restaurants: Restaurant[] = RESTAURANTS;
  const menus: Menu[] = MENUS;

  useEffect(() => {
    //dispatch(fetchRestaurants());
  }, []);

  return (
    <Box scroll>
      <FilterHeader />
      <Banner />
      <ListHeader
        title="Nearest Restaurant"
        link="View more"
        onPress={() => navigate(shop.PopularRestorants)}
      />
      <RestaurantList restaurants={restaurants} horizontal={true} />
      <Menus menus={menus} />
    </Box>
  );
};

/* Rectangle 12 */

/**
 * Step3 Shop screen
 * - See the auth state in Reactotron
 * - After reloading the state is default - Reloading resets all the states
 * - After background the states are reseted
 *
 * 0 After adding items I want to see them on Reactotron
 *
 *
 * 1 How to keep states?
 * When you refresh or leave page, you are restarting the redux store so it will always go back to the default. If you want to persist the store you will need to use a tool like redux-persist. Here is how you could setup your store with redux-persist.
 * add redux-persist
 *
 * 2 Show the ShopHome with list of
 *
 * 2.1 Get all the products:
 *- Add button and show restaurants
 * - refactor handlers and add restaurants handlers
 *
 * - DO the mestake in api: restaurant instead of restaurants
 * - see error in Reactotron: API RESPONSE 404
 * - And then refactoring
 *
 * 3 Add interceptor and show 500 error
 *
 * 4 create Layout
 * font:
 * https://github.com/kuali/www-theme-kuali/tree/master/fonts/BentonSans
 * add font
 * - npx react-native-asset -> yes
 * 5 Install yarn add @mswjs/data --dev
 *
 * 6 Layout ...
 *
 * 7 Refactor box and ListMenu
 */
