import { configureStore } from "@reduxjs/toolkit";
import  learn  from "./Slices/LearnSlice";


export const store = configureStore({
    reducer: {
      remember: learn
    }
});