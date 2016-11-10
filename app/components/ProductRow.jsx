var React = require('react');

var ProductRow = React.createClass({
  getInitialState: function() {
    return {
      isSelected: false,
    };
  },
  getDefaultProps: function() {
    return {
            product: {
              imageSrc: "https://ak1.ostkcdn.com/images/products/11706636/P18629716.jpg",
              title: "Couch",
              description: "This couch is an excellent choice because it's just so darn comfortable"
            }
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
      <div className={containerClassName} onClick={this.onClick}>
        <img src={product.imageSrc} className="image"></img>
        <div className="descriptive-text">
          <h5>{product.title}</h5>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = ProductRow;
