var React = require('react');
var ProductCard = require('ProductCard');
var ProductModal = require('ProductModal');

var Folder = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      selectedProduct: null,
    };
  },
  handleOpenModal: function(productId) {
    const toggleOpen = ! this.state.open;
    const {folderProducts} = this.props;
    const productIndex = _.findIndex(folderProducts, { id: productId });
    this.setState({
      open: toggleOpen,
      selectedProduct: folderProducts[productIndex],
    });
  },
  handleCloseModal: function() {
    this.setState({ open: false });
  },
  render: function() {
    const {open, selectedProduct } = this.state;
    const {folderProducts, selectedCategoryId}  = this.props;

    var productList = folderProducts.map(function(product) {
      if (product.categoryId === selectedCategoryId || selectedCategoryId === undefined) {
        return <ProductCard
                  key={product.id}
                  product={product}
                  type="folder"
                  className="product-card"
                  openModal={this.handleOpenModal}/>;
      }
    }, this);

    return (
      <div>
        <div className="center-content">
          { productList }
        </div>
        <ProductModal
          open={open}
          closeModal={this.handleCloseModal}
          product={selectedProduct || undefined}
          addToFolder={this.handleAddToFolder}
          showButtons={false}/>
      </div>
    );
  }
});

module.exports = Folder;
