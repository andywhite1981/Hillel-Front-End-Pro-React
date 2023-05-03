import {
    GET_RESULTS_WINNER,
    GET_RESULTS_LOSER,
    GET_RESULTS_LOADING,
    GET_RESULTS_SUCCES,
    GET_RESULTS_FAILURE
} from './results.constants';

const initialState = {
    winner: null,
    loser: null,
    loading: true,
    error: null
};

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESULTS_WINNER:
            return {
                ...state,
                winner: action.payload
            };
        case GET_RESULTS_LOSER:
            return {
                ...state,
                loser: action.payload
            };
        case GET_RESULTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_RESULTS_SUCCES:
            return {
                ...state,
                loading: false
            };
        case GET_RESULTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
