import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { selectCartAmount } from '@src/5_entities/cart/cart.slice';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { routes } from '@src/6_shared/consts/routes';
import { colors } from '@src/6_shared/lib/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CartNavigator } from '../CartNavigator';
import { ProfileNavigator } from '../ProfileNavigator';
import { ShopNavigator } from '../ShopNavigator';
import { TabBarOptions } from './TabBarOptions';
import { SvgProps } from 'react-native-svg';

const { tabs } = routes;

//const cartAmount = store.getState().cart.amount;
// ScreenComponentType<ParamListBase, string>

interface BadgeProps {
  amount: number;
  icon: React.FC<SvgProps>;
}

export const Badge = ({ icon: Icon, amount }: BadgeProps) => {
  return (
    <View>
      <Icon />
      {Boolean(amount) && <Text style={styles.badgeText}>{amount}</Text>}
    </View>
  );
};

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
  },
});

//https://medium.com/@indrajit.suryakanta.9/customise-tabbar-in-react-native-bottom-tab-navigator-e2ced7419220

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -5,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 0,
    backgroundColor: colors.red[500],
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    position: 'absolute',
    top: -5,
    right: -3,
    width: 18,
    height: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    backgroundColor: colors.red[500],
  },
});
