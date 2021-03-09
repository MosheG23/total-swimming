import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(reduxThunk)))
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);