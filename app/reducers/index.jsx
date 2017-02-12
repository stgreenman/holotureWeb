export var folderNameReducer = (state = "Logan", action) => {
  switch (action.type) {
    case 'CHANGE_FOLDER_NAME':
      return action.name;
    default:
      return state;
  }
};

export var folderProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FOLDER':
      return [
        ...state,
        action.product
      ];
    case 'REMOVE_FROM_FOLDER':
      return state.filter((product) => product.id !== action.id);
    default:
     return state;
  }
};

export var catalogProductsReducer = (state = {isFetching: false, catalogProducts: []}, action) => {
  switch (action.type) {
    case 'START_PRODUCTS_FETCH':
      return {
        isFetching: true,
        catalogProducts: [],
      };
    case 'COMPLETE_PRODUCTS_FETCH':
      return {
        isFetching: false,
        catalogProducts: action.products,
      };
    case 'ADD_TO_CATALOG':
      return {
        ...state,
        catalogProducts: [
          ...state.catalogProducts,
          action.product
        ]
      }
    case 'REMOVE_FROM_CATALOG':
      return  {
        ...state,
        catalogProducts: state.catalogProducts.filter((product) => product.id !== action.id),
      }
    default:
      return state;
  }
};
