var React = require('react');
var {connect} = require('react-redux');
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
    var toggleOpen = ! this.state.open;
    const productIndex = _.findIndex(this.props.folderProducts, { id: productId });
    this.setState({
      open: toggleOpen,
      selectedProduct: this.props.folderProducts[productIndex],
    });
  },
  handleCloseModal: function() {
    this.setState({ open: false });
  },
  render: function() {
    const {open, selectedProduct } = this.state;
    const { selectedCategoryId, folderProducts }  = this.props;

    var productList = folderProducts.filter(function(product) {
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
          buttonAction={"remove"}/>
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      folderProducts: state.folderProducts,
    };
  }
)(Folder);
