import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from '../redux/favorite/favoriteSlice';

export const store = configureStore({
    reducer: {
        favorite:favoriteSlice
    },
})