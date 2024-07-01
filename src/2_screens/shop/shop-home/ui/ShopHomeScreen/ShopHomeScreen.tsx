import { useAppDispatch } from '@src/1_app/hooks';
import { Menu, Restaurant } from '@src/5_entities/shop/shop.types';
import { RestaurantList } from '@src/4_features/RestaurantList';
import { Filter, Notification, Search } from '@src/6_shared/assets/icons';
import { Box } from '@src/6_shared/ui/Box';
import { Button } from '@src/6_shared/ui/Button';
import { Input } from '@src/6_shared/ui/Input';
import { Row } from '@src/6_shared/ui/Row/Row';
import { Banner } from '@src/3_widgets/banner/Banner';
import { RESTAURANTS } from 'mock/data/restaurants.data';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { styles } from './ShopHomeScreenStyle';
import { AppText } from '@src/6_shared/ui/AppText/AppText';

import { db } from 'mock/db';
import { MENUS } from 'mock/handlers/shop';
import { Menus } from '@src/4_features/Menus';

type FilterDto = {
  search?: string;
};

export const ShopHomeScreen = () => {
  const dispatch = useAppDispatch();
  //const restaurants = useSelector(selectRestaurants);
  const restaurants: Restaurant[] = RESTAURANTS;
  const menus: Menu[] = MENUS;

  const {
    control,
    formState: {},
  } = useForm<FilterDto>();

  useEffect(() => {
    //dispatch(fetchRestaurants());
  }, []);

  return (
    <Box>
      <View style={{ gap: 20 }}>
        <Row>
          <AppText h1 bold>{`Find Your \nFavorite Food`}</AppText>
          <Button style={styles.buttonIcon}>
            <Notification />
          </Button>
        </Row>
        <Row gap={9}>
          <Input
            name="search"
            control={control}
            placeholder="What do you want to order?"
            licon={Search}
          />
          <Button style={styles.buttonIcon}>
            <Filter />
          </Button>
        </Row>
        <Banner />
        <RestaurantList restaurants={restaurants} />
        <Menus menus={menus} />
      </View>
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
 *
 */
