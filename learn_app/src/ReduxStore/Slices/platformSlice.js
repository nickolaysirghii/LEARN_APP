import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
   SP1:5,
   SP2:15,
   SP3:45,

   VA1: [],
   VA2: [],
   VA3: [],
   
   realArray: [],

   stepNow: 1,
   tryNow: 1,
   questionNow: 0,
};
export const platform = createSlice({
    name: "platform",
    initialState,
    reducers: {
        setSteps:(state,action)=>{
            const {one, two,three} = action.payload
             state.SP1 = one;
             state.SP2 = two;
             state.SP3 = three;
            
        },
        setRA: ( state , action )=>{
          if(action.payload.setVA){
           state.VA1 =  action.payload.data1
           state.VA2 =  action.payload.data2
           state.VA3 =  action.payload.data3
           state.realArray.push(action.payload.data1[0]);
           state.questionNow +=1;
          };
          if(action.payload.setRa){
            state.realArray[0].ourAnswer = action.payload.data2;
            state.VA1[state.questionNow-1].fakeAnswer = action.payload.data2
            state.realArray.unshift(action.payload.data1)
            state.questionNow +=1
          };
          if(action.payload.lastQues){
            if(state.realArray.length > 0){
              state.realArray[0].ourAnswer = action.payload.data1
            }
            
          }
          if(action.payload.allRight){
            state.VA1 = state.stepNow === 1 ? state.VA2 : state.VA3 ;
            state.realArray = [];
            state.realArray.push(state.VA2[0]);
            state.questionNow = 1;
            state.tryNow = 1;
            state.stepNow +=1;
          }
          if(action.payload.notClear){
           state.VA1 = action.payload.data1;
           state.realArray = [];
            state.realArray.push(action.payload.data1[0]);
            state.questionNow = 1;
            state.tryNow +=1;

          }
          if(action.payload.finish){
            state.VA1 = [];
            state.VA2 = [];
            state.VA3 = [];
            state.realArray = [];
            state.questionNow = 0;
            state.stepNow = 1;
            state.tryNow = 1;
          }
         
        },
        
     },
    },

);
export const {setSteps,setRA} = platform.actions;
export default platform.reducer;