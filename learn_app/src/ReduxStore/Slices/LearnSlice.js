import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
   data: "getting started"

};
export const learn = createSlice({
    name: "learn",
    initialState,
    reducers: {
       first: ( state , actions )=>{

       }
    },
    },

);
export const {first} = learn.actions;
export default learn.reducer;