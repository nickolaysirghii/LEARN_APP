import { configureStore } from "@reduxjs/toolkit";
import  time  from "./Slices/timeSlice";
import platform from "./Slices/platformSlice";
import animation  from "./Slices/animationSlice";


export const store = configureStore({
    reducer: {
     calculate: time,
     platSlice: platform,
     transform: animation
    }
});