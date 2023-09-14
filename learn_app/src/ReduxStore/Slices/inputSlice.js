import { createSlice  } from "@reduxjs/toolkit";
import { English } from "../../data/English";

const initialState = {
   step_1:5,
   step_2:15,
   step_3:45,
   step_4:50,
   step_5:50,

   questionsCopy:[],
   arrayLength: English.length,

};
export const inputs = createSlice({
    name: "inputs",
    initialState,
    reducers: {
        firstStep:(state,action)=>{
            const {one, two,three,four,five} = action.payload
             state.step_1 = one;
             state.step_2 = two;
             state.step_3 = three;
             state.step_4 = four;
             state.step_5 = five;
        },
        copyQuestion: (state,action)=>{
            
          state.questionsCopy.unshift(action.payload);
          state.arrayLength +=1;
            
        }
        

    },
    },

);
export const {firstStep,copyQuestion} = inputs.actions;
export default inputs.reducer;