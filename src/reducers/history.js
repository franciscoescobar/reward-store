const INITIAL_STATE = {
  history: [],
  loading: false,
  error: null,
  response: ""
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_HISTORY_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_HISTORY_SUCCESS": {
      const { history } = action.payload;

      return {
        ...state,
        history,
        loading: false
      };
    }

    case "FETCH_HISTORY_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }
    case "REDEEM_PRODUCT_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "REDEEM_PRODUCT_SUCCESS": {
      const { response } = action.payload;
      return {
        ...state,
        response,
        loading: false
      };
    }

    case "REDEEM_PRODUCT_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
};
export default historyReducer;
