import Reactotron, {
  ReactotronReactNative,
  //networking,
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
  //  .use(networking())
  .useReactNative()
  .configure({ name: 'FoodShopApp' })
  .use(reactotronRedux())
  .connect();

reactotron.clear();

console.tron = reactotron;
