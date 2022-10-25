import {configureStore} from '@reduxjs/toolkit'
import favoriteSlice from './favorite/favoriteSlice';
import {categoryApi} from "./services/categoryApi";
import {setupListeners} from '@reduxjs/toolkit/query'
import { productApi } from './services/productApi';
import basketSlice from './basket/basketSlice';
import { basketApi } from './services/basketApi';

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        basket: basketSlice,

        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [basketApi.reducerPath]: basketApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware, basketApi.middleware),

})

setupListeners(store.dispatch)