var React = require('react');
var ProductRow = require('ProductRow');

var Folder = React.createClass({
  render: function() {
    var {products} = this.props;

    var productList = products.map(function(product) {
      return <ProductRow key={product.id} product={product} />;
    });

    return (
      <div className="folder-container">
        { productList }
      </div>
    );
  }
});

module.exports = Folder;
