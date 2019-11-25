import React from 'react';
import { Provider } from 'react-redux';

import Home from './screens/Home'
import store from './state/store';

console.ignoredYellowBox = [
  'Warning: Require cycle'
];

const App = () => (
  <Provider store={store}>
        <Home />
    </Provider>
);

export default App;
