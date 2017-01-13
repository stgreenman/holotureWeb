var React = require('react');

var Sidebar = React.createClass({
  render: function() {
    return (
      <div>
        <diV className="ui sidebar inverted menu">
          <a className="item">
            Couches
          </a>
          <a className="item">
            Chairs
          </a>
        </diV>
        <div className="ui top fixed menu">
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
