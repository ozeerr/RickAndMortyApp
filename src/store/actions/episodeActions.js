import { EPISODES_URL } from "../../service/urls";
import { EPISODES_REJECT, FETCH_EPISODES } from "../types/episodeTypes";

export const getEpisodes = params => {
    return async dispatch => {
      try {
        const response = await getRequest(EPISODES_URL, params);
        dispatch({
          type: FETCH_EPISODES,
          payload: response.results,
        });
      } catch (error) {
        dispatch({type: EPISODES_REJECT, error: error});
      }
    };
  };