const INITIAL_STATE = {
  user: {},
  userLoading: false,
  pointsLoading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST": {
      return {
        ...state,
        userLoading: true
      };
    }

    case "FETCH_USER_SUCCESS": {
      const { user } = action.payload;

      return {
        ...state,
        user,
        userLoading: false
      };
    }

    case "FETCH_USER_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        userLoading: false
      };
    }
    case "ADD_POINTS_REQUEST": {
      return {
        ...state,
        pointsLoading: true
      };
    }

    case "ADD_POINTS_SUCCESS": {
      const { points } = action.payload;

      return {
        ...state,
        user: { ...state.user, points },
        pointsLoading: false
      };
    }

    case "ADD_POINTS_FAILURE": {
      const { error } = action.payload;

      return {
        ...state,
        error,
        pointsLoading: false
      };
    }

    default: {
      return state;
    }
  }
};
export default userReducer;
