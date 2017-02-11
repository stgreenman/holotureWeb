var redux = require('redux');

var stateDefault = {
  folderName: "",
  folderProducts: [],
  catalogProducts: [],
};

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// Subscribe to changes


store.dispatch(actions.fetchProducts());

console.log("before", store.getState());
store.dispatch(actions.addToFolder({id:1}));

// How to unsubscribe
//unsubscribe();

store.dispatch(actions.addToFolder({id:2}));
store.dispatch(actions.removeFromFolder(1));
