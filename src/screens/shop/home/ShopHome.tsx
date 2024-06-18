import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './ShopHomeStyle';

export const ShopHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the FoodNinja app!</Text>
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
 *
 */
