'use strict';


export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.value
      ];
    case 'REMOVE_PROJECT':
      return state.filter(p => p !== action.value);
    default:
      return state;
  }
};
