import {configureStore} from '@reduxjs/toolkit'   //bring the configure store from redux toolkit 
import todoReducer from '../features/todo/todoSlice';
//is method ko use karke aik varible banao jo configurestore se aaega aur ye input par object lega 
//now we have configured the store now we will make a reducer 
//but redux toolkit ke andar jo reducer banta hai vo thoda different hai ise kehete ha slices 


export const store=configureStore({
    reducer:todoReducer
})