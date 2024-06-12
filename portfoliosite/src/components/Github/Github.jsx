import React, { useContext, useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom"; //we use it to get the data
import UserContext from "../Context/UserContext";

function Github()
{
    const data=useContext(UserContext)


    return(<>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
            <img src={data.imgUrl} alt="Git picture" width={300} />
            </div>
    </>)
}




export default Github