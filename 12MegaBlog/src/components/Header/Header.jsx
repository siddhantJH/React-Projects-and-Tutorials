import React from "react";
import LogoutBtn from "./LogoutBtn";
import { login,logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch,useSelector } from "react-redux";
import Container from "../container/Container";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
import { Link } from "react-router-dom";


// function Header()
// {
//     //pata karne ke liye ki user logged in hai ya nai , to status hamare auth ke andar hai to aise access karenge 
//     const authStatus=useSelector((state)=>state.status)
//     const navigate=useNavigate(); //we will use navigate to naviate using the components 
//     console.log(authStatus)

//     //this basically allows us to do conditional redering based on whether the used is active or not 
//     //if authStatus is true based on that we'll render the elements on navbar 
//     const navItems = [
//         {
//           name: 'Home',
//           slug: "/",
//           active: true
//         }, 
//         {
//           name: "Login",
//           slug: "/login",
//           active: !authStatus,
//       },
//       {
//           name: "Signup",
//           slug: "/signup",
//           active: !authStatus,
//       },
//       {
//           name: "All Posts",
//           slug: "/all-posts",
//           active: authStatus,
//       },
//       {
//           name: "Add Post",
//           slug: "/add-post",
//           active: authStatus,
//       },
//       ]

// //jo html elements repeat ho raha hai sirf waha par keys lagao 
// return(
//     <div>
//         <header className="py-3 shadow bg-gray-500 ">
//             <Container>
//                 <nav className="flex">
//                     <div className="mr-4">
//                             <Link>
//                                 <Logo width='70px'/>
//                             </Link>
//                     </div>
//                     <ul className="flex ml-auto">
//                         {navItems.map((item)=>(
//                             item.active ? (
//                                 <li key={item.name}>
//                                     <button onClick={()=>navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
//                                 </li>
//                             ):null
//                         ))}
//                         {authStatus && (
//                             <li>
//                                 Logout
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//     </div>
// )
// }

// export default Header


function Header() {
    const authStatus = useSelector((state) => {
        return state.auth.status
    })
    const userData=useSelector((state) => {
     return state.auth.userData   
    })
    const navigate = useNavigate()
    console.log(userData)
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    ]
  
  
    return (
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px'   />
  
                </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
          </Container>
      </header>
    )
  }
  
  export default Header