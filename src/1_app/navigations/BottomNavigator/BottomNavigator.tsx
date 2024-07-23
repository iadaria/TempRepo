import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { selectCartAmount } from '@src/5_entities/cart/cart.slice';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { routes } from '@src/6_shared/consts/routes';
import { Badge } from '@src/6_shared/ui/Badge';
import React from 'react';
import { useSelector } from 'react-redux';
import { CartNavigator } from '../CartNavigator';
import { ProfileNavigator } from '../ProfileNavigator';
import { ShopNavigator } from '../ShopNavigator';
import { TabBarOptions } from './TabBarOptions';

const { tabs } = routes;

//const cartAmount = store.getState().cart.amount;
// ScreenComponentType<ParamListBase, string>

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

    [tabs.Cart]: {
      screen: CartNavigator,
      options: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => {
          const amount = useSelector(selectCartAmount);
          return (
            <Badge
              amount={amount}
              icon={() => <CartIcon opacity={+focused || 0.5} />}
            />
          );
        },
      },
    },

    [tabs.Profile]: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => <ProfileIcon opacity={+focused || 0.5} />,
      },
    },
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220
