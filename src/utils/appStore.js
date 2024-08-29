import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import gptSlice from "./gptSlice";
import restaurentSlice from "./restaurentSlice";
import addtocartSlice from "./addtocartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        rest: restaurentSlice,
        search:gptSlice,
        addCart:addtocartSlice
        // No curly braces for default export
    }
});

export default appStore;
