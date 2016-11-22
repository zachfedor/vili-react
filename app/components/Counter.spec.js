'use strict';

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Counter from './counter';


describe('<Counter />', () => {
  let component;
  const value = 0;
  const onIncrement = sinon.spy();
  const onDecrement = sinon.spy();

  beforeEach(() => {
    component = shallow(
      <Counter
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
  });

  it('should render markup', () => {
    expect(component.find('div')).to.have.length(1);
    expect(component.find('p')).to.have.length(1);
    expect(component.find('button')).to.have.length(2);
  });

  it('should render initial state', () => {
    expect(component.find('p').text().trim()).to.equal('0');
  })

  it('should have props', () => {
    expect(typeof component.instance().props.onIncrement).to.equal('function');
    expect(typeof component.instance().props.onDecrement).to.equal('function');
    expect(component.instance().props.value).to.equal(0);
  });

  it('should call onIncrement', () => {
    expect(onIncrement.calledOnce).to.equal(false);
    component.find('button').at(0).simulate('click');
    expect(onIncrement.calledOnce).to.equal(true);
  });

  it('should call onDecrement', () => {
    expect(onDecrement.calledOnce).to.equal(false);
    component.find('button').at(1).simulate('click');
    expect(onDecrement.calledOnce).to.equal(true);
  });
});
