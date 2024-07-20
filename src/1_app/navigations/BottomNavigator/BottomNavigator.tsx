import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import React from 'react';
import { CartNavigator } from '../CartNavigator';
import { ProfileNavigator } from '../ProfileNavigator';
import { ShopNavigator } from '../ShopNavigator';
import { TabBarOptions } from './TabBarOptions';
import { routes } from '@src/6_shared/consts/routes';
import { store } from '@src/1_app/providers/StoreProvider/config/store';

const { tabs } = routes;

const cartAmount = store.getState().cart.amount;

export const BottomNavigator = createBottomTabNavigator({
  initialRouteName: tabs.Cart,
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
        tabBarBadge: cartAmount,
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => <CartIcon opacity={+focused || 0.5} />,
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
