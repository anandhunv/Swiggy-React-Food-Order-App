import { createSlice } from "@reduxjs/toolkit";
import RestaurantMenu from "../components/RestaurantMenu";

const restaurantslice=createSlice({
    name:"rest",
    initialState:{
        restaurant:null,
        filterrest:null,
    },
    reducers:{
        addRest:(state,action)=>{
            state.restaurant=action.payload

        },
        addfilterRest:(state,action)=>{
            state.filterrest=action.payload

        }
    }
}) 


export const {addRest,addfilterRest}=restaurantslice.actions;
export default restaurantslice.reducer;
