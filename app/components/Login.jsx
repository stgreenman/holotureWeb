var React = require('react');
var Footer = require('Footer');
var Nav = require('Nav');
var { Button, Image, Modal, Header } = require('semantic-ui-react');
var { hashHistory } = require('react-router');

var Login = React.createClass({
	getInitialState: function(){
    return {
      open: false,
    };
  },
	handleChange(event) {
		this.setState([value: event.target.value]);
	},
	handleOnClick: function() {
		hashHistory.push('/home');
	},
	validateEmail: function (value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(value)) {
			return re.test(value);
		}
		this.props.errormessage
  },
	validatePassword: function () {
    //you could do something here that does general validation for any form field
		var re = /{1-8}/;

    return re.test(value);
  },
	render: function() {
		const {open} = this.state;


		return (
			<div>
				<Nav itemCount={1} navState={"home"}/>
			<div className = "centers">
				<h2 className="ui image header">
					<div className="contentPadding">

							Log-in to your account
					</div>
				</h2>
				<div>
					<div className="column">
		        <div className="ui form">
		            <div className="ui stacked segment">
		                <div className="field">
	                    <div className="ui left icon input">
	                        <i className="user icon"></i>
	                        <input type="text" name="email" validate={this.validateEmail} errormessage="Email is invalid" onChange={this.handleChange} placeholder="E-mail address"></input>

                      	</div>
	                    </div>
	                    <div className="field">
	                        <div className="ui left icon input">
	                            <i className="lock icon"></i>
	                            <input type="password" name="password" vlaue={this.state.value} onChange={this.handleChange} placeholder="Password"></input>
                          </div>
                    	</div>
                  	<button className="ui fluid medium teal button" onClick={this.handleOnClick}>Login</button>
                  </div>
              </div>
						</div>
          </div>
					<Button className="ui button grey" to="/Home">
						Sign Up
					</Button>
      	</div>
				<Footer type="fixed"/>
				</div>


		);
	}
});


module.exports = Login;
