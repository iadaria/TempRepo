import { Navigation } from '@src/1_app/navigations/Navigation';
import { theme } from '@src/6_shared/config/theme/theme';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './providers/StoreProvider/config/store';

function App(): React.JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={'transparent'} translucent />
          <Navigation theme={theme} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
