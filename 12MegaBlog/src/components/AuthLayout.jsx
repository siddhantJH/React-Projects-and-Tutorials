//this is a protected container using which we will protect the auth layout 
//ye actully aik mechanism  hai kis tarike se pages aur route ko protect kiya jata hai 
//we have not written any protecion mechanism til date 
//auth ke andar hame pata hai ki state hai hamare pas login hai nai hai 
//but uska use nai kar rahe ham kuch bhi 



import React,{useEffect} from "react";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router";
import { useState } from "react";


// export default function Protected({children,authentication=true}){

//     const navigate = useNavigate()
//     const [loader, setLoader] = useState(true)
//     const authStatus = useSelector(state => state.auth.status)

//     useEffect(()=>{
//         if(authentication && authStatus!==authentication)
//         {
//             navigate("/login")
//         }else if(!authentication && authStatus!==authentication)
//         {
//             navigate("/")
//         }
//         setLoader(false)
//     },[authStatus,navigate,authentication]) 
//     //any changes in authStatus then run useEffect or anu changes in navigate or authentication 

//     return(
//         loader ? <h1>Loading...</h1> : <>{children}</>
//     )
// }
export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)

    useEffect(() => {
        // TODO: make it more easy to understand

        if (authStatus ===true){
            navigate("/")
        } else if (authStatus === false) {
            navigate("/login")
        }
        
        let authValue = authStatus === true ? true : false
        //there was a problem in this logic please find and correct it 
        // if(authentication && authStatus !== authentication){
        //     navigate("/login")
        // } else if(!authentication && authStatus !== authentication){
        //     navigate("/")
        // }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}