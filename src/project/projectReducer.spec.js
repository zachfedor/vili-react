'use strict';

import { expect } from 'chai';
import projectReducer from './projectReducer';


describe('Project Reducer', () => {
  it('should provide initial state', () => {
    expect(projectReducer(undefined, {})).to.deep.equal([]);
  });

  it('should handle ADD_PROJECT action', () => {
    const state = projectReducer(
      ['one'],
      { type: 'ADD_PROJECT', value: 'two' }
    );
    expect(state).to.deep.equal(['one', 'two']);
  });

  it('should handle REMOVE_PROJECT action', () => {
    const state = projectReducer(
      ['one', 'two'],
      { type: 'REMOVE_PROJECT', value: 'two' }
    );
    expect(state).to.deep.equal(['one']);
  });

  it('should handle unknown actions', () => {
    const state = projectReducer(
      ['one'],
      { type: 'unknown action' },
    );
    expect(state).to.deep.equal(['one']);
  });
});

