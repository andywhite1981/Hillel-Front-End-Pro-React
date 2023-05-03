import {
    getReposFailureAction,
    getReposLoadingAction,
    getReposSuccesAction,
    setSelectedLanguageAction
} from './popular.actions';

import { fetchPopularRepos } from '../../components/api';

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(setSelectedLanguageAction(selectedLanguage));
    dispatch(getReposLoadingAction());

    fetchPopularRepos(selectedLanguage)
        .then((repos) => dispatch(getReposSuccesAction(repos)))
        .catch((error) => dispatch(getReposFailureAction(error)));
};
