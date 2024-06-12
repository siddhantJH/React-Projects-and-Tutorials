import React, { useState } from "react";
import UserContext from "./UserContext";

//context provider se jsx banana padehga jo ham fragments le rahe 
//the top level pe usko rakhna pdega tabhi sare variable pe access ho paega 
//Ye sirf abhi tak store bana hai is store ka access hame dena hoga baki componenet ko 
const UserContextProvider=({children})=>{
    const [following,setFollowing]=useState('');  
    const [followers,setFollowers]=useState('');  
    const [imgUrl,setImageurl]=useState('');  

    useState(()=>{
      fetch("https://api.github.com/users/siddhantJH")
      .then((res)=>res.json())
      .then(res=>{
        setImageurl(res['avatar_url'])
        setFollowers(res["followers"])
        setFollowing(res["following"])
      })
    })


return (
    <UserContext.Provider value={{following,followers,imgUrl}}> 
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider



