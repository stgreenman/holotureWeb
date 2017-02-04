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
        folderProducts: [
          ...state.folderProducts,
          action.product
        ],
        folderNumber: state.folderProducts.length + 1,
      };
    case 'REMOVE_FROM_FOLDER':
      return {
        ...state,
        folderProducts: state.folderProducts.filter((product) => product.id !== action.id),
        folderNumber: state.folderProducts.length - 1,
      };
    default:
     return state;
  }
};

var store = redux.createStore(reducer);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('state is', state);
});

console.log("before", store.getState());
store.dispatch({
  type: 'ADD_TO_FOLDER',
  product: {id:1}
});

// How to unsubscribe
//unsubscribe();

store.dispatch({
  type: 'ADD_TO_FOLDER',
  product: {id:2}
});

store.dispatch({
  type: 'REMOVE_FROM_FOLDER',
  id: 1
});
