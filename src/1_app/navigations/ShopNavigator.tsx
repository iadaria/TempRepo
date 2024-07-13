import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilterScreen } from '@src/2_screens/shop/filter/FilterScreen';
import { ShopHomeScreen } from '@src/2_screens/shop/shop-home';
import { MenusScreen } from '@src/2_screens/shop/shop-menus/MenusScreen';
import { RestaurantsScreen } from '@src/2_screens/shop/shop-restaurants/RestaurantsScreen/RestaurantsScreen';
import { routes } from '@src/6_shared/consts/routes';

const { shop } = routes;

export const ShopNavigator = createNativeStackNavigator({
  //initialRouteName: shop.Menus,
  screenOptions: {
    headerShown: false,
    animation: 'slide_from_left',
  },
  screens: {
    [shop.Home]: ShopHomeScreen,
    [shop.Restorants]: RestaurantsScreen,
    [shop.Menus]: MenusScreen,
    [shop.Filter]: FilterScreen,
  },
});
