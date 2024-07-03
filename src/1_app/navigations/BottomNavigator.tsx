import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { CartNavigator } from './CartNavigator';
import { HomeIcon } from '@src/6_shared/assets/icons';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLable: 'Home',
        tabBarIcon: ({ color }) => <HomeIcon />,
      },
    },
    ProfileTab: ProfileNavigator,
    CartTab: CartNavigator,
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
