var React = require('react');
var ProductCard = require('ProductCard');

var Catalog = React.createClass({
  onSelected: function(id, type, setSelected) {
    this.props.onSelected(id, type, setSelected);
  },
  render: function() {
    var {products} = this.props;

    var productList = products.map(function(product) {
      return <ProductCard key={product.id} product={product} onSelected={this.onSelected} type="catalog" className="product-card"/>;
    }, this);

    return (
      <div className="center-content">
        { productList }
      </div>
    );
  }
});

module.exports = Catalog;
