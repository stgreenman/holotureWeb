var React = require('react');
var ProductRow = require('ProductRow');

var Catalog = React.createClass({
  render: function() {
    return (
      <div className="catalog-container">
        <ProductRow />
      </div>
    );
  }
});

module.exports = Catalog;
