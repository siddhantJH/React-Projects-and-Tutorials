// //now create slice for the store , the job of this slice 
// //is to track a authentication of the user, 
// //user is authenticated or not i will ask this to store everytime 



// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState={
//     status:false,
//     userData:null
// }


// //do not export this slice export only two things that is 
// //first the the reducers and then the actions 
// const authSlice = createSlice(
// {
//     name:"auth",
//     initialState,
//     //is reducer ke andar actions hai to 
//     //hame actions aur reducers dono export karna hoga 
//     reducer:{
//         login:(state,action)=>{
//             state.status=true;
//             state.userData=action.payload;

//         },
//         logout:(state)=>{
//             state.action=false,
//             state.userData=null
//         }
//     }
// })  


// //exporting the actions 
// export const {login,logout} = authSlice.actions //inside the reducers we have the actions 


// //we need to export the reducers in default way 
// export default authSlice.reducer 
//  //we need to export each function individually also 
//  //because we might need to use it to fetch the state or to dispatch the changes




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;