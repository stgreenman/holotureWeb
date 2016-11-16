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
    var selected = catalogProducts.filter(function(product) {
                      var isSelected = product.selected;
                      product.selected = false;
                      return isSelected;
                    });
    folderProducts = folderProducts.concat(selected);
    catalogProducts = catalogProducts.filter(function(n) {
      return selected.indexOf(n) == -1;
    });
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
  render: function() {
    var {catalogProducts, folderProducts} = this.state;
    return (
      <div className="container">
        <Catalog products={catalogProducts} onSelected={this.onSelected}/>
        <div className="buttons">
          <button type="button" className="success button" onClick={this.addToFolder}>Add</button>
          <button type="button" className="alert button" onClick={this.removeFromFolder}>Remove</button>
        </div>
        <Folder products={folderProducts} onSelected={this.onSelected}/>
      </div>
    );
  }
});

module.exports = CatalogToFolder;
