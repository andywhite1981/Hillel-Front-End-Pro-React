import {
    GET_RESULTS_WINNER,
    GET_RESULTS_LOSER,
    GET_RESULTS_LOADING,
    GET_RESULTS_SUCCES,
    GET_RESULTS_FAILURE
} from './results.constants';

export const setResultsWinnerAction = (payload) => ({
    type: GET_RESULTS_WINNER,
    payload
});

export const setResultsLoserAction = (payload) => ({
    type: GET_RESULTS_LOSER,
    payload
});

export const setResultsLoadingAction = () => ({
    type: GET_RESULTS_LOADING
});

export const setResultsSuccessAction = (payload) => ({
    type: GET_RESULTS_SUCCES,
    payload
});

export const setResultsFailureAction = (payload) => ({
    type: GET_RESULTS_FAILURE,
    payload
});
