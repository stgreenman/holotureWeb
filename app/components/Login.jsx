var React = require('react');
var { Button, Image, Modal, Header } = require('semantic-ui-react');

var Login = React.createClass({
	getInitialState: function(){
    return {
      open: false,
    };
  },
	render: function() {
		const {open} = this.state;


		return (
			<div className = "ui middle aligned center aligned grid">
				<div className="column">
			    <h2 className="ui image header">
			            <div className="content">
										<img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="folder icon" height="70" width="160" className="inverted"></img>
			                Log-in to your account
			            </div>
		        </h2>
			        <form className="ui large form">
			            <div className="ui stacked segment">
			                <div className="field">
			                    <div className="ui left icon input">
			                        <i className="user icon"></i>
			                        <input type="text" name="email" placeholder="E-mail address"></input>

			                        </div>
			                    </div>
			                    <div className="field">
			                        <div className="ui left icon input">
			                            <i className="lock icon"></i>
			                            <input type="password" name="password" placeholder="Password"></input>

			                            </div>
			                        </div>
			                        <button className="ui fluid large teal submit button">Login</button>
			                    </div>

			                </form>
											<div>
			                <button className="ui submit button grey">
			                    New to us?
			                    <a href="#">Sign Up</a>
			                </button>
											</div>
		            </div>
		        </div>

		);
	}
});


module.exports = Login;
