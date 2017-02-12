var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var { Button, Image, Modal, Header } = require('semantic-ui-react');

var ProductModal = React.createClass({
  getDefaultProps: function() {
    const defaultProps = {
      open: false,
      product: {
        imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
        title: "Filler Modal",
        description: "Filler description",
        specificDetails:"filler details",
      }
    };
    return defaultProps;
  },
  removeFromFolder: function(productId) {
    this.props.removeFromFolder(productId);
    this.props.closeModal();
  },
  render: function() {
    var { open, product, buttonAction, dispatch} = this.props;

    var actionableButton = null;
    if (buttonAction === "add") {
      actionableButton =
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content="Add to Folder"
          onClick={() => {
            dispatch(actions.addToFolder(product));
            dispatch(actions.removeFromCatalog(product.id));
            this.props.closeModal();
          }}>
        </Button>;
    }
    else if (buttonAction === "remove") {
      actionableButton =
        <Button
          negative
          icon='trash'
          labelPosition='right'
          content="Remove from Folder"
          onClick={() => {
            dispatch(actions.removeFromFolder(product.id));
            dispatch(actions.addToCatalog(product));
            this.props.closeModal();
          }}>
        </Button>;
    }

    return (
        <Modal dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header className="modalBorder">{product.title}</Modal.Header>

          <Modal.Content className="content modalContent">
            <div className="left">
            <Image src={product.imageSrc} className="Medium floated rounded " />
            </div>
            <div className="right">
            <Modal.Description >
              <Header>{product.title}</Header>
              <p>{product.description}</p>
              <p className="specificDetails">{product.specificDetails}</p>
            </Modal.Description>
          </div>
          </Modal.Content>

          <Modal.Actions className="modalBorder">
            <Button
              color='black'
              onClick={() => {
                this.props.closeModal();
              }}>
              Close
            </Button>
            { actionableButton }
          </Modal.Actions>
        </Modal>
    );
  }
});

module.exports = connect()(ProductModal);
