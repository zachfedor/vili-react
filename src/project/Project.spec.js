'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Project from './Project';


describe('<Project />', () => {
  let component;
  const project = 'test';

  beforeEach(() => {
    component = shallow(
      <Project project={ project } />
    );
  });

  it('should render markup', () => {
    expect(component.find('li')).to.have.length(1);
  });

  it('should render initial state', () => {
    expect(component.text()).to.equal('test');
  });
});
