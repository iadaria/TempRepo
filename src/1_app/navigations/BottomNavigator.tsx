import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    ShopHome: ShopNavigator,
  },
});
