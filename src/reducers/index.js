import games from './games';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  games: games
});

export default reducer;