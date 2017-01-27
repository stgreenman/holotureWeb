var redux = require('redux');

console.log('starting redux');

var reducer = (state = {name: 'Anonymous'}, action) => {

  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        // ...state,
        name: action.name,
      };
    default:
     return state;
  }
};

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('current state', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Logan',
};
store.dispatch(action);
