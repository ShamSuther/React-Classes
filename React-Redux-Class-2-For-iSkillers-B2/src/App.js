import React from 'react';
import { Home } from './pages';
import { Provider } from 'react-redux';
import store from './store'
let App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div >
  );
}

export default App;
