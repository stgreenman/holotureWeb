var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');

var Nav = React.createClass({
	handleOnClick: function() {

	},
	render: function() {
		var {catalogOrFolder, folderProducts} = this.props;

		const itemCount = folderProducts.length;

		var rightNav = null;
		if (catalogOrFolder === "catalog") {
			rightNav = <Link to="/folder">
									<span className="item-count">{ itemCount }</span>
									<img src="https://s3-us-west-2.amazonaws.com/holoture/images/icon-folder.png" alt="folder icon" height="40" width="40" ></img>	Logan's Folder
								</Link>;
		}
		else if (catalogOrFolder === "folder") {
			rightNav = <Link to="/">
										Back to Catalog
									</Link>;
		}

		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
					<li><img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="holoture name logo" hight="70" width="160" className="inverted"></img></li>
					<li className="menu-text"><Link to="/login">Login</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">

					<ul className="menu">
						<li className="menu-text">
							{ rightNav }
						</li>
					</ul>
				</div>
			</div>
		);
	}
});


module.exports = connect(
	(state) => {
		return {
			folderProducts: state.folderProducts,
		};
	}
)(Nav);
