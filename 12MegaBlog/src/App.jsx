import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login } from './store/authSlice'
import { logout } from './store/authSlice'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// function App() {
//   const [count, setCount] = useState(0)
//   console.log(import.meta.env.VITE_APPWRITE_URL)   // now it is printing it in the console 
// //now whenever an app loads we need to make sure that the user is logged in or not,
// //we will use the redux store for that, now sabse pehele  ham loading ka state banaenge , kyoki jav aap application se data fetch karenge 
// //to time lag sakte hai kyoki appwrite is not in my home , it is in different continent 
// //to uske liye aisi koi bhi chiz  ho jab hame datbase se kuch puchna ho aur network se kuch puchna ho to aik loading state banwa do 

// const [loading , setLoading]=useState(true);
// const dispatch = useDispatch();
// //next import the service which we have created, adn then as soon 
// //as this page load use the useEffect and ask the service whether the user is logged in or not 

//   useEffect(()=>{
//     authService.getCurrentUser() //since it is returning a promise so we can handle it using the .then() operator his received the value returned when promise if resolved
//     .then((userData)=>{
//       if(userData){
//         dispatch(login({
//           userData
//         }))
//       }else{
//         dispatch(logout())    //user se data lene ki koshish kari aur agar nahi mila data to logged out dikha denge 
//       }
//     })
//     .finally(()=>{
//       setLoading(false)
//     })
//   })
//   //now we will implement conditional loading 
//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <main>
//         <Outlet/>
//         </main>
//       </div>
//     </div>
//   ) : null
// }

// export default App
function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App