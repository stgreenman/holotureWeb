var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Login = require('Login');
var Home = require('Home');

var store = require('configureStore').configure();
var actions = require('actions');

store.dispatch(actions.fetchProducts());
store.dispatch(actions.fetchFolders());
store.dispatch(actions.setSelectedFolder(1));

var unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('state is', state);
});

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
// require('style!css!semantic/dist/semantic.min.css');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={() => (<Main navState="catalog"/>)}></Route>
			<Route path="/folder" component={() => (<Main navState="folder"/>)}></Route>
			<Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
