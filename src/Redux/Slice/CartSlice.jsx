import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity:0
}

const cartSystem = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeToCart:(state,action)=>{
            state.cart.pop(action.payload)
        }
    }
})

export const {addToCart,removeToCart} = cartSystem.actions;
export default cartSystem.reducer;
