var React = require('react');
var Nav = require('Nav');
var CatalogToFolder = require('CatalogToFolder');
var Footer = require('Footer');
var { Sidebar, Segment, Button, Menu, Button, Icon } = require('semantic-ui-react');

var itemsAddedToFolder = [];

var Main = React.createClass({
	toggleSideBarVisibility: function() {
		// console.log('sideBarVisible', this.state.sideBarVisible);
		this.setState({
			sideBarVisible: !this.state.sideBarVisible
		});
	},
	getInitialState: function() {
		return {
			itemCount: 0,
			sideBarVisible: false
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
		var {itemCount, sideBarVisible, hideOrShow} = this.state;

		return (
			<div>
				<Nav itemCount={itemCount} />
				<Button onClick={this.toggleSideBarVisibility}><Icon disabled name='list layout'></Icon></Button>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='push' width='thin' visible={sideBarVisible} vertical inverted>
						<Menu.Item name='couches'>
							Couches
						</Menu.Item>
						<Menu.Item name='chairs'>
							Chairs
						</Menu.Item>
						<Menu.Item name='lamps'>
							Lamps
						</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher>
						<div className="container">
							<div className="five column centered">
								<CatalogToFolder onAdded={this.onAdded} onRemoved={this.onRemoved}/>
							</div>
						</div>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
				<Footer/>
			</div>
		);
	}
});

module.exports = Main;


/*
<div className="background-grey">
	<div className="ui visible sidebar">
		<a className="item">
			Home
		</a>
	</div>
	<div className="pusher">

	</div>

</div>
*/
