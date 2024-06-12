import { useEffect, useState } from 'react'
import ThemeBtn from './components/Button/ThemeBtn'
import Card from './components/Card/Card'
import { ThemeProvider } from './components/Context/theme'
import usetheme from './components/Context/theme'
import './App.css'

function App() 
{
  const [count, setCount] = useState(0)
  const data=usetheme()
  const [themeMode,setthemeMode]=useState('light');
 //now lighttheme and dark theme are the methods in the defulat context we have only given the 
 //reference but here we also need to define the functionality of the function so we need to 
 //make  functionlaty

 const lightTheme=()=>{
  setthemeMode("light")
 }
 const darkTheme=()=>{
  setthemeMode("dark")
 }
 //actual chang in theme 
 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])


  return (
    //ab app ke andar jo bhi componenet aaega un sab pe defualt values mil jaega 
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}> 
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
