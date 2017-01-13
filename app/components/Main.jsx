var React = require('react');
var Nav = require('Nav');
var CatalogToFolder = require('CatalogToFolder');
var Footer = require('Footer');

var itemsAddedToFolder = [];

var Main = React.createClass({
	getInitialState: function() {
		return {
			itemCount: 0,
		}
	},
	onAdded: function(items) {
		itemsAddedToFolder = itemsAddedToFolder.concat(items);
		this.setState({
			itemCount: itemsAddedToFolder.length,
		});
	},
	onRemoved: function(items) {
		items.map(function(item) {
			var index = itemsAddedToFolder.indexOf(item);
			itemsAddedToFolder.splice(index, 1);
			this.setState({
				itemCount: itemsAddedToFolder.length,
			});
		}, this);
	},
	render: function() {
		var {itemCount} = this.state;
		return (
			<div className="background-grey">
				<Nav itemCount={itemCount} />
				<div className="ui visible sidebar">
					<a className="item">
						Home
					</a>
				</div>
				<div className="pusher">
					<div className="container">
						<div className="five column centered">
							<CatalogToFolder onAdded={this.onAdded} onRemoved={this.onRemoved}/>
						</div>
						<Footer/>
					</div>
				</div>

			</div>
		);
	}
});

module.exports = Main;
