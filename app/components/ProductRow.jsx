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

      <div className={containerClassName} onClick={this.onClick}>
        <div className="container">
          <div className="large-4 columns">
        <img src={product.imageSrc} className="image"></img>
        </div>
        <div className="descriptive-text large-6 columns">
          <h5>{product.title}</h5>
          <p>{product.description}</p>
        </div>
      </div>
      </div>

    );
  }
});

module.exports = ProductRow;
