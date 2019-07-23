import api from "../utils/api";
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess
} from "../actions/index";
export const getProductsRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductsRequest());
      const products = await api.getProducts();

      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
