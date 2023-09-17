import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
  totalTime : JSON.parse(localStorage.getItem("English")) ?
               JSON.parse(localStorage.getItem("English")) : 0,
   Git : JSON.parse(localStorage.getItem("Git")) ?
               JSON.parse(localStorage.getItem("Git")) : 0,
   SQL :JSON.parse(localStorage.getItem("SQL")) ?
           JSON.parse(localStorage.getItem("SQL")) : 0,         
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
        if(action.payload.name === "Git"){
          state.Git = action.payload.data
        }
        if(action.payload.name === "English"){
          state.totalTime = action.payload.data
        }
        if(action.payload.name === "SQL"){
          state.SQL = action.payload.data
        }
          
        

        
         
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