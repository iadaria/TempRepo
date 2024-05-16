import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

console.log("__DEV__", __DEV__);

if (__DEV__) {
  import ("./reactotron.config");
}

async function enableMocking() {
  if (!__DEV__) {
    return
  }
  console.log("Im here")
  await import('./msw.polyfills')
  const { server } = await import('./src/mock/server')
  server.listen()
}

enableMocking().then(() => {
  console.log('All is good')
});
AppRegistry.registerComponent(appName, () => App);