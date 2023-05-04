import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import popularSlice from './popular/popular.slice';

const store = configureStore({
    reducer: {
        popular: popularSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createLogger({
                collapsed: true
            })
        )
});

export default store;
