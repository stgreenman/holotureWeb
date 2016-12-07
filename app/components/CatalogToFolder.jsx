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
                  title: "Love seats",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                },
                {
                  id: 3,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                },
                {
                  id: 4,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                }
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
      folderProducts: folderProducts.sort(this.sortByTitle),
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
        <div className="large-6 columns">
          <h5 className="title">Catalog</h5>
          <hr/>
          <Catalog products={catalogProducts} onSelected={this.onSelected}/>
        </div>
        <div className="small-2 columns vertical-alignment">

          <div className="buttons">
            <button type="button" className="success button" onClick={this.addToFolder}>Add</button>
            <button type="button" className="alert button" onClick={this.removeFromFolder}>Remove</button>
          </div>
        </div>
        <div className="large-6 columns">
          <h5 className="title">Folder</h5>
          <hr/>
          <Folder products={folderProducts} onSelected={this.onSelected}/>
        </div>
      </div>
    );
  }
});

module.exports = CatalogToFolder;
