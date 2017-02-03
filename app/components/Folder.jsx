var React = require('react');
var ProductCard = require('ProductCard');
var ProductModal = require('ProductModal');

var folderProducts = [];

var Folder = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      selectedProduct: null,
    };
  },
  handleRemoveFromFolder: function(productId) {
    const productIndex = _.findIndex(this.folderProducts, { id: productId });
    this.props.onRemoved(this.folderProducts[productIndex]);
    this.setState({
      open: false
    });
  },
  handleOpenModal: function(productId) {
    var toggleOpen = ! this.state.open;
    const productIndex = _.findIndex(this.folderProducts, { id: productId });
    this.setState({
      open: toggleOpen,
      selectedProduct: this.folderProducts[productIndex],
    });
  },
  handleCloseModal: function() {
    this.setState({ open: false });
  },
  componentWillMount: function() {
    this.folderProducts = this.props.folderProducts;
    console.log('will mount', this.folderProducts);
  },
  render: function() {
    const {open, selectedProduct } = this.state;
    const { selectedCategoryId}  = this.props;
    console.log('render', this.folderProducts);

    var productList = this.folderProducts.filter(function(product) {
      return product.categoryId === selectedCategoryId
                || selectedCategoryId === undefined;
    }).map(function(product) {
      return <ProductCard
                key={product.id}
                product={product}
                type="folder"
                className="product-card"
                openModal={this.handleOpenModal}/>;
    }, this);

    if (productList.length < 1) {
      productList = <div>There isn't any furniture in this category.</div>
    }

    return (
      <div>
        <div className="center-content">
          { productList }
        </div>
        <ProductModal
          open={open}
          closeModal={this.handleCloseModal}
          product={selectedProduct || undefined}
          removeFromFolder={this.handleRemoveFromFolder}
          buttonAction={"remove"}/>
      </div>
    );
  }
});

module.exports = Folder;
