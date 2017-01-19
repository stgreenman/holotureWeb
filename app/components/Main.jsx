var React = require('react');
var Nav = require('Nav');
var Catalog = require('Catalog');
var Footer = require('Footer');
var { Sidebar, Segment, Button, Menu, Button, Icon } = require('semantic-ui-react');

var itemsAddedToFolder = [];

var Main = React.createClass({
	toggleSideBarVisibility: function() {
		// console.log('sideBarVisible', this.state.sideBarVisible);
		this.setState({
			sideBarVisible: !this.state.sideBarVisible,
			sideBarButtonActive: !this.state.sideBarButtonActive
		});
	},
	getInitialState: function() {
		return {
			itemCount: 0,
			sideBarVisible: false,
			sideBarButtonActive: false,
		}
	},
	onAdded: function(item) {
		itemsAddedToFolder = itemsAddedToFolder.concat(item);
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
		var {itemCount, sideBarVisible, hideOrShow, sideBarButtonActive} = this.state;

		return (
			<div>
				<Nav itemCount={itemCount} />
				<Button toggle onClick={this.toggleSideBarVisibility} active={sideBarButtonActive}><Icon disabled name='list layout'></Icon></Button>
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
								<Catalog onAdded={this.onAdded} onRemoved={this.onRemoved}/>
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
