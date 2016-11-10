var React = require('react');
var Catalog = require('Catalog');
var Folder = require('Folder');

var catalogProducts = [
                {
                  id: 1,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!"
                },
                {
                  id: 2,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair."
                }
              ];
var folderProducts = [];

var CatalogToFolder = React.createClass({
  addToFolder: function() {
    folderProducts = catalogProducts;
  },
  render: function() {
    return (
      <div className="container">
        <Catalog products={catalogProducts}/>
        <div className="buttons">
          <button type="button" className="success button" onClick={this.addToFolder}>Add</button>
          <button type="button" className="alert button">Remove</button>
        </div>
        <Folder products={folderProducts} />
      </div>
    );
  }
});

module.exports = CatalogToFolder;
