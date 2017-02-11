var redux = require('redux');
var thunk = require('redux-thunk').default;
var {folderNameReducer, folderProductsReducer, catalogProductsReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    folderName: folderNameReducer,
    folderProducts: folderProductsReducer,
    catalogProducts: catalogProductsReducer,
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
  ));

  return store;
}
