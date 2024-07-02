import { createStaticNavigation } from '@react-navigation/native';
import { store } from '../providers/StoreProvider/config/store';
import { AuthNavigator } from './AuthNavigator';
import { ShopNavigator } from './ShopNavigator';
import { logline } from '@src/6_shared/lib/debug/log';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const isAuthenticated = () => store.getState().auth.isAuthenticated;
const isNotAuthenticated = () => !isAuthenticated;

const RootStack = createNativeStackNavigator({
  screens: {
    LoggedOut: {
      if: isNotAuthenticated,
      screen: AuthNavigator,
    },
    LoggedIn: {
      if: isAuthenticated,
      screen: ShopNavigator,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

/* export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const msw = useSelector(selectMswEnabled); // TODO move into another component

  const Screen = () => (isAuthenticated ? <ShopHomeScreen /> : <AuthScreen />) 

return (
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  ); 
};
 */
