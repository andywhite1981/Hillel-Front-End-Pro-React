import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import popularSlice from './popular/popular.slice';
import battleSlice from './Battle/battle.slice';
import resultsSlice from './Results/results.slice';

const store = configureStore({
    reducer: {
        popular: popularSlice,
        battle: battleSlice,
        results: resultsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createLogger({
                collapsed: true
            })
        )
});

export default store;
