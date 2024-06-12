import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/UserContext";


//Usercontext ke andar jo value hai use mai kaise fetch karu uske liye hame help karta hai 
//useContext 


function Login(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }

    return (
        <div>
            <h2>
                Login
                <input 
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                type="text" placeholder="username" />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                type="text" placeholder="password" />
                <button onClick={handleSubmit}>click</button>
            </h2>
        </div>
    )
}

export default Login