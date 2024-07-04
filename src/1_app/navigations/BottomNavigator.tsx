import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { debugStyles } from '@src/6_shared/consts/debug';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CartNavigator } from './CartNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { ShopNavigator } from './ShopNavigator';

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
      paddingHorizontal: 20,
    },
    tabBarActiveTintColor: 'white',
    tabBarLabelPosition: 'beside-icon',
    tabBarButton: ({
      style: _,
      children,
      focusable,
      accessible,
      accessibilityState,
      ...props
    }) => {
      const selected = accessibilityState?.selected || false;
      const style = {
        ...styles.button,
        ...(selected ? styles.selected : styles.unselected),
      };
      const c = (children as React.ReactElement)?.props.children;
      const icon = c[0];
      const label = c[1];

      return (
        <Pressable style={style} {...props}>
          {icon}
          {selected && label}
        </Pressable>
      );
    },
    tabBarItemStyle: { justifyContent: 'center' },
    //tabBarLabelStyle: { alignSelf: 'baseline' },
  },
  screens: {
    HomeTab: {
      screen: ShopNavigator,
      options: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <HomeIcon opacity={Number(focused) || 0.5} />
        ),
      },
    },
    ProfileTab: {
      screen: ProfileNavigator,
      options: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
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

const styles = StyleSheet.create({
  button: {
    //...debugStyles.red,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: 'rgba(48, 208, 128, 0.1)',
  },
  unselected: {
    height: '100%',
  },
});
