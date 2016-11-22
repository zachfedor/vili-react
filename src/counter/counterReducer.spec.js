'use strict';

import { expect } from 'chai';
import counter from './counterReducer';


describe('Counter Reducer', () => {
  it('should provide initial state', () => {
    expect(counter(undefined, {})).to.equal(0);
  });

  it('should handle INCREMENT action', () => {
    expect(counter(1, { type: 'INCREMENT' })).to.equal(2);
  });

  it('should handle DECREMENT action', () => {
    expect(counter(1, { type: 'DECREMENT' })).to.equal(0);
  });

  it('should ignore other actions', () => {
    expect(counter(1, { type: 'unknown' })).to.equal(1);
  });
});
