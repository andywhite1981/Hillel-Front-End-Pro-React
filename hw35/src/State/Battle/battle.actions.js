import { SET_PLAYER_NAME, SET_PLAYER_IMAGE, RESET_PLAYER } from './battle.constants';

export const setPlayerNameAction = (id, username) => ({
    type: SET_PLAYER_NAME,
    id,
    username
});

export const setPlayerImageAction = (id, image) => ({
    type: SET_PLAYER_IMAGE,
    id,
    image
});

export const resetPlayerAction = (id) => ({
    type: RESET_PLAYER,
    id
});
