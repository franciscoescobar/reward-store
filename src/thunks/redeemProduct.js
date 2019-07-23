import api from "../utils/api";
import {
  redeemProductFailure,
  redeemProductRequest,
  redeemProductSuccess
} from "../actions/index";
export const redeemProduct = productId => {
  return async function(dispatch) {
    try {
      dispatch(redeemProductRequest());
      const response = await api.redeemProduct(productId);
      dispatch(redeemProductSuccess(response.message));
    } catch (error) {
      dispatch(redeemProductFailure(error.message));
    }
  };
};
