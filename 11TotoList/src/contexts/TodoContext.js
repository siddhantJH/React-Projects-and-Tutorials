// import React, { useContext } from "react";
// import { createContext } from "react";

// export const TodoContext=react.createContext({
//     //like this we can have a todo and add the things 
//     //and define the property , mai value yahi se lunga 
//     //lekin method ki functionality kahi aur likhunga 
// todos:[{
//         id:1,
//         todo:"Todo msg",
//         completed:false
// }],
// addTodo:(todo)=>{},
// updateTodo:(id,todo)=>{},
// deleteTodo: (id)=>{},
// toggleComplete:(id)=>{}
// }) //we need default values to be passed to the todo

// const useTodo = ()=>{
//     return useContext(TodoContext)
// }

// export default useTodo
// export const TodoContextProvider = TodoContext.provider
import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: "false",
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
