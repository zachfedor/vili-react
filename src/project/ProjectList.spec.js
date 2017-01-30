'use strict';

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import ProjectList from './ProjectList';
import Project from './Project';


describe('<ProjectList />', () => {
  let component;
  const projects = ['one', 'two'];

  beforeEach(() => {
    component = shallow(
      <ProjectList projects={projects} />
    );
  });

  it('should render markup', () => {
    expect(component.find('ul')).to.have.length(1);
  });

  it('should render child components', () => {
    component = mount(
      <ProjectList projects={projects} />
    );
    expect(component.find(<Project />)).to.have.length(2);
  });
});
