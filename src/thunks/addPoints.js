import api from "../utils/api";
import {
  addPointsFailure,
  addPointsRequest,
  addPointsSuccess
} from "../actions/index";
export const addPoints = () => {
  return async function(dispatch) {
    try {
      dispatch(addPointsRequest());
      const points = await api.addPoints();
      dispatch(addPointsSuccess(points["New Points"]));
    } catch (error) {
      dispatch(addPointsFailure(error.message));
    }
  };
};
