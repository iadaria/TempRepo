import React from 'react';
import { CounterScreeen } from '../screens/counter/ui/CounterScreeen';
import { Provider } from 'react-redux';
import { store } from './store';

function App(): React.JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <CounterScreeen />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
