import { View, Text, Button, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './ShopHomeStyle';
import { useAppDispatch } from '@src/app/hooks';
import { fetchRestaurants } from '@src/features/shop/shop.services';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '@src/features/shop/shop.slice';
import { Restuarant } from '@src/features/shop/shop.types';

export const ShopHome = () => {
  const dispatch = useAppDispatch();
  const restaurants = useSelector(selectRestaurants);

  useEffect(() => {
    setTimeout(() => dispatch(fetchRestaurants()), 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the FoodNinja app!</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item: Restuarant, index) => `item-${index}`}
        renderItem={({ item }) => (
          <Text style={{ color: 'white' }}>{item.name}</Text>
        )}
      />
    </View>
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
 *
 * - refactor handlers and add restaurants handlers
 *
 * - DO the mestake in api: restaurant instead of restaurants
 * - see error in Reactotron: API RESPONSE 404
 * - And then refactoring
 *
 */
