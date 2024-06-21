import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import { enableReactotron } from '@config/dev.config';
import { enableMocking } from '@mock/mock.config';
import { store } from '@src/app/providers/StoreProvider/config/store';
import { enableMsw } from '@src/app/services/msw';

enableMocking().then(() => {
  console.log('mws was enabled');
  store.dispatch(enableMsw());
});
enableReactotron().then(() => console.log('reactotron was enabled'))


AppRegistry.registerComponent(appName, () => App)