var React = require('react');
var { Button, Image, Modal, Header } = require('semantic-ui-react');

var ProductModal = React.createClass({
  getDefaultProps: function() {
    const defaultProps = {
      open: false,
      product: {
        imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
        title: "Filler Modal",
        description: "Filler description",
      }
    };
    return defaultProps;
  },
  close: function() {
    this.props.closeModal();
  },
  render: function() {
    var { open, product } = this.props;

    return (
      <div>
        <Modal dimmer='blurring' open={open} onClose={this.close}>
          <Modal.Header>{product.title}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='small' src={product.imageSrc} />
            <Modal.Description>
              <Header>{product.title}</Header>
              <p>{product.description}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Add to Folder" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
});

module.exports = ProductModal;
