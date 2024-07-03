import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { CartNavigator } from './CartNavigator';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { colors } from '@src/6_shared/lib/theme';
import { Pressable, Text, View } from 'react-native';
import { WIDTH } from '@src/6_shared/consts/dimentsions';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: '#252525',
      opacity: 1,
      borderRadius: 15,
      height: 74,
      marginBottom: 5,
      marginHorizontal: 5,
      borderColor: '#252525',
    },

    tabBarActiveTintColor: 'white',
    tabBarLabelPosition: 'beside-icon',
    tabBarActiveBackgroundColor: 'rgba(48, 208, 128, 0.1)',

    tabBarBackground: () => <View></View>,
    /* tabBarButton: ({ children, ...props }: BottomTabBarButtonProps) => {
      return <Custom;
    }, */
  },
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: ({ focused }) => <></>,
        tabBarLabelStyle: {},
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
