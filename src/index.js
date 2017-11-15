import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddelware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddelware(reducers)}>
    <App />
  </Provider>  
  , document.querySelector('.container'));
