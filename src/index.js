import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { getShoppingListItems } from './actions/sampleActions';
import App from './components/App';
import registerServiceWorker from './workers/registerServiceWorker';

const store = configureStore();

// preload data to pass into app
store.dispatch(getShoppingListItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('launchpad')
);
registerServiceWorker();
