import api from "../utils/api";
import {
  fetchHistoryFailure,
  fetchHistoryRequest,
  fetchHistorySuccess
} from "../actions/index";
export const getHistoryRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchHistoryRequest());
      const history = await api.getHistory();

      dispatch(fetchHistorySuccess(history));
    } catch (error) {
      dispatch(fetchHistoryFailure(error.message));
    }
  };
};
