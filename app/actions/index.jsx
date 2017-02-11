var axios = require('axios');

export var changeFolderName = (name) => {
  return {
    type: 'CHANGE_FOLDER_NAME',
    name
  }
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
