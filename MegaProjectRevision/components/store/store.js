
import storeReducer from "./authStore";
import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({
    reducer:{
        auth:storeReducer
    }
})