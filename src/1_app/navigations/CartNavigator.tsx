import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '@src/2_screens/shop/cart/CartScreen';

export const CartNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Cart: CartScreen,
  },
});
