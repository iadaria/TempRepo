import Reactotron, {
  ReactotronReactNative,
  networking,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron?: ReactotronReactNative;
  }
}

export const reactotron = Reactotron.configure({
  name: 'FoodShopApp',
})
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  /*   .use(networking({
    ignoreContentTypes: /^(image)\/.*$/i,
    ignoreUrls: /\/(logs|symbolicate)$/,
  })) */
  .use(reactotronRedux())
  .connect();

reactotron.clear();

console.tron = reactotron;
