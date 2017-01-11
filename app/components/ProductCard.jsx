var React = require('react');

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
  onClick: function() {
    var {isSelected} = this.state;
    var setSelected = true;
    if (isSelected) {
      setSelected = false;
    }

    this.setState({
      isSelected: setSelected
    });
    var {type} = this.props;
    this.props.onSelected(this.props.product.id, type, setSelected);
  },
  render: function() {
    var {product} = this.props;
    var {isSelected} = this.state;

    var containerClassName;
    if (isSelected) {
      containerClassName = "selected-row";
    }
    else {
      containerClassName = "row";
    }

    return (
      <div className="catalog-card">
        <div className={containerClassName} onClick={this.onClick}>
          <p className="row-title">{product.title}</p>
          <img src={product.imageSrc} className="image"></img>
        </div>
      </div>
    );
  }
});

module.exports = ProductCard;
