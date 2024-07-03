import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { CartNavigator } from './CartNavigator';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <HomeIcon />,
      },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => <ProfileIcon />,
      },
    },
    CartTab: {
      screen: CartNavigator,
      options: {
        tabBarLabel: 'Cart',
        tabBarIcon: () => <CartIcon />,
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
