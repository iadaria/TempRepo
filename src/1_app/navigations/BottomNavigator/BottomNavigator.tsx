import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import React from 'react';
import { CartNavigator } from '../CartNavigator';
import { ProfileNavigator } from '../ProfileNavigator';
import { ShopNavigator } from '../ShopNavigator';
import { TabBarOptions } from './TabBarOptions';
import { routes } from '@src/6_shared/consts/routes';

const { tabs } = routes;

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: TabBarOptions,
  screens: {
    [tabs.Home]: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => <HomeIcon opacity={+focused || 0.5} />,
      },
    },
    [tabs.Profile]: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => <ProfileIcon opacity={+focused || 0.5} />,
      },
    },
    [tabs.Cart]: {
      screen: CartNavigator,
      options: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => <CartIcon opacity={+focused || 0.5} />,
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
