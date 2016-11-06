var React = require('react');

var ProductRow = React.createClass({
  render: function() {
    return (
      <div className="row">
        <img src="https://ak1.ostkcdn.com/images/products/11706636/P18629716.jpg" className="image"></img>
        <div className="descriptive-text">
          <h5>Couch</h5>
          <p>This couch is an excellent choice because it's just so darn comfortable</p>
        </div>
      </div>
    );
  }
});

module.exports = ProductRow;
