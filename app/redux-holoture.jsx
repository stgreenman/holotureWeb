var redux = require('redux');

var stateDefault = {
  folderNumber: 0,
  folderProducts: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD_TO_FOLDER':
      return {
        ...state,
        folderProducts: state.products.concat(action.product),
        folderNumber: state.products.length + 1,
      };
    default:
     return state;
  }
};

var store = redux.createStore(reducer);

console.log("before", store.getState());
store.dispatch({
  type: 'ADD_TO_FOLDER',
  product: {id:1}
});
console.log("after", store.getState());
store.dispatch({
  type: 'ADD_TO_FOLDER',
  product: {id:2}
});
console.log("after after", store.getState());
