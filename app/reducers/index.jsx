const defaultState = {
  selectedFolderId: 1,
  isFetching: true,
  folders: [],
  products: []
};

export var folderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_FOLDER_FETCH':
      return {
        ...state,
        isFetching: true
      };
    case 'COMPLETE_FOLDERS_FETCH':
      return {
        ...state,
        isFetching: false,
        folders: action.folders
      };
    case 'CREATE_NEW_FOLDER':
      return {
        ...state,
        folders: [
          ...state.folders,
          action.folder
        ]
      };
    case 'SET_SELECTED_FOLDER':
      return {
        ...state,
        selectedFolderId: action.id
      }
    case 'REMOVE_FOLDER':
      return {
        ...state,
        folders: state.folders.filter((folder) => folder.id !== action.id),
      };
    case 'ADD_TO_FOLDER':
      return {
        ...state,
        products: [
          ...state.products,
          action.product
        ]
      };
    case 'REMOVE_FROM_FOLDER':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id)
      }
    case 'POPULATE_FOLDER':
      return {
        ...state,
        products: action.products
      }
    default:
     return state;
  }
};

export var catalogReducer = (state = {isFetching: false, products: []}, action) => {
  switch (action.type) {
    case 'START_PRODUCTS_FETCH':
      return {
        isFetching: true,
        products: [],
      };
    case 'COMPLETE_PRODUCTS_FETCH':
      return {
        isFetching: false,
        products: action.products,
      };
    case 'ADD_TO_CATALOG':
      return {
        ...state,
        products: [
          ...state.products,
          action.product
        ]
      }
    case 'REMOVE_FROM_CATALOG':
      return  {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      }
    default:
      return state;
  }
};
