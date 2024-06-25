import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo,removeTodo } from "../features/todo/todoSlice";

function AddTodo()
{
    //addTodo store ke andar kuch ad karna hai to add
    //hota hia dispatch se to kuch na kuch event dispatch karna padega
    const [input,setInput]=useState();
    //now we need to bring the wireup useDispatch()
    const dispatch=useDispatch();


    const addTodoHandler=(e)=>{
        e.preventDefault();
        //now we will dispatcher : dispatcher aik reducer ka use karke store ke andar changes karta hai 
        dispatch(addTodo(input))  //we need to pass a action.payload as well 
        setInput('')  //cleaning the input
    }


    return (<>
     <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    </>)
}


export default AddTodo