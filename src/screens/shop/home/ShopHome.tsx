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
