var React = require('react');
var ProductModal = require('ProductModal');

var ProductCard = React.createClass({
  getInitialState: function() {
    return {
      isSelected: false,
    };
  },
  getDefaultProps: function() {
    return {
            product: {
              id: 0,
              imageSrc: "https://ak1.ostkcdn.com/images/products/11706636/P18629716.jpg",
              title: "Couch",
              description: "This couch is an excellent choice because it's just so darn comfortable"
            },
            type: undefined
    }
  },
  handleOnClick: function() {
    this.props.openModal(this.props.product.id);
  },
  render: function() {
    var {product} = this.props;
    var {isSelected, open} = this.state;

    var containerClassName;
    if (isSelected) {
      containerClassName = "selected-row";
    }
    else {
      containerClassName = "row";
    }

    return (
      <div className="catalog-card">
        <div className={containerClassName} onClick={this.handleOnClick}>
          <p className="row-title">{product.title}</p>
          <img src={product.imageSrc} className="image"></img>
        </div>
      </div>
    );
  }
});

module.exports = ProductCard;
