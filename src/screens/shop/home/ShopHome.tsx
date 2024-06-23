import { useAppDispatch } from '@src/app/hooks';
import { fetchRestaurants } from '@src/features/shop/shop.services';
import { selectRestaurants } from '@src/features/shop/shop.slice';
import { Pattern2 } from '@src/shared/assets/images';
import React, { FC, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useSelector } from 'react-redux';
import { styles } from './ShopHomeStyle';
import Svg, { Image as SvgImage } from 'react-native-svg';

interface BoxProps {
  children: React.ReactNode;
}

const Box: FC<BoxProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <SvgImage
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin meet"
          href={Pattern2}
        />
      </Svg>
      <View style={styles.box}>{children}</View>
      {/*       <ImageBackground
        style={styles.imgWrapper}
        imageStyle={styles.background}
        source={Pattern2}>
        {children}
      </ImageBackground> */}
    </View>
  );
};

export const ShopHome = () => {
  const dispatch = useAppDispatch();
  const restaurants = useSelector(selectRestaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <Box>
      <Text style={styles.title}>Find Your Favorite Food</Text>
      {/*     <FlatList
        data={restaurants}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={({ item }) => (
          <Text style={{ color: 'white' }}>{item.name}</Text>
        )}
      /> */}
    </Box>
  );
};

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
 *
 *
 *
 */
