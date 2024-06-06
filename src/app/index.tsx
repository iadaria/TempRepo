import { Navigation } from '@src/navigation/Navigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './providers/StoreProvider/config/store';

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
