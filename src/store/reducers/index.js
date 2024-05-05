import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import episodeReducer from './episodeReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes:episodeReducer
});

export default rootReducer;
