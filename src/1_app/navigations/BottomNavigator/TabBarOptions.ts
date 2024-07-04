import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { TabBarButton } from './TabBarButton';

export const TabBarOptions: BottomTabNavigationOptions = {
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
  tabBarButton: TabBarButton,
  tabBarItemStyle: { justifyContent: 'center' },
};
