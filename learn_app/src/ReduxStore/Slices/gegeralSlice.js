import { createSlice  } from "@reduxjs/toolkit";
import { English } from "../../data/English";
import { defaultData } from "../../data/defalutStates";
import { exemple } from "../../data/Exemple";


const initialState = {
showNum: 1,
queNum: 0,
tryNum: 1,
stepNow: "first",
virtualArray: exemple.slice(0,1),
realArray: defaultData

};
export const generalSlice = createSlice({
    name: "GeneralSlice",
    initialState,
    reducers: {
        addToRealArray:(state , action)=>{
            if(state.stepNow === "first"){
                if(state.virtualArray.length > state.queNum){
                    state.realArray[0].ourAnswer = action.payload;
                    state.realArray.unshift(state.virtualArray[state.queNum]);
                    state.queNum +=1;
                    state.showNum +=1;
                }else{
                    state.realArray[0].ourAnswer = action.payload;
                    const wrongAnswers = state.realArray.filter((elem)=>elem.answer !== elem.ourAnswer);
                    if(wrongAnswers.length > 0){
                        wrongAnswers.forEach((elem)=>{elem.ourAnswer = ""});
                        state.virtualArray = wrongAnswers
                        state.realArray = [];
                        state.realArray.unshift(state.virtualArray[0])
                        state.queNum = 1;
                        state.showNum = 1;
                        state.tryNum +=1;
                    }else{
                        state.stepNow = "second";
                        state.virtualArray = [...exemple.slice(0,15)];
                        state.realArray = [...defaultData];
                        state.queNum = 0;
                        state.showNum = 1;
                        state.tryNum = 1;
            
                    }
                    
                }
            };
            if(state.stepNow === "second"){
                state.virtualArray = exemple.slice(0,15);
                if(state.virtualArray.length > state.queNum){
                    state.realArray[0].ourAnswer = action.payload;
                    state.realArray.unshift(state.virtualArray[state.queNum]);
                    state.queNum +=1;
                    state.showNum +=1;
                }else{
                    state.realArray[0].ourAnswer = action.payload;
                    const wrongAnswers = state.realArray.filter((elem)=>elem.answer !== elem.ourAnswer);
                    if(wrongAnswers.length > 0){
                        wrongAnswers.forEach((elem)=>{elem.ourAnswer = ""});
                        state.virtualArray = wrongAnswers
                        state.realArray = [];
                        state.realArray.unshift(state.virtualArray[0])
                        state.queNum = 1;
                        state.showNum = 1;
                        state.tryNum +=1;
                    }else{
                        state.stepNow = "second";
                        state.virtualArray = exemple.slice(0,15);
                        state.realArray = defaultData;
                        state.queNum = 0;
                        state.showNum = 1;
                        state.tryNum = 1;
                    }
                    
                }
                    
                }


            }

         
        }
       
        },
    

);
export const {addToRealArray} = generalSlice.actions;
export default generalSlice.reducer;