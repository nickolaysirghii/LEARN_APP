import { createSlice  } from "@reduxjs/toolkit";
import { footer } from "../../data/footerData";
import { english } from "../../data/englishData";

const initialState = {
  AllTogether : JSON.parse(localStorage.getItem("AllTogether")) ?
               JSON.parse(localStorage.getItem("AllTogether")) : 0,
  totalTime : JSON.parse(localStorage.getItem("English")) ?
               JSON.parse(localStorage.getItem("English")) : 0,
   Git : JSON.parse(localStorage.getItem("Git")) ?
               JSON.parse(localStorage.getItem("Git")) : 0,
   SQL :JSON.parse(localStorage.getItem("SQL")) ?
           JSON.parse(localStorage.getItem("SQL")) : 0, 
   react :JSON.parse(localStorage.getItem("React")) ?
           JSON.parse(localStorage.getItem("React")) : 0, 
   JS :JSON.parse(localStorage.getItem("JS")) ?
        JSON.parse(localStorage.getItem("JS")) : 0, 
  Linux :JSON.parse(localStorage.getItem("Linux")) ?
          JSON.parse(localStorage.getItem("Linux")) : 0, 
  Polish : JSON.parse(localStorage.getItem("Polish")) ?
           JSON.parse(localStorage.getItem("Polish")) : 0, 
  Countries : JSON.parse(localStorage.getItem("Countries")) ?
           JSON.parse(localStorage.getItem("Countries")) : 0,      

   timeNow: 0,
   start: 0,
   lookTime: 0,
   startStatus: false,
   done: 0,
   footerData: footer,

   workingTitle: "English",
   workingArray: english,
   workingSlice: JSON.parse(localStorage.getItem("English")) ?
                 JSON.parse(localStorage.getItem("English")) : 0,

};
export const time = createSlice({
    name: "time",
    initialState,
    reducers: {
      
      footerChangeData: ( state , action )=>{

      },
       setStart: (state , action)=>{
         state.startStatus = action.payload
       },
       setDone: (state , action)=>{
        if(action.payload.name === "Git"){
          state.Git = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "English"){
          state.totalTime = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "SQL"){
          state.SQL = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "React"){
          state.react = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "JS"){
          state.JS = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "AllTogether"){
          state.AllTogether = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "Linux"){
          state.Linux = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "Polish"){
          state.Polish = action.payload.data;
          state.workingSlice = action.payload.data;
        }
        if(action.payload.name === "Countries"){
          state.Countries = action.payload.data;
          state.workingSlice = action.payload.data;
        }
          
        

        
         
       },
       setCount: (state , action )=>{
         state.timeNow = action.payload
       },
       lookTimeNow: (state , action)=>{
        state.lookTime = action.payload
       },
       setWorking: ( state , action )=>{
        state.workingTitle = action.payload.title;
        state.workingArray = action.payload.work;
        if(action.payload.title === "Git"){
          state.workingSlice = state.Git
        }
        if(action.payload.title === "English"){
          state.workingSlice = state.totalTime
        }
        if(action.payload.title === "React"){
          state.workingSlice = state.react
        }
        if(action.payload.title === "JS"){
          state.workingSlice = state.JS
        }
        if(action.payload.title === "AllTogether"){
          state.workingSlice = state.AllTogether
        }
        if(action.payload.title === "Linux"){
          state.workingSlice = state.Linux
        }
        if(action.payload.title === "Polish"){
          state.workingSlice = state.Polish
        }
        if(action.payload.title === "Countries"){
          state.workingSlice = state.Countries
        }
       
      }
    },
    },

);
export const {setWorking,lookTimeNow,setStart,setDone,setCount} = time.actions;
export default time.reducer;