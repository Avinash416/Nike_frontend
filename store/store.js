import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistReducer from './wishlistSlice';

export default configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistReducer,
    },
});
