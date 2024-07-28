import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '@src/2_screens/shop/cart/CartScreen/CartScreen';

import { OrderHistoryScreen } from '@src/2_screens/shop/order-history/OrderHistoryScreen';
import { OrdersHistoryScreen } from '@src/2_screens/shop/orders-history/OrdersHistoryScreen';
import { routes } from '@src/6_shared/consts/routes';

const { cart } = routes;

export const CartNavigator = createNativeStackNavigator({
  initialRouteName: cart.Cart,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [cart.Cart]: CartScreen,
    [cart.OrderHistory]: OrderHistoryScreen,
    [cart.OrdersHistory]: OrdersHistoryScreen,
  },
});
