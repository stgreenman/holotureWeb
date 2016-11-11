var React = require('react');
var Nav = require('Nav');
var CatalogToFolder = require('CatalogToFolder');
var Footer = require('Footer');

var Main = (props) => {
		return (
			<div>
				<Nav/>
				<div>
					<div>
						<CatalogToFolder/>
						<Footer/>
					</div>
				</div>

			</div>
		);
}

module.exports = Main;
