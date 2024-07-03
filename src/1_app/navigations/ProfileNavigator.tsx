import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Text } from 'react-native-svg';

const ProfileScreen = () => <Text>Profile</Text>;

export const ProfileNavigator = createNativeStackNavigator({
  screens: {
    Profile: ProfileScreen,
  },
});
