var redux = require('redux');

var stateDefault = {
  folderName: "",
  folderProducts: [],
  catalogProducts: [],
};


// Folder name reducer and action generators
// -----------------------
var folderNameReducer = (state = "Logan", action) => {
  switch (action.type) {
    case 'CHANGE_FOLDER_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeFolderName = (name) => {
  return {
    type: 'CHANGE_FOLDER_NAME',
    name
  }
};

// Folder reducer and action generators
// ----------------------
var folderProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FOLDER':
      return [
        ...state,
        action.product
      ];
    case 'REMOVE_FROM_FOLDER':
      return state.filter((product) => product.id !== action.id);
    default:
     return state;
  }
};

var addToFolder = (product) => {
  return {
    type: 'ADD_TO_FOLDER',
    product
  }
};

var removeFromFolder = (id) => {
  return {
    type: 'REMOVE_FROM_FOLDER',
    id
  }
};

// Catalog reducer and action generators
// -----------------------
var catalogProductsReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  folderName: folderNameReducer,
  folderProducts: folderProductsReducer,
  catalogProducts: catalogProductsReducer,
});

var store = redux.createStore(reducer);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('state is', state);
});

console.log("before", store.getState());
store.dispatch(addToFolder({id:1}));

// How to unsubscribe
//unsubscribe();

store.dispatch(addToFolder({id:2}));
store.dispatch(removeFromFolder(1));
