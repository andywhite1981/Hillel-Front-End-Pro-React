import { SELECTED_LANGUAGE, GET_REPOS_LOADING, GET_REPOS_SUCCES, GET_REPOS_FAILURE } from './popular.constants';

export const setSelectedLanguageAction = (payload) => ({
    type: SELECTED_LANGUAGE,
    payload
});

export const getReposLoadingAction = () => ({
    type: GET_REPOS_LOADING
});

export const getReposSuccesAction = (payload) => ({
    type: GET_REPOS_SUCCES,
    payload
});

export const getReposFailureAction = (payload) => ({
    type: GET_REPOS_FAILURE,
    payload
});
