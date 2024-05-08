import { EPISODES_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import {  FETCH_EPISODES } from "../types/episodeTypes";

export const getEpisodes =(params) => {
    return async dispatch => {
        const response = await getRequest(EPISODES_URL, params);
          dispatch({
            type: FETCH_EPISODES,
            payload: response.data.results,
          });
    };
  };