import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron?: ReactotronReactNative;
  }
}

export const reactotron = Reactotron.configure({
  name: 'FoodShopApp',
  //host: '192.168.0.10',
})
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
    asyncStorage: true,
  })
  .setAsyncStorageHandler(AsyncStorage)
  /*   .use(networking({
    ignoreContentTypes: /^(image)\/.*$/i,
    ignoreUrls: /\/(logs|symbolicate)$/,
  })) */
  .use(reactotronRedux())
  //.use(asyncStorage({}))
  .connect();

reactotron.clear();

console.tron = reactotron;
