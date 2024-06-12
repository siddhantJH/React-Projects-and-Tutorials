import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTodo } from './contexts'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  //here we will define the functionality of the function that we declared in the Todocontext 
  const [todos,setTodos]=useState([])  //by default keep empty array 

  //here we essential need to update the todo by taking the previous state 
  const addTodo=(todo)=>{

      setTodos((prev)=>[{id:Date.now(),...todo},...prev])  //we need previous state of the array but we dont want that  
                                                                  //hame agar previous state ki value chahiye to hamare pas hota hai aik 
                                                                  //callback uspe ham koi bhi nam ka value pass kar sakte hai 
                                                                 //here we are usign the flatenning approach of destructuring approach                                                       
  }

  const updateTodo=(id,todo)=>{
     setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))
  }


  const deleteTodo=(id)=>{
      setTodos((prev)=> prev.filter((todo)=>todo.id!==id))  //isse hame aik aisa array milega jisse filter hokar aaega sab 
  }


  const toggleComplete=(id)=>{
    //previous state that we are getting in the callback is essentially a array so if we want to 
    //tick mark something as complete 
    setTodos((prev)=>{
    return  prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:true}:prevTodo)
  })   
  }

  //make a useeffect function and just start a function in the beginning of openin the app 
  //and put the things inside the todos 
  useEffect(()=>{
    //the items are stored in the local storage in the form of the json format
    //so when yoy get it just convert it back to object 
   const todos=JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length){
      setTodos(todos)
   }
  },[])


  useEffect(()=>{
    //the items are stored in the local storage in the form of the json format
    //so when yoy get it just convert it back to object 
    localStorage.setItem("todos",JSON.stringify(todos))    //setItem takes key value 
  },[todos])   //this todos is changed by some other fnction 


  //lets define the functionality
  return (
    //we need to wrap the context int the context provider than we need to pass the params using destructure concept 
    //in value we are passing all the todos all at once 
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
