import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import { enableMocking, enableReactotron } from '@config/dev.config'

enableMocking().then(() => console.log('mws was enabled'));
//enableReactotron().then(() => console.log('reactotron was enabled'))

AppRegistry.registerComponent(appName, () => App);