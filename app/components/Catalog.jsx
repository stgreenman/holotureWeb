var React = require('react');
var ProductModal = require('ProductModal');
var ProductCard = require('ProductCard');
var _ = require('lodash');

var catalogProducts = [
                {
                  id: 1,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "Compact comfort. The Finn Sofa's tailored lines, tapered legs and button tufting are inspired by mid-century forms. Its petite build makes it ideal for smaller spaces, and each sofa is crafted in the USA with hand-built frames and hand-finished upholstery.",
                  specificDetails: "Overall product dimensions: 60.5\"w x 35.5\"d x 32\"h.",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 2,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "Collection items available include: Queen Sleeper, Sofa, Loveseat, Chair and a Half, Chair Sleeper, Chair, Ottoman, Storage Ottoman, and Sectional. Featuring sock arms, wedge legs, semi-attached bed-pillow back and boxed seat cushions, Alex lends itself to a relaxed environment. Walnut is the standard finish on the legs. Includes two 19 accent pillows.",
                  specificDetails: "Overall product dimensions: 34.5\" H x 52.75\" W x 26\" D",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 3,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/AllureChair.JPG",
                  title: "Allure Chair",
                  description: "The track arms and deep seating offer stylish comfort that has a casual appeal. Collection items available include: Sofa, Freestanding Chaise, Chair, Ottomans and Sectional options. Available in fabric only.",
                  specificDetails: "Overall product dimensions: 35\" H x 42\" W x 42.5\" D",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 4,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GliderRecliner.JPG",
                  title: "Glider Recliner",
                  description: "The Bedford reclining suite features a welted round sock arm with a chaise padded seat and a sectioned split back. Available in fabric or leather. The wallsaver recliner will not swivel or glide.",
                  specificDetails: "Overall product dimensions: 42.5\" H x 40\" W x 42\" D",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 5,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GordonAccentChair.JPG",
                  title: "Gordon Accent Chair",
                  description: "Features a button tufted rolled back, uniquely curved arms and distinguished turned legs. Optional contrast welt, nail head trim and finish options are available. Available in fabric or leather. Coordinating ottoman also available.",
                  specificDetails: "Overall product dimensions: 41\" H x 32\" W x 39.5\" D",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 6,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/MotionSofa.JPG",
                  title: "Motion Sofa",
                  description: "Available in leather only. Each end seat of the sofa reclines while the center seat is stationary. Hamilton combines classic styling with a hand rubbed leather that gives this collection an old world flair. Full front panels arms and shaped front rail are nailed in Antique Brass and the boxed backs and seats are seamed in a picture frame style. The leather shown is hand rubbed.",
                  specificDetails: "Overall product dimensions: 39\" H x 83\" W x 38\" D",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 7,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/SmallFullSleeper.JPG",
                  title: "Small Full Sleeper",
                  description: "Design your own sofa, sectional or chair by specifying a frame size; arm, base, cushion and back styles; and one of many fabrics. Then we custom-create the seat for you and have it ready for delivery in just 30 days. The style shown here is small scale.",
                  specificDetails: "Overall product dimensions: 39\" H x 79\" W x 39\" D",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 8,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/PippaAccentChair.JPG",
                  title: "Pippa Accent Chair",
                  description: "A timeless spool styled wood carved chair with generous scale and deep comfort. Pippa is available in any of the upholstery finishes. Seat construction is webbing. Available in fabric only.",
                  specificDetails: "Overall product dimensions: 39\" H x 28.5\" W x 35\" D",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 9,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/OxfordRecliner.JPG",
                  title: "Oxford Recliner",
                  description: "A debonair seating collection, it's rumored that the Oxford is our most comfortable. And that could very well be true since the cushions are plumped with blend down fill. Front wood legs are turned. Nail head trim is optional. Power option available.",
                  specificDetails: "Overall product dimensions: 41\" H x 34\" W x 40\" D",
                  selected: false,
                  categoryId: 0,
                },
              ];

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
    const {catalogProducts, open, selectedProduct } = this.state;
    const { selectedCategoryId }  = this.props;

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
      console.log('here');
      productList = <div>There isn't any furniture in this category.</div>
    }
    else {
      console.log(productList);
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
          addToFolder={this.handleAddToFolder}
          showButtons={true}>
        </ProductModal>
      </div>
    );
  }
});

module.exports = Catalog;
