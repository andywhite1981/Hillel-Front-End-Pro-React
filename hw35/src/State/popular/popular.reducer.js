import { SELECTED_LANGUAGE, GET_REPOS_LOADING, GET_REPOS_SUCCES, GET_REPOS_FAILURE } from './popular.constants';

const initialState = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null
};

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            };
        case GET_REPOS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_REPOS_SUCCES:
            return {
                ...state,
                loading: false,
                repos: action.payload
            };
        case GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
