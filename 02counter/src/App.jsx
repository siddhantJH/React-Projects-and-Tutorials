import React, { useState } from 'react'  //one of the hook 

// import 

function App() {
  //to use the Use affect hook use use state 

  let [counter,setCounter]=useState(15) //changes to propogate kiya jata hai dom me 
  //first argument is defulat value, and it returns two things counter and function reference
  // function reference controlls counter variable to update it and changes it in the entire screen
  //in the entire screen

  const addValue=()=>{
    //counter=counter+1;//now how to update the counter

    // setCounter(Counter+1) // pass in the new value to the function reference returned from the above use state function 
    // setCounter(Counter+1) 
    // setCounter(Counter+1) 
    // setCounter(Counter+1) 
    //smart updates 


    setCounter((prevCounter)=>prevCounter+1) // pass in the new value to the function reference returned from the above use state function 
    setCounter((prevCounter)=>prevCounter+1) 
    setCounter((prevCounter)=>prevCounter+1) 
    setCounter((prevCounter)=>prevCounter+1) 
    //what happends when we duplicate it then react is smart updates the latest update and does't do redundant update 
    //useState() : jitne bhi update bhejne hai use batched me bhejta hai , to batched me chizo ko bharta hai aur aik sath bhejta hai 
    //aik hi kam ko ham repeate kar rahe hai to fiber smartly 
    //all these setCounter accepts a callback function , jispe arguments jata hai prevCounter , jy last updated state hai counter ki
    //vo wapas se fetch ki hai , 
  }
  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter)
  }
  //in console it is working file but it is not getting updated in the screen why?/
  //The problem here is UI updating this is where the power of react comes from 
  //so react decides and reacts during varible update , 
  //now what if use the  varible in lot of places using , then 
  //handling and updating the varible will become really difficult in that case 
  //what we can do is we cna use react HOOK (real power of react)
  //HOOKs : are the function and in hooks ke through data update hoga 

  return (
    <>
     <h1>Chai aur react {counter}</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}>Add Value {counter}</button>
     <br />
     <button
      onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
