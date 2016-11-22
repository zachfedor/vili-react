'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
  it('should render markup', () => {
    const app = shallow(<App />);
    expect(app.find('main')).to.have.length(1);
    expect(app.find('h1')).to.have.length(1);
    expect(app.find('h1').text().trim()).to.equal('vili');
  });
});
