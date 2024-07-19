import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '@src/2_screens/shop/cart/CartScreen';
import { Text } from 'react-native-svg';

export const CartNavigator = createNativeStackNavigator({
  screens: {
    Cart: CartScreen,
  },
});
