import { combineReducers } from 'redux';
import { popularReducer } from './popular/popular.reducer';
import { battleReducer } from './Battle/battle.reducer';
import { resultsReducer } from './Results/results.reducer';

export default combineReducers({
    popularReducer,
    battleReducer,
    resultsReducer
});
