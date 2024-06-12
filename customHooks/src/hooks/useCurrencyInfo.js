import { useEffect,useState } from "react" //this is default hook

//Making custom Hooks: these can use predefined hook 
//whenever you use hook put "use" keyword in start
///Hooks are purely js and returns js 
function useCurrencyInfo(currency)
{
    //now we need to call an Api , so which hook can be used so that when this hook is used then only api gets called
    //then we need a hook called as useAffect() automatically calls fetch when a function mounts and un mounts 
    //jaisehi life cycle trigger hota hai to mai useAffect use karenge automatically hook call ho jaega 

    const[data,setData]=useState({}) //if api fails to kam se kma emptyobject to hai hi 
    useEffect(()=>{
        //just call fetch
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>{return res.json()})   //we receive string from api call so string data gets converted to json nad passed to below then
        .then((res)=>setData(res[currency]))  //these gives us the map, when we do this the data get assigned with res[currency] value
    },[currency]) //takes two things callback and depedenecy array, means is chiz me koi bhi change aaega to mai api call karunga 
    return data   //here we are only returning the data 
}//these custom hooks uses built in hooks 

  
export default useCurrencyInfo