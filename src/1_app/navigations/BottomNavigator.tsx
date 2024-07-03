import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { CartNavigator } from './CartNavigator';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { colors } from '@src/6_shared/lib/theme';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: colors.primary,
    },
  },
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <HomeIcon opacity={Number(focused) || 0.5} />
        ),
      },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, focused }) => (
          <ProfileIcon opacity={Number(focused) || 0.5} />
        ),
      },
    },
    CartTab: {
      screen: CartNavigator,
      options: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => (
          <CartIcon opacity={Number(focused) || 0.5} />
        ),
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
