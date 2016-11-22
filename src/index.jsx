'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/app';
import counter from './counter/counterReducer';


const store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
