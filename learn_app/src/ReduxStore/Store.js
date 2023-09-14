import { configureStore } from "@reduxjs/toolkit";
import  time  from "./Slices/timeSlice";
import  inputs  from "./Slices/inputSlice";
import general from "./Slices/initialStates";
import gegeralSlice from "./Slices/gegeralSlice";
import platform from "./Slices/platformSlice";


export const store = configureStore({
    reducer: {
     calculate: time,
     enter: inputs,
     main:general,
     top: gegeralSlice,
     platSlice: platform
    }
});