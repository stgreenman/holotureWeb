var React = require('react');
var Nav = require('Nav');
var CatalogToFolder = require('CatalogToFolder');

var Main = (props) => {
		return (
			<div>
				<Nav/>
				<div>
					<div>
						<CatalogToFolder/>
					</div>
				</div>
			</div>
		);
}

module.exports = Main;
