import { configureStore } from "@reduxjs/toolkit";
import  time  from "./Slices/timeSlice";


export const store = configureStore({
    reducer: {
     calculate: time
    }
});