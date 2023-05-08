import { createSlice } from '@reduxjs/toolkit';
import { battle } from '../../components/api';

const initialState = {
    winner: null,
    loser: null,
    loading: true,
    error: null
};

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setResultsWinner: (state, { payload }) => {
            state.winner = payload;
        },
        setResultsLoser: (state, { payload }) => {
            state.loser = payload;
        },
        setResultsLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setResultsSuccess: (state, { payload }) => {
            state.loading = payload;
        },
        setResultsFailure: (state, { payload }) => {
            state.error = payload;
        }
    }
});

export const { setResultsWinner, setResultsLoser, setResultsLoading, setResultsSuccess, setResultsFailure } =
    resultsSlice.actions;

export const fetchResults = (playerOneName, playerTwoName) => async (dispatch) => {
    dispatch(setResultsLoading(true));
    try {
        const data = await battle([playerOneName, playerTwoName]);
        dispatch(setResultsWinner(data[0]));
        dispatch(setResultsLoser(data[1]));
        dispatch(setResultsLoading(false));
    } catch (error) {
        dispatch(setResultsFailure(error));
        dispatch(setResultsLoading(false));
    }
};

export default resultsSlice.reducer;
