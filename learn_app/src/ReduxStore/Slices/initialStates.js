import { createSlice  } from "@reduxjs/toolkit";
import { English } from "../../data/English";
import { act } from "react-dom/test-utils";

const initialState = {

 stepNow: 1,

 question:English[0].question,
 image: English[0].image,
 answer: English[0].answer,
 TheArray: [...English],
 IdNow:0,
 titleNow:English[0].title,

 CorrectThisQuestion:0,
 CorredtThisStep:0,
 CorrectToday: localStorage.getItem("CorrectToday") ?
               JSON.parse(localStorage.getItem("CorrectToday")):0,
 CorrectTotal: localStorage.getItem("CorrectTotal") ? 
               JSON.parse(localStorage.getItem("CorrectTotal")):0,

};
export const general = createSlice({
    name: "general",
    initialState,
    reducers: {
        shangeImage:(state, action)=>{
            state.image = action.payload
        },
        changeAnswer:(state,action)=>{
            if(state.TheArray.length > state.IdNow){
                state.TheArray[state.IdNow].ourAnswer = action.payload;
                state.titleNow = state.TheArray[state.IdNow].title;
                state.answer  =  state.TheArray[state.IdNow].answer;
                state.question = state.TheArray[state.IdNow].question;
                state.image   =  state.TheArray[state.IdNow].image;
                if(action.payload === state.TheArray[state.IdNow].answer){
                    state.CorrectThisQuestion = 1;
                    state.CorrectTotal += 1;
                    state.CorrectToday +=1;
                localStorage.setItem("CorrectTotal",JSON.stringify(state.CorrectTotal));
                localStorage.setItem("CorrectToday",JSON.stringify(state.CorrectToday));
                    
                    
                }

                state.IdNow +=1;
            }
            
            

        },
        theAnswers:(state,action)=>{
            state.correctAnswers = action.payload.correct;
            state.wrongAnswers = action.payload.wrong;
        },
        endToday:(state)=>{
            state.CorrectToday = 0;
            localStorage.removeItem("CorrectToday");
            state.TheArray = [...English];
            state.IdNow = 0;
        }
        
      

    },
    },

);
export const {endToday,theAnswers,changeAnswer,shangeImage} = general.actions;
export default general.reducer;