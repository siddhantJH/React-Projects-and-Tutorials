import { useState } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import './App.css'
import Login from '../components/Login'
import Profile from '../components/Profile'

//ab suppose hamne kisi file me api call kiya hai ton us file se hame data access kar sakte 
//hai api ke through 


function App() {
  const [count, setCount] = useState(0)
  //ab ham usercontextprovider tag ke bch me jo bhi componenet 
  //aap lenge vo conponent ke pas aapko directly access milega 
  //use variable ka , to sabese pehele do components banate hai fir usme ham accept karenge context aur yaha oas kjarenge 
  return (
    <UserContextProvider>
      <h1>click on button</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
