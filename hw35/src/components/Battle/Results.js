import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
    const location = useLocation();
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        battle([params.get("playerOneName"), params.get("playerTwoName")])
            .then((data) => {
                setLoading(false);
                setWinner(data[0]);
                setLoser(data[1]);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, [location.search]);

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
