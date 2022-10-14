import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    data: [],
    message: ""
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState, // value 
    reducers: {
        addFavorite: (state, action) => {
            if (!state.data.some(product => product == action.payload)) {
                //ekle
                state.data.push(action.payload)
                state.count += 1;
                state.message = "";
            } else {
                //zaten ekli olan product
                state.message = "Eklemek istediğiniz ürün favorilerde mevcut"
            }
        },
        removeFavorite: (state, action) => {
            if (state.data.some(product => product == action.payload)) {
                state.data = state.data.filter(product => product != action.payload)
                state.count -= 1;
                state.message = ""
            } else {
                state.message = "Çıkarmak istediğiniz ürün favorilerde mevcut değil"
            }
        },
    }
})


export const {addFavorite, removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer;
