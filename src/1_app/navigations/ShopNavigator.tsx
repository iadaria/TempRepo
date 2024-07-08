import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopHomeScreen } from '@src/2_screens/shop/shop-home';
import { ShopRestaurantsScreen } from '@src/2_screens/shop/shop-restaurants/ShopRestaurantsScreen/ShopRestaurantsScreen';
import { routes } from '@src/6_shared/consts/routes';

const { shop } = routes;

export const ShopNavigator = createNativeStackNavigator({
  //initialRouteName: shop.PopularRestorants,
  screenOptions: {
    headerShown: false,
    animation: 'slide_from_left',
  },
  screens: {
    [shop.Home]: ShopHomeScreen,
    [shop.PopularRestorants]: ShopRestaurantsScreen,
  },
});
