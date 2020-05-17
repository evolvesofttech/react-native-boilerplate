import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './src/redux/rootReducer';
import rootSaga from './src/redux/rootSaga';
import RootScreen from './src/containers/RootScreen';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}
