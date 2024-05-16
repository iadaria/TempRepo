import Reactotron, {
  ReactotronReactNative,
  networking,
} from 'reactotron-react-native';

declare global {
  interface Console {
    tron: ReactotronReactNative;
  }
}

const reactotron = Reactotron.configure({
  name: 'FoodShopApp',
})
  .use(networking())
  .useReactNative()
  .connect();

reactotron.clear();

console.tron = reactotron;
