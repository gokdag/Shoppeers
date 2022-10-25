import {createSlice} from "@reduxjs/toolkit";
import {current} from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    data: [],
    message: "",
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let foundedItem = state.data.find((basketItem) => basketItem.id == action.payload.id)
            if (foundedItem) {
                state.count+=1;
                // sepette aynı id ye sahip itemler var.
                //state.data.push(action.payload)
                foundedItem.count += 1;
                foundedItem.totalPrice = (parseFloat(foundedItem.price.replace(",", ".")) * foundedItem.count).toFixed(2)
                const otherProducts = state.data = state.data.filter((x) => x.id != foundedItem.id)
                state.data = [...otherProducts, foundedItem]
            } else {
                state.count+=1;
                // sepette aynı id ye sahip item yok.
                state.data.push({
                    id: action.payload.id,
                    img: action.payload.url,
                    name: action.payload.name,
                    price: action.payload.price,
                    count: 1,
                    totalPrice: action.payload.price
                })
            }
        },
        removeBasket: (state, action) => {
            // Sepette aynı id'ye sahip item var mı kontrolünü yap. Eğer varsa silerken miktarını bir azalt.
            let selectedItem = state.data.find((removeBasketItem) => removeBasketItem.id == action.payload)
            if (!selectedItem) return null
            if (selectedItem.count < 2) {
                state.count-=1;
                // En az bir ürün varsa bu if bloğuna gir.
                state.data = state.data.filter((x) => x.id !== selectedItem.id)
            } else {
                state.count-=1;
                selectedItem.count -= 1;
                selectedItem.totalPrice = (parseFloat(selectedItem.price.replace(",", ".")) * selectedItem.count).toFixed(2);
                const otherProducts = state.data.filter((x) => x.id != selectedItem.id)
                state.data = [...otherProducts, selectedItem]
            }
        },
    },
});


export const {addBasket, removeBasket} = basketSlice.actions
export default basketSlice.reducer;

