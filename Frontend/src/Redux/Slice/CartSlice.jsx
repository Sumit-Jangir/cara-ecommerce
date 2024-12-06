import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity:0,
    token: localStorage.getItem('token') || null
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
        },
        setToken:(state,action) =>{
            state.token = action.payload;
            localStorage.setItem('token',action.payload)
        },
        clearToken:(state) =>{
            state.token = null;
            localStorage.removeItem('token')
        }
    }
})

export const {addToCart,removeToCart,setToken,clearToken} = cartSystem.actions;
export default cartSystem.reducer;
