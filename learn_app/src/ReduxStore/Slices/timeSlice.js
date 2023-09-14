import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
   totalTime : JSON.parse(localStorage.getItem("TotalEnglishTime")) ?
               JSON.parse(localStorage.getItem("TotalEnglishTime")) : 0,
   timeNow: 0,
   start: 0,
   lookTime: 0,
   startStatus: false,
   done: 0

};
export const time = createSlice({
    name: "time",
    initialState,
    reducers: {
      
       setStart: (state , action)=>{
         state.startStatus = action.payload
       },
       setDone: (state , action)=>{
         state.totalTime = action.payload
       },
       setCount: (state , action )=>{
         state.timeNow = action.payload
       },
       lookTimeNow: (state , action)=>{
        state.lookTime = action.payload
       }
    },
    },

);
export const {lookTimeNow,setStart,setDone,setCount} = time.actions;
export default time.reducer;