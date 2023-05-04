import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import popularSlice from './popular/popular.slice';
import battleSlice from './Battle/battle.slice';

const store = configureStore({
    reducer: {
        popular: popularSlice,
        battle: battleSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createLogger({
                collapsed: true
            })
        )
});

export default store;
