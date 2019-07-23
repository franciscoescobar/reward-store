export const sortHigher = () => {
  return {
    type: "SORT_HIGHER"
  };
};
export const sortLower = () => {
  return {
    type: "SORT_LOWER"
  };
};
export const sortRecent = () => {
  return {
    type: "SORT_RECENT"
  };
};
export const toggleHistory = () => {
  return {
    type: "TOGGLE_HISTORY"
  };
};
export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST"
  };
};

export const fetchProductsSuccess = products => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: { products }
  };
};

export const fetchProductsFailure = error => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: { error }
  };
};
export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST"
  };
};

export const fetchUserSuccess = user => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: { user }
  };
};

export const fetchUserFailure = error => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: { error }
  };
};
export const fetchHistoryRequest = () => {
  return {
    type: "FETCH_HISTORY_REQUEST"
  };
};

export const fetchHistorySuccess = history => {
  return {
    type: "FETCH_HISTORY_SUCCESS",
    payload: { history }
  };
};

export const fetchHistoryFailure = error => {
  return {
    type: "FETCH_HISTORY_FAILURE",
    payload: { error }
  };
};
export const addPointsRequest = () => {
  return {
    type: "ADD_POINTS_REQUEST"
  };
};

export const addPointsSuccess = points => {
  return {
    type: "ADD_POINTS_SUCCESS",
    payload: { points }
  };
};

export const addPointsFailure = error => {
  return {
    type: "ADD_POINTS_FAILURE",
    payload: { error }
  };
};
export const redeemProductRequest = () => {
  return {
    type: "REDEEM_PRODUCT_REQUEST"
  };
};

export const redeemProductSuccess = response => {
  return {
    type: "REDEEM_PRODUCT_SUCCESS",
    payload: { response }
  };
};

export const redeemProductFailure = error => {
  return {
    type: "REDEEM_PRODUCT_FAILURE",
    payload: { error }
  };
};
