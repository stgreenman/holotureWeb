var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var Nav = require('Nav');
var Footer = require('Footer');
var { Button, List, Input } = require('semantic-ui-react');
var {Link} = require('react-router');

var Home = React.createClass({
  getInitialState: function() {
    return {
      folderText: "",
    };
  },
  handleOnFolderClick: function(id) {
    const {dispatch} = this.props;
    dispatch(actions.setSelectedFolder(id));
  },
  handleOnClick: function() {
    document.location.href = "/#/";
  },
  handleCreateFolderClick: function() {
    const {dispatch} = this.props;
    dispatch(actions.createNewFolder({id: Math.random(), name: this.state.folderText}));
    this.setState({folderText: ""});
  },
  handleTextChange: function(event) {
    this.setState({folderText: event.target.value});
  },
  render: function() {
    const { folder } = this.props;

    var listItems;
    if (!folder.isFetching) {
      listItems = folder.folders.map((folderItem) => {
        const active = folderItem.id === folder.selectedFolderId;
        return <List.Item key={folderItem.id} active={active} onClick={() => { this.handleOnFolderClick(folderItem.id) }}>
                    <List.Content>
                      <List.Header>{folderItem.name}</List.Header>
                    </List.Content>
                  </List.Item>;
      }, this);
    }
    else {
      listItems = <div></div>;
    }

    return (
      <div>
        <Nav itemCount={1} navState={"home"}/>
        <div className="centering">
          <Button className="ui button teal" onClick={this.handleOnClick}>
            Go to catalog
          </Button>

          <div className="top-padding">
            <Button icon="plus" onClick={this.handleCreateFolderClick}></Button>
            <Input placeholder="Create new folder" onChange={this.handleTextChange} value={this.state.folderText}></Input>
          </div>
          <div className="texting">
          <List animated selection divided verticalAlign='middle' size="big">
          <List.Header>Folders</List.Header>
          { listItems }
          </List>
          </div>
        </div>
        <Footer type="fixed"/>
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      folder: state.folder
    };
  }
)(Home);
