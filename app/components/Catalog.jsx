var React = require('react');
var {connect} = require('react-redux');
var ProductModal = require('ProductModal');
var ProductCard = require('ProductCard');
var _ = require('lodash');

var Catalog = React.createClass({
  sortByTitle: function(a, b) {
    if (a.title > b.title)
      return 1;
    if (a.title < b.title)
      return -1;

    return 0;
  },
  getInitialState: function() {
    return {
      open: false,
      selectedProduct: null,
    };
  },
  handleOpenModal: function(productId) {
    var toggleOpen = ! this.state.open;
    var catalogProducts = this.props.catalog.catalogProducts;
    const productIndex = _.findIndex(catalogProducts, { id: productId });
    this.setState({
      open: toggleOpen,
      selectedProduct: catalogProducts[productIndex],
    });
  },
  handleCloseModal: function() {
    this.setState({ open: false });
  },
  render: function() {
    const {open, selectedProduct } = this.state;
    const { selectedCategoryId, catalog }  = this.props;

    if (!catalog.isFetching) {
      var catalogProducts = catalog.catalogProducts.sort(this.sortByTitle);
      var productList = catalogProducts.filter(function(product){
        return product.categoryId === selectedCategoryId
                  || selectedCategoryId === undefined;
      }).map(function(product) {
        return <ProductCard
                  key={product.id}
                  product={product}
                  type="catalog"
                  className="product-card"
                  openModal={this.handleOpenModal}>
              </ProductCard>;
      }, this);

      if (productList.length < 1) {
        productList = <div>There isn't any furniture in this category.</div>
      }

      return (
        <div className="aboveFooter">
          <div className="center-content">
            { productList }
          </div>
          <ProductModal
            open={open}
            closeModal={this.handleCloseModal}
            product={selectedProduct || undefined}
            buttonAction={"add"}>
          </ProductModal>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }

  }
});

module.exports = connect(
  (state) => {
    return {
      catalog: state.catalog
    };
  }
)(Catalog);
