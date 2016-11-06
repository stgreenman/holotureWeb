var React = require('react');
var Catalog = require('Catalog');
var Folder = require('Folder');

var CatalogToFolder = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Catalog />
        <div className="buttons">
          <button type="button" className="success button">Add</button>
          <button type="button" className="alert button">Remove</button>
        </div>
        <Folder />
      </div>
    );
  }
});

module.exports = CatalogToFolder;
