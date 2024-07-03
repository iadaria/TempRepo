import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Text } from 'react-native-svg';

const CartScreen = () => <Text>Cart</Text>;

export const CartNavigator = createNativeStackNavigator({
  screens: {
    Cart: CartScreen,
  },
});
