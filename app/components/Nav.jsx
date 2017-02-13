var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');

var Nav = React.createClass({
	handleOnClick: function() {

	},
	render: function() {
		var {navState, folder} = this.props;

		var rightNav = null;
		if (navState === "catalog" && !folder.isFetching) {
			var selectedFolder = folder.folders.find((folderItem) => {
				return folderItem.id === folder.selectedFolderId;
			});

			const itemCount = folder.products.length;
			rightNav = <Link to="/folder">
									<span className="item-count">{ itemCount }</span>
									<img src="https://s3-us-west-2.amazonaws.com/holoture/images/icon-folder.png" alt="folder icon" height="40" width="40" ></img>	{selectedFolder.name}&#39;s Folder
								</Link>;
		}
		else if (navState === "folder") {
			rightNav = <Link to="/">
										Back to Catalog
									</Link>;
		}
		else if (navState === "home") {
			rightNav = <li><Link to="/login">
									Login
								</Link></li>
		}
		else {
			rightNav = <div></div>;
		}

		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<Link to="/home">
							<li><img src="https://s3-us-west-2.amazonaws.com/holoture/images/shortNLogo.png" alt="holoture name logo" hight="70" width="160" className="inverted"></img></li>
						</Link>
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
			folder: state.folder,
		};
	}
)(Nav);
