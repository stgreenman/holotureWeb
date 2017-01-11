var React = require('react');
var ProductCard = require('ProductCard');

var Folder = React.createClass({
  onSelected: function(id, type, setSelected) {
    this.props.onSelected(id, type, setSelected);
  },
  render: function() {
    var {products} = this.props;

    var productList = products.map(function(product) {
      return <ProductCard key={product.id} product={product} onSelected={this.onSelected} type="folder"/>;
    }, this);

    return (
      <div className="folder-card">
        <div>
        { productList }
        </div>
      </div>
    );
  }
});

module.exports = Folder;
