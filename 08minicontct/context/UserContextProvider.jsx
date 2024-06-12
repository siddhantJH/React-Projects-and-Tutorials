import React, { useState } from "react";
import UserContext from "./UserContext";

//context provider se jsx banana padehga jo ham fragments le rahe 
//the top level pe usko rakhna pdega tabhi sare variable pe access ho paega 
//Ye sirf abhi tak store bana hai is store ka access hame dena hoga baki componenet ko 
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);  
return (
    <UserContext.Provider value={{user,setUser}}> 
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider



