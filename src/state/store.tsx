import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducers from './reducer';
import rootEpic from './epic';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
