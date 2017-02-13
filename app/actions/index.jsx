var axios = require('axios');

// Catalog Reducer actions

export var addToCatalog = (product) => {
  return {
    type: 'ADD_TO_CATALOG',
    product
  };
};

export var removeFromCatalog = (id) => {
  return {
    type: 'REMOVE_FROM_CATALOG',
    id
  }
};

export var startProductsFetch = () => {
  return {
    type: 'START_PRODUCTS_FETCH',
  };
};

export var completeProductsFetch = (products) => {
  return {
    type: 'COMPLETE_PRODUCTS_FETCH',
    products
  };
};

export var fetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(startProductsFetch());

    axios.get('/api/getCatalog').then(function (res) {
      var products = res.data;
      dispatch(completeProductsFetch(products));
    });
  };
};

// Folder Reducer actions

export var createNewFolder = (folder) => {
  return {
    type: 'CREATE_NEW_FOLDER',
    folder
  };
};

export var setSelectedFolder = (id) => {
  return {
    type: 'SET_SELECTED_FOLDER',
    id
  };
};

export var removeFolder = (id) => {
  return {
    type: 'REMOVE_FOLDER',
    id
  };
};

export var startFoldersFetch = () => {
  return {
    type: 'START_FOLDERS_FETCH',
  }
};

export var completeFoldersFetch = (folders) => {
  return {
    type: 'COMPLETE_FOLDERS_FETCH',
    folders
  };
};

export var fetchFolders = () => {
  return (dispatch, getState) => {
    dispatch(startFoldersFetch());

    axios.get('/api/getFolders').then(function (res) {
      var folders = res.data;
      dispatch(completeFoldersFetch(folders));
    });
  };
};

export var addToFolder = (product) => {
  return {
    type: 'ADD_TO_FOLDER',
    product
  }
};

export var removeFromFolder = (id) => {
  return {
    type: 'REMOVE_FROM_FOLDER',
    id
  }
};
