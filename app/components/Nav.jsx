var React = require('react');

var Nav = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Holoture</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<img src="https://s3-us-west-2.amazonaws.com/holoture/images/icon-folder.png" alt="folder icon"></img>
					<ul className="menu">
						<li className="menu-text">
							Logan's Folder
						</li>
					</ul>
				</div>
			</div>
		);
	}
});


module.exports = Nav;
