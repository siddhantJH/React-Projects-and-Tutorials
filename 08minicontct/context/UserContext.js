import React from "react";
const UserContext=React.createContext()
export default UserContext; 

{/* <userContext>
    <Card>
    <Card/>
</userContext> */}


//children aik generic nam hai means jo bhi aapke pas aa raha hai usko as it is pass kar do 
//user context is also a provider so ispe ham provider lagaenge 
//jaise hi ham wrap karwaenge comnponenets ko userContext se 
//user context ban jaega provider , means koi bhi componenets jo iske andar hai 
//un sare componenets ko global user context ka access mil jaega 
//sare componenets sercontext ke through sare state ka access le sakete hai 
//jo api call karna hai yaha kardo aur jo bhi access mila hai use pass kardo 
//jo jo chiz hame pass karni hai vo ham props ke through pass kar sakte hai 
//jin jin value ka access hame dena hai 