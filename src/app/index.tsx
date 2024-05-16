import React from 'react';
import { CounterScreeen } from '../screens/counter/ui/CounterScreeen';
import { Provider } from 'react-redux';
import { store } from './providers/StoreProvider/config/store';
import { MswTestButton } from '../common/ui/MswTestButton';

function App(): React.JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <CounterScreeen />
        <MswTestButton />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
