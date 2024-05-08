import { FETCH_LOCATION, PENDING_LOCATION, REJECT_LOCATION } from "../types/locationTypes";

const initialState = {
  locationList: [],
  pending: false,
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        locationList: action.payload,
        pending: false,
      };
    case PENDING_LOCATION:
      return {
        ...state,
        pending: true,
      };
    case REJECT_LOCATION:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;