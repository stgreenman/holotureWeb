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
			<div className = "center">
				<h2 className="ui image header">
					<div className="content">
						<img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="folder icon" height="70" width="160" className="inverted"></img>
							Log-in to your account
					</div>
				</h2>
				<div>
					<div className="column">
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
						</div>
          </div>
					<Button className="ui button grey">
						New to us?
						<br/>
						Sign Up
					</Button>
      	</div>
		);
	}
});


module.exports = Login;
