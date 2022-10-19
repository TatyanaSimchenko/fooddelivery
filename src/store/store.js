import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./sopping-cart/cartSlice";
import cartUiSlice from "./sopping-cart/cartUiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    }
})

export default store