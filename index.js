import {AppRegistry} from 'react-native';
import App from './src/1_app';
import {name as appName} from './app.json';
import { enableReactotron } from '@config/dev.config';
import { enableMocking } from 'mock/mock.config';
import 'mock/db'

// Maybe for dev mode
enableReactotron().then(() => console.log('reactotron was enabled'))

// We need to delay register app for msw

function registerAppWithMsw() {
  AppRegistry.registerRunnable(appName, async initProps => {
    await enableMocking();
    AppRegistry.registerComponent(appName, () => App);
    AppRegistry.runApplication(appName, initProps);
  });
}

function registerApp() {
  AppRegistry.registerComponent(appName, () => App);
}

const app = __DEV__ ? registerAppWithMsw : registerApp;
//const app = registerApp;

app();

