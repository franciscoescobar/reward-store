const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
  filters: 0
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_PRODUCTS_SUCCESS": {
      const { products } = action.payload;

      return {
        ...state,
        products,
        loading: false
      };
    }

    case "FETCH_PRODUCTS_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    case "SORT_HIGHER": {
      const newProducts = state.products.sort((a, b) => {
        if (a.cost < b.cost) {
          return 1;
        }
        if (a.cost > b.cost) {
          return -1;
        }
        return 0;
      });

      return {
        ...state,
        products: newProducts,
        filters: 2
      };
    }
    case "SORT_LOWER": {
      const newProducts = state.products.sort((a, b) => {
        if (a.cost > b.cost) {
          return 1;
        }
        if (a.cost < b.cost) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        products: newProducts,
        filters: 1
      };
    }
    case "SORT_RECENT": {
      const newProducts = state.products.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        products: newProducts,
        filters: 0
      };
    }
    default: {
      return state;
    }
  }
};
export default productsReducer;
