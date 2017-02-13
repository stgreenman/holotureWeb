var redux = require('redux');
var thunk = require('redux-thunk').default;
var {folderReducer, catalogReducer} = require('./../reducers/index');

export var configure = () => {
  var reducer = redux.combineReducers({
    folder: folderReducer,
    catalog: catalogReducer,
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
  ));

  return store;
}
