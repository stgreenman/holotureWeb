var redux = require('redux');

var stateDefault = {
  folderName: "",
  folderProducts: [],
  catalogProducts: [],
};

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('state is', state);

  if (state.catalogProducts.isFetching) {
    console.log('Loading...');
  }
  else {
    console.log('products', state.catalogProducts.catalogProducts);
  }
});

store.dispatch(actions.fetchProducts());

console.log("before", store.getState());
store.dispatch(actions.addToFolder({id:1}));

// How to unsubscribe
//unsubscribe();

store.dispatch(actions.addToFolder({id:2}));
store.dispatch(actions.removeFromFolder(1));
