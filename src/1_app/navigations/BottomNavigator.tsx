import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ShopNavigator } from './ShopNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { CartNavigator } from './CartNavigator';
import { CartIcon, HomeIcon, ProfileIcon } from '@src/6_shared/assets/icons';
import { colors } from '@src/6_shared/lib/theme';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WIDTH } from '@src/6_shared/consts/dimentsions';
import { debugStyles } from '@src/6_shared/consts/debug';

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
    //tabBarActiveBackgroundColor: 'rgba(48, 208, 128, 0.1)',
    tabBarButton: ({
      style,
      children,
      focusable,
      accessible,
      accessibilityState,
      ...props
    }) => {
      console.log({ accessibilityState });
      const style2 = {
        ...(accessibilityState?.selected && {
          backgroundColor: 'rgba(48, 208, 128, 0.1)',
        }),
      };
      return (
        <Pressable style={[styles.button, style2]} {...props}>
          {children}
        </Pressable>
      );
    },
    tabBarItemStyle: { justifyContent: 'center' },
    //tabBarIconStyle: { ...debugStyles.blue },
    tabBarLabelStyle: {
      //...debugStyles.red,
      alignSelf: 'baseline',
    },

    //tabBarBackground: () => <View></View>,
    /* tabBarButton: ({ children, ...props }: BottomTabBarButtonProps) => {
      return <Custom;
    }, */
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
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
