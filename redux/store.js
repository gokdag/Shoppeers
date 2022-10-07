import {configureStore} from '@reduxjs/toolkit'
import favoriteSlice from './favorite/favoriteSlice';
import {categoryApi} from "./services/categoryApi";
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware),
})

setupListeners(store.dispatch)