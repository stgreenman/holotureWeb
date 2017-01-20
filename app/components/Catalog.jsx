var React = require('react');
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
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/AllureChair.JPG",
                  title: "Allure Chair",
                  description: "This chair is so very alluring.",
                  selected: false
                },
                {
                  id: 4,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GliderRecliner.JPG",
                  title: "Glider Recliner",
                  description: "Glide in this recliner all day long.",
                  selected: false
                },
                {
                  id: 5,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GordonAccentChair.JPG",
                  title: "Gordon Accent Chair",
                  description: "This chair will be the perfect accent!",
                  selected: false
                },
                {
                  id: 6,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/MotionSofa.JPG",
                  title: "Motion Sofa",
                  description: "Dont get motion sickness in this motion sofa!",
                  selected: false
                },
                {
                  id: 7,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/SmallFullSleeper.JPG",
                  title: "Small Full Sleeper",
                  description: "This sleepr may be small but it is definitely full!",
                  selected: false
                },
                {
                  id: 8,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/PippaAccentChair.JPG",
                  title: "Pippa Accent Chair",
                  description: "A great accent chair for the living room!",
                  selected: false
                },
                {
                  id: 9,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/OxfordRecliner.JPG",
                  title: "Oxford Recliner",
                  description: "High class recliner for the living room. So comfortable!",
                  selected: false
                },
              ];
var folderProducts = [];

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
      catalogProducts: catalogProducts.sort(this.sortByTitle),
      open: false,
      selectedProduct: null,
    };
  },
  handleAddToFolder: function(productId) {
    const productIndex = _.findIndex(catalogProducts, { id: productId });
    this.props.onAdded(catalogProducts[productIndex]);
    catalogProducts = catalogProducts.filter(function(n) {
      return n.id != productId
    });
    this.setState({
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
          addToFolder={this.handleAddToFolder}
          />
      </div>
    );
  }
});

module.exports = Catalog;
