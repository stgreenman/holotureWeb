var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Login = require('Login');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
// require('style!css!semantic/dist/semantic.min.css');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={() => (<Main catalogOrFolder="catalog"/>)}></Route>
		<Route path="/folder" component={() => (<Main catalogOrFolder="folder"/>)}></Route>
		<Route path="/login" component={Login}></Route>
	</Router>,
	document.getElementById('app')
);

require('./redux-holoture.jsx');
