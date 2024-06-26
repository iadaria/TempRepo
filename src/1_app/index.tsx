import { Navigation } from '@src/navigation/Navigation';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './providers/StoreProvider/config/store';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={'transparent'} translucent />
          <Navigation />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
