
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

import { loadHeros } from './actions';

const initialState = {
  heros: [],
};
const store = configureStore(initialState);

store.dispatch(loadHeros());

console.log('mounting react app ...');  // eslint-disable-line no-console
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


export default store;
