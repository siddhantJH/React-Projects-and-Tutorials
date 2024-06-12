import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'
import './index.css'

//now lets make a serpate file and put are componenet there and use ti multiple times in our main.jsx file 
//so we have create the componenets and we have successfully used them at multiple places , props does this task and make things reusable
//next we can see that both cards is having multiple variable so how do we make changes in all of them at once 
//traditionally we keeps html css and js sepratrly, but react says seprate things acc tyo fucntionality and not tech 

//now we can see that both the card is having the same data , now what if app db se kuch value lekar aae
//loop laga ke card ko display karwa denge , har card alag info lega ,  har app ke pas props ka access hota hai every function receves props
//as an arguments, these props is a object , now what does it receives it receive all the things which uou pass form the 
//render functon  <Card channel={data1} {data2}/> anything which you pass form here is received on the other side 
//obe if the elements in props get converted into object having key value 

    //we can pass values like this to the props  but we can't pass myArr=[1,2,3]
    //nnor it received myArr={} object like this  or someObj=myObj we need to use someObj={myObj}
    //recall the custom react that we did and how we passed the values to it 


//usualy we will see ki mai card ke andar jo bbhi values bhej rahe hai use card ko use karwana hai 
//while passing value in the Card as well we need to use the {} curly braces and pass the value


//now we know that our code in Card.jsx is receiving two argumnent,
//but what if someone does'nt pass the value in the Card
//then  we need to menstion the default value so we can use the or syntax {btnText || "visit me "}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Card  username="Siddhant Jha" btnText="Click me "/>
    <Card username="Rohan Jha" btnText="Visit Me"/>
  </React.StrictMode>,
)
