var React = require('react');
var Catalog = require('Catalog');
var ProductModal = require('ProductModal');
var ProductCard = require('ProductCard');
var _ = require('lodash');

var catalogProducts = [
                {
                  id: 1,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false
                },
                {
                  id: 2,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                },
                {
                  id: 3,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Other Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                },
                {
                  id: 4,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "One more Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                },
                {
                  id: 5,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Another Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false
                },
                {
                  id: 6,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false
                },
                {
                  id: 7,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false
                },
              ];
var folderProducts = [];

var CatalogToFolder = React.createClass({
  sortByTitle: function(a, b) {
    if (a.title > b.title)
      return 1;
    if (a.title < b.title)
      return -1;

    return 0;
  },
  getInitialState: function() {
    return {
      catalogProducts: catalogProducts.sort(this.sortByTitle),
      open: false,
      selectedProduct: null,
    };
  },
  addToFolder: function() {
    var selected = catalogProducts.filter(function(product) {
                      var isSelected = product.selected;
                      product.selected = false;
                      return isSelected;
                    });
    folderProducts = folderProducts.concat(selected);
    catalogProducts = catalogProducts.filter(function(n) {
      return selected.indexOf(n) == -1;
    });
    folderProducts.sort(this.sortByTitle);
    catalogProducts.sort(this.sortByTitle);
    this.props.onAdded(selected);
    this.setState({
      folderProducts: folderProducts,
      catalogProducts: catalogProducts
    });
  },
  removeFromFolder: function() {
    var selected = folderProducts.filter(function(product) {
                      var isSelected = product.selected;
                      product.selected = false;
                      return isSelected;
                    });
    catalogProducts = catalogProducts.concat(selected);
    folderProducts = folderProducts.filter(function(n) {
      return selected.indexOf(n) == -1;
    });
    folderProducts.sort(this.sortByTitle);
    catalogProducts.sort(this.sortByTitle);
    this.props.onRemoved(selected);
    this.setState({
      folderProducts: folderProducts,
      catalogProducts: catalogProducts
    });
  },
  onSelected: function(id, type, setSelected) {
    if (type === "catalog") {
      catalogProducts.map(function(product) {
        if (product.id === id) {
          product.selected = setSelected;
        }
      });
    }
    else if (type === "folder") {
      folderProducts.map(function(product) {
        if (product.id === id) {
          product.selected = setSelected;
        }
      });
    }
  },
  handleOpenModal: function(productId) {
    var toggleOpen = ! this.state.open;
    const productIndex = _.findIndex(catalogProducts, { id: productId });
    console.log("productIndex", productIndex);
    this.setState({
      open: toggleOpen,
      selectedProduct: catalogProducts[productIndex],
    });
  },
  handleCloseModal: function() {
    this.setState({ open: false });
  },
  render: function() {
    var {catalogProducts, folderProducts, open, selectedProduct } = this.state;

    var productList = catalogProducts.map(function(product) {
      return <ProductCard
                key={product.id}
                product={product}
                type="catalog"
                className="product-card"
                openModal={this.handleOpenModal}
                />;
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
          />
      </div>
    );
  }
});

module.exports = CatalogToFolder;
