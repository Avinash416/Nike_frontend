// store/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload;
            const existingItem = state.wishlistItems.find((x) => x.id === item.id);

            if (!existingItem) {
                state.wishlistItems.push(item);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((x) => x.id !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
