import React from 'react';
import { setupReducers, setupStore } from './Store'
import AppRouter from '../AppRouter/AppRouter'
import { Provider } from 'react-redux'

const store = setupStore(setupReducers());

function App() {
  return (
    <div className="ref_app_root">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
