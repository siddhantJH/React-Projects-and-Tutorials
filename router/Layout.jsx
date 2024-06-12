import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
//now what i want is i want the header and footer to be same '
//i only want to change the middle part, for that we need to pass the things dynamically 
//for this functionality the react router dom gives us outlet 
//Layout ko as  a base use kar lega aur jaha outlet diya hai waha ham chizo ko change kar sakte hai 

function Layout()
{
return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
}

export default Layout