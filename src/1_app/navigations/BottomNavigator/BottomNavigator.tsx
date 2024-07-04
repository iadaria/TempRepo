import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import React from 'react';
import { CartNavigator } from '../CartNavigator';
import { ProfileNavigator } from '../ProfileNavigator';
import { ShopNavigator } from '../ShopNavigator';
import { TabBarOptions } from './TabBarOptions';

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: TabBarOptions,
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => <HomeIcon opacity={+focused || 0.5} />,
      },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => <ProfileIcon opacity={+focused || 0.5} />,
      },
    },
    CartTab: {
      screen: CartNavigator,
      options: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => <CartIcon opacity={+focused || 0.5} />,
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
