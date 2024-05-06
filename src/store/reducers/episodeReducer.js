import { EPISODES_REJECT, FETCH_EPISODES, PENDING_EPISODES } from "../types/episodeTypes"

const initialState={
    episode:[],
}


const episodeReducer=(state=initialState,action)=>{
        switch(action.type){
            case FETCH_EPISODES:
                return{
                    ...state,
                    episode:action.payload,
                }
            case PENDING_EPISODES:
                return{
                    ...state,
                }
            case EPISODES_REJECT:
                return{
                    ...state,
                }
            default:
                return state;
        }
}

export default episodeReducer;