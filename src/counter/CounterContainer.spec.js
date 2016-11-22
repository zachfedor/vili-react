'use strict'

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';
import Counter from './Counter';


const setup = (value = 0) => {
  const store = {
    value: 0,
  }

  const component = shallow(
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );

  const container = component.find(CounterContainer);
  const counter = container.find(Counter);

  return {
    component: component,
    container: container,
    counter: counter,
  };
}
