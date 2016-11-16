var React = require('react');
var Nav = require('Nav');
var CatalogToFolder = require('CatalogToFolder');
var Footer = require('Footer');

var Main = (props) => {
		return (
			<div className="background-grey">
				<Nav/>
				<Footer/>
				<div>
					<div>
						<CatalogToFolder/>
					</div>
				</div>

			</div>
		);
}

module.exports = Main;
