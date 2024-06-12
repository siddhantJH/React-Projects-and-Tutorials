import React,{useContext} from "react";
import {Link , NavLink} from 'react-router-dom'
import UserContext from "../Context/UserContext";


function Header()
{
  

        return(
            <>
                <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="hidden lg:block mx-auto">
      <ul className="inline-flex space-x-8">
        <li>
          <NavLink 
            to="/"
            className={({isActive})=>` text-sm font-semibold  p-1.5 ${isActive ? " text-purple-500 bg-purple-200  rounded-md p-1.5" : "text-gray-700"} text-gray-800 hover:text-purple-500`}
          >
            Home
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({isActive})=>`text-sm font-semibold p-1.5  ${isActive ? "text-purple-500 bg-purple-200  rounded-md p-1.5" : "text-gray-700"} text-gray-800 hover:text-purple-500`}
          >
            Projects
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({isActive})=>`text-sm font-semibold  p-1.5 ${isActive ? "text-purple-500 bg-purple-200  rounded-md p-1.5" : "text-gray-700"} text-gray-800 hover:text-purple-500`}
          >
           Contact
            </NavLink>
        </li>
      </ul>
    </div>
    
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

            
            
            
            </>
        )
}


export default Header