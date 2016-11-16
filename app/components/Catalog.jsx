var React = require('react');
var ProductRow = require('ProductRow');

var Catalog = React.createClass({
  onSelected: function(id, type, setSelected) {
    this.props.onSelected(id, type, setSelected);
  },
  render: function() {
    var {products} = this.props;

    var productList = products.map(function(product) {
      return <ProductRow key={product.id} product={product} onSelected={this.onSelected} type="catalog"/>;
    }, this);

    return (
      <div className="catalog-card">
        <div>
          { productList }
        </div>
      </div>
    );
  }
});

module.exports = Catalog;
