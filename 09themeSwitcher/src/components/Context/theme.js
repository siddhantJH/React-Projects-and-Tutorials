import React,{createContext,useContext} from "react";

//create context takes a object as well, jab aapka context banega means initial state jo hogi 
//waha par bhi aap vlaue de sakte ho , means context 
//jab pehele bar bane to default value kya kya feed ho previously 
//we have not taken any default value 
export const ThemeContext=createContext({ 
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

//jab bhi kuch wrap karna hoga mai iska use karunga
export const ThemeProvider=ThemeContext.Provider

//jab bhi kuch use karna hoga upar ke context mese mai iska help lunga 
export default function usetheme(){     //we can also make a custom hook and we can export it to use the default values that we want to share 
    return useContext(ThemeContext)
}

//jab bhi koi theme mode contact kare atleast aik default variable ho aur aikl dark theme nam ka function available ho 
//to jab bhi koi context call karega usko ye do function aur ye default theme bhi mil jaega 
