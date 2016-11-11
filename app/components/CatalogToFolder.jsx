var React = require('react');
var Catalog = require('Catalog');
var Folder = require('Folder');

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
                }
              ];
var folderProducts = [];

var CatalogToFolder = React.createClass({
  getInitialState: function() {
    return {
      catalogProducts: catalogProducts,
      folderProducts: folderProducts,
    };
  },
  addToFolder: function() {
    folderProducts = folderProducts.concat(catalogProducts.filter(function(product) {
      return product.selected;
    }));
    catalogProducts = catalogProducts.filter(function(product) {
      return ! product.selected;
    });
    this.setState({
      folderProducts: folderProducts,
      catalogProducts: catalogProducts
    });
  },
  removeFromFolder: function() {
    catalogProducts = catalogProducts.concat(folderProducts.filter(function(product) {
      return product.selected;
    }));
    folderProducts = folderProducts.filter(function(product) {
      return ! product.selected;
    });
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
      console.log(catalogProducts);
    }
  },
  render: function() {
    var {catalogProducts, folderProducts} = this.state;
    return (
      <div className="container">
        <Catalog products={catalogProducts} onSelected={this.onSelected}/>
        <div className="buttons">
          <button type="button" className="success button" onClick={this.addToFolder}>Add</button>
          <button type="button" className="alert button" onClick={this.removeFromFolder}>Remove</button>
        </div>
        <Folder products={folderProducts} />
      </div>
    );
  }
});

module.exports = CatalogToFolder;
