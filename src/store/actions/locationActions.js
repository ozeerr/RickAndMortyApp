import { LOCATIONS_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import { FETCH_LOCATION, PENDING_LOCATION, REJECT_LOCATION } from "../types/locationTypes";

export const getLocations = params => {
    return async dispatch => {
      dispatch({type: PENDING_LOCATION});
  
      try {
        const response = await getRequest(LOCATIONS_URL, params); 
        dispatch({
          type: FETCH_LOCATION,
          payload: response.data.results,
        });
      } catch (error) {
        dispatch({
          type: REJECT_LOCATION,
          error: error,
        });
      }
    };
  };