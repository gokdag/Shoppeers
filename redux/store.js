import {configureStore} from '@reduxjs/toolkit'
import favoriteSlice from './favorite/favoriteSlice';
import {categoryApi} from "./services/categoryApi";
import {setupListeners} from '@reduxjs/toolkit/query'
import { productApi } from './services/productApi';

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        [categoryApi.reducerPath]: categoryApi.reducer,

        [productApi.reducerPath]: productApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware),

})

setupListeners(store.dispatch)