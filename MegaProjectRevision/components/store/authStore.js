import { createSlice } from "@reduxjs/toolkit"




initialState={
    authentication:false,
    userData:null
}



const storeSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.authentication=true
            state.userData=action.payload
        }
        ,
        logout:(state)=>{
            state.authentication=false
        }
    }
})


export const {login,logout}=storeSlice.actions
export default storeSlice.reducers