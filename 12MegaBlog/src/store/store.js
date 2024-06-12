//lets make a store by revisiong , this store will essentially used to keep the track of the 
//the login session and user track 

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'

//first make a store and export it 
const store = configureStore({
    reducer: {
        auth :authReducer,
        //TODO: add more slices here for posts
    }
});


export default store 