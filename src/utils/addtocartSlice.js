import { createSlice } from "@reduxjs/toolkit";
import { toggleShowSearch } from "./gptSlice";

const addtocartSlice=createSlice({
    name:"addCart",
    initialState:{
        add:false,
    },
    reducers:{
        toggleAddtoCart:(state)=>{

            state.add=!state.add

        }
    }
})

export const {toggleAddtoCart}=addtocartSlice.actions
export default addtocartSlice.reducer