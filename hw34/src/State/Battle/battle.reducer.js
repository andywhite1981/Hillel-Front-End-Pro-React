import { SET_PLAYER_NAME, SET_PLAYER_IMAGE, RESET_PLAYER } from './battle.constants';

const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
};

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {
                ...state,
                [`${action.id}Name`]: action.username
            };
        case SET_PLAYER_IMAGE:
            return {
                ...state,
                [`${action.id}Image`]: action.image
            };
        case RESET_PLAYER:
            return {
                ...state,
                [`${action.id}Name`]: '',
                [`${action.id}Image`]: null
            };
        default:
            return state;
    }
};
