var React = require('react');

var Nav = React.createClass({
	render: function() {
		var {itemCount} = this.props;
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
					<li><img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="holoture name logo" hight="70" width="160" className="inverted"></img></li>

					</ul>
				</div>
				<div className="top-bar-right">

					<ul className="menu">
						<li className="menu-text">
						<img src="https://s3-us-west-2.amazonaws.com/holoture/images/icon-folder.png" alt="folder icon" height="40" width="40" ></img>	Logan's Folder
						<div className="item-count-wrapper">
							<div className="item-count">{ itemCount }</div>
						</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});


module.exports = Nav;
