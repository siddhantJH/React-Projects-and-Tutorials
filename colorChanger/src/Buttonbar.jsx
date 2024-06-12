import React  from "react";
import { useState } from "react";


//to provide the inline css we can use style={{}} syntx which can be utlized 
//to inject the CSS into the code 
//onclick expects that you pass it a function , as if we pass the ref we won't be able to pass a reference so use expression function 
//so onclick{setColor("")} this is not goof because the setcolor return array that goes to onclick() buton click accespts function ()=>{

//}
//refresh karne se green kyo aa raha hai kyoki pura tree firse ban raha hai 
//the use State returns us two things one is the variable which we need to change and one is the function referece 
//this function reference is provided by react to change the variable on all the places oin the page
function BackgroundColor(){
    const [color,setColor]=useState("black")   //when we refresh it the enttire tree is build and the background is again set to green 
    return (
        <>
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>   
        <div class="bg-gray-800 w-full flex justify-evenly ">
                <button onClick={()=>{
                    setColor("White")
                }} class="bg-white font-bold px-4 py-2 rounded-lg my-2 hover:bg-gray-700">White</button>
                <button onClick={()=>{
                    setColor("green")
                }} class="bg-green-400 font-bold px-4 py-2 rounded-lg my-2 hover:bg-gray-700">Green</button>
                <button onClick={()=>{
                    setColor("cyan")
                }} class="bg-cyan-400	 font-bold px-4 py-2 rounded-lg my-2 hover:bg-gray-700">Cyan</button>
                <button onClick={()=>{
                    setColor("red")
                }} class="bg-rose-500	 font-bold px-4 py-2 rounded-lg my-2 hover:bg-gray-700">rose</button>
                <button onClick={()=>{
                    setColor("gray")
                }} class="bg-neutral-500	 font-bold px-4 py-2 rounded-lg my-2 hover:bg-gray-700">neutral</button>
        </div>
        </div>
        </>
    )
}

export default BackgroundColor  


