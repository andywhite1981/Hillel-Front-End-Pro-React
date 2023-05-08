import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
};

const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setPlayerName: (state, { payload }) => {
            const { id, name } = payload;
            state[`${id}Name`] = name;
        },
        setPlayerImage: (state, { payload }) => {
            const { id, image } = payload;
            state[`${id}Image`] = image;
        },
        resetPlayer: (state, { payload }) => {
            const { id } = payload;
            state[`${id}Name`] = '';
            state[`${id}Image`] = null;
        }
    }
});

export const { setPlayerName, setPlayerImage, resetPlayer } = battleSlice.actions;
export default battleSlice.reducer;
