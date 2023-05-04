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
        setPlayerName: (state, action) => {
            const { id, name } = action.payload;
            state[`${id}Name`] = name;
        },
        setPlayerImage: (state, action) => {
            const { id, image } = action.payload;
            state[`${id}Image`] = image;
        },
        resetPlayer: (state, action) => {
            const { id } = action.payload;
            state[`${id}Name`] = '';
            state[`${id}Image`] = null;
        }
    }
});

export const { setPlayerName, setPlayerImage, resetPlayer } = battleSlice.actions;
export default battleSlice.reducer;
