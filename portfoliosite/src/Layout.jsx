import React from "react";
import Header from "./components/Header/Header";
import { FooterThree } from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'
import UserContextProvider from "./components/Context/UserContextProvider";


function Layout(){
    return(
        <UserContextProvider>
        <div className="bg-cover bg-center h-max rounded-md" style={{backgroundImage: 'url("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
        <Header/>
        <Outlet/>
        <FooterThree/>
        </div>
        </UserContextProvider>
    )
}

export default Layout