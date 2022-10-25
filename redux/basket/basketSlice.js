import { createSlice } from "@reduxjs/toolkit";
import {current } from '@reduxjs/toolkit'
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
      console.log("action", state,  action)
      let foundedItem = state.data.find((basketItem) => basketItem.id == action.payload.id)
      if(foundedItem) {
        // sepette aynı id ye sahip itemler var.
        state.data.push(action.payload)
        state.count += 1;
        foundedItem.totalPrice =  action.payload.price * action.payload.count
        state.data.filter((x) => x.id != foundedItem.id)
      } 
      else{
        // sepette aynı id ye sahip item yok. 
        state.data.push({id:action.payload.id, img:action.payload.url, name: action.payload.name, price:action.payload.price, count:1})
      }
    },
    removeBasket: (state, action) => {
      console.log(current(state), action)
       // Sepette aynı id'ye sahip item var mı kontrolünü yap. Eğer varsa silerken miktarını bir azalt.
       let removeItem = state.data.find((removeBasketItem) => removeBasketItem.id == action.payload)
       console.log(current(removeItem), action)
       if(!removeItem) return null
       if(removeItem.count < 2) {
        // En az bir ürün varsa bu if bloğuna gir.
        state.data = state.data.filter((x) => x.id !== removeItem.id)
       } else {
        // console.log("Furkan")
        // state.count = 1
        removeItem.totalPrice = item.price * item.amount
        state.data.filter((x) => x.id != foundedItem.id)
       }
    },
  },
});



export const {addBasket, removeBasket} = basketSlice.actions
export default basketSlice.reducer;

