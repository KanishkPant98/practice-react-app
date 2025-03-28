import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../utils/cartSlice"
//Building a store
const appStore = configureStore({
    //Below is reducer for entier store
    reducer: {
        cart: cartReducer, //Reducers of silce
    }
});

export default appStore