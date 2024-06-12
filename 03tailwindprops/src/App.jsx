import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//to test tailwind remove the unecessary code from the below then add a h1 tag then add the classes
//we are not wrinting css or html we are wiritn jsx, we are writing jsx we could just write the tailwind class name 
//and we can do our work just use the tailwind classes form the library 
//in jsx the image tag should be closing
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     
    </>
  )
}

export default App
