import {combineReducers} from 'redux';
import characterReducer from './charactersReducer';
import episodeReducer from './episodeReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes:episodeReducer,
  location: locationReducer
});

export default rootReducer;
