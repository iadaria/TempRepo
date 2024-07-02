import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopHomeScreen } from '@src/2_screens/shop/shop-home';

export const ShopNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    ShopHome: {
      screen: ShopHomeScreen,
    },
  },
});
