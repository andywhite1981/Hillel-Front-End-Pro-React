import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { battle } from '../api';
import PlayerPreview from './PlayerPreview';
import {
    setResultsWinnerAction,
    setResultsLoserAction,
    setResultsLoadingAction,
    setResultsSuccessAction,
    setResultsFailureAction
} from '../../State/Results/results.actions';

const Results = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { winner, loser, loading, error } = useSelector((state) => state.resultsReducer);

    useEffect(() => {
        dispatch(setResultsLoadingAction());
        const params = new URLSearchParams(location.search);

        battle([params.get('playerOneName'), params.get('playerTwoName')])
            .then((data) => {
                dispatch(setResultsWinnerAction(data[0]));
                dispatch(setResultsLoserAction(data[1]));
                dispatch(setResultsLoadingAction(false));
                dispatch(setResultsSuccessAction(data));
            })
            .catch((error) => {
                dispatch(setResultsLoadingAction(false));
                dispatch(setResultsFailureAction(error));
            });
    }, [dispatch, location.search]);

    if (error) {
        return <h1 className='home-container'>{error}</h1>;
    }

    return (
        <>
            <h1 className='home-container'>Results</h1>
            {!loading ? (
                <div className='row'>
                    <PlayerPreview
                        avatar={winner.profile.avatar_url}
                        userName={winner.profile.login}>
                        <div className='column'>
                            <h2>Winner</h2>
                            <h3>Score: {winner.score}</h3>
                            <ul>
                                <li>Name: {winner.profile.name}</li>
                                <li>Location: {winner.profile.location}</li>
                                <li>Company: {winner.profile.company}</li>
                                <li>Followers: {winner.profile.followers}</li>
                                <li>Following: {winner.profile.following}</li>
                                <li>Public Repos: {winner.profile.public_repos}</li>
                                <li>Blog: {winner.profile.blog}</li>
                            </ul>
                        </div>
                    </PlayerPreview>
                    <PlayerPreview
                        avatar={loser.profile.avatar_url}
                        userName={loser.profile.login}>
                        <div className='column'>
                            <h2>Loser</h2>
                            <h3>Score: {loser.score}</h3>
                            <ul>
                                <li>Name: {loser.profile.name}</li>
                                <li>Location: {loser.profile.location}</li>
                                <li>Company: {loser.profile.company}</li>
                                <li>Followers: {loser.profile.followers}</li>
                                <li>Following: {loser.profile.following}</li>
                                <li>Public Repos: {loser.profile.public_repos}</li>
                                <li>Blog: {loser.profile.blog}</li>
                            </ul>
                        </div>
                    </PlayerPreview>
                </div>
            ) : (
                <h1 className='home-container'>Loading ...</h1>
            )}
        </>
    );
};

export default Results;
