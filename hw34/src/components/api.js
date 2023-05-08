import axios from 'axios';

const handleError = (error) => console.error(error);

const getProfile = (userName) => {
    return axios
        .get(`https://api.github.com/users/${userName}`)
        .then((user) => user.data)
        .catch(handleError);
};

const getRepos = (userName) => {
    return axios
        .get(`https://api.github.com/users/${userName}/repos?per_page=100`)
        .then((repos) => repos.data)
        .catch(handleError);
};

const getStarCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return followers + totalStars;
};

const getUserData = (player) => {
    return Promise.all([getProfile(player), getRepos(player)])
        .then(([profile, repos]) => ({
            profile,
            score: calculateScore(profile, repos)
        }))
        .catch(handleError);
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

// prettier-ignore
export const battle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
};
