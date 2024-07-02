import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '@src/2_screens/auth/login/AuthScreen';

export const AuthNavigator = createNativeStackNavigator({
  screens: {
    AuthScreen: {
      screen: AuthScreen,
    },
  },
});
