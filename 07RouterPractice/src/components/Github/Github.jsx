import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom"; //we use it to get the data



//use loader concept to call api early before clicking 
//useaffect se bhi pehele , to imo=plement this go to the createBrowserrouter path 
//then inside the Route for the github add a line loader ={} no we can call the api here itself if we want to 
//enable the prefetching of the api 
function Github()
{
    // const [data,setData]=useState({})
//     useEffect(()=>{
//         fetch("https://api.github.com/users/siddhantJH")
//         .then((res)=> res.json())
//         .then((res)=>{
//             console.log(res.followers)    
//             setData(res)
//         })
// })
//now how to reflect the changes in the data.followers 
//The useLoaderData hook will return the data that was fetched
// by the loader function for the current route. In this example, 
//the useLoaderData hook will return an array of posts.
    const data = useLoaderData()
    return(<>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
            <img src={data?.avatar_url} alt="Git picture" width={300} />
            </div>
    </>)
}

export const githubInfoLoader=async ()=>{
    const response= await fetch("https://api.github.com/users/siddhantJH")
    return response.json()   //this is a promnise actully 
}





export default Github