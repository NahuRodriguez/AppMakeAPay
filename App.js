import React from 'react';
import { Provider } from 'react-redux'; // Add missing import
import AppNavigator from './navigation/AppNavigator';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
