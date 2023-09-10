import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
   totalTime : JSON.parse(localStorage.getItem("TotalEnglishTime")) ?
               JSON.parse(localStorage.getItem("TotalEnglishTime")) : [0,0,0],
   timeNow: [0,0,0],
   start: 0,
   startStatus: false,
   done: 0

};
export const time = createSlice({
    name: "time",
    initialState,
    reducers: {
      
       setStart: (state , action)=>{
         state.start = action.payload.start
         state.startStatus = action.payload.status
       },
       setDone: (state , action)=>{
         state.totalTime = action.payload
       },
       setCount: (state , action )=>{
         state.timeNow = action.payload
       }
    },
    },

);
export const {setStart,setDone,setCount} = time.actions;
export default time.reducer;