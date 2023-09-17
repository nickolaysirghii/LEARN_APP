import { createSlice  } from "@reduxjs/toolkit";
import { exempleArray } from "../../data/platformExemple";

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

   firstStepInfo: [],
   secondStepInfo: [],
   thirdStepInfo: [],

   inputsData: [],
   inputCount:exempleArray.length + 1
};
export const platform = createSlice({
    name: "platform",
    initialState,
    reducers: {
        setrrr: (state , action )=>{
        const tt = action.payload.two + action.payload.one + action.payload.three;
        const mm = (tt * 3) + tt + action.payload.one;
        const gg = exempleArray.length - (action.payload.one + tt);
        const tttt = exempleArray.length < mm ? gg : (tt*3);
        const ppp = tttt < 0 ? gg + tt : tt;
      state.SP1 = action.payload.one;
      state.SP2 = ppp;
      state.SP3 = tttt >= 0 ? tttt : 0;
        },
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
            const a = {
              right: state.realArray.length - action.payload.data2.wrong,
              wrong: action.payload.data2.wrong,
              try: state.tryNow
            }
            if(state.stepNow === 1){
              state.firstStepInfo.push(a)
            }
            if(state.stepNow === 2){
              state.secondStepInfo.push(a)
            }
            if(state.stepNow === 3){
              state.thirdStepInfo.push(a)
            }
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
            state.firstStepInfo = [];
            state.secondStepInfo = [];
            state.thirdStepInfo = [];
            state.inputsData = [];
            state.inputCount = exempleArray.length + 1;
          }
         
        },
        setInputsData: ( state , action )=>{
         state.inputsData.unshift(action.payload)
         state.inputCount +=1
        }
        
     },
    },

);
export const {setrrr,setInputsData,setSteps,setRA} = platform.actions;
export default platform.reducer;