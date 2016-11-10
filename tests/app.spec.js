import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from '../app/app';

describe('<App />', function() {
  it('should render markup', function() {
    const app = shallow(<App />);
    expect(app.find('main')).to.have.length(1);
    expect(app.find('h1')).to.have.length(1);
    expect(app.find('h1').text().trim()).to.equal('vili');
  });

  it('should not have props', function() {
    const app = shallow(<App />);
    expect(app.props().name).to.equal(undefined);
  })
});
