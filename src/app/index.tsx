import { ShopHome } from '@src/screens/shop/home/ShopHome';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './providers/StoreProvider/config/store';
import { Navigation } from '@src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
