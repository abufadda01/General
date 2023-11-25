import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter/counterSlice"


export const store = configureStore({
    // reducer contains (combine) all slices reducers
    reducer : {
       counter : counterReducer
    }
})

