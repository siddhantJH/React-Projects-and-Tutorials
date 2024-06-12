import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import New from "./new"
import './index.css'

const anotherUser="chai aur react"  //where to inject it , it is injected after tree creating, in last argumnet 


//we could also wire a custom app fucntion inside the main.jsx 
 function MyApp(){   //name has to be capital always for all html retrun in function 
   return (
      <>
      <h1>Custom app inside the main.jsx</h1>
      </>
   )
 }

const anotherElement=(<a href="www.google.com" target='__blacnk'> visit google</a> )
//how is this working , anotherElement is a converting the a tag into the object 

//agar ham recat ke hisab se bananeg object to React variable use karna padega 
const reactElement=React.createElement(
   'h1',{
      href:"www.google.com",
      target:"_blank",
   },"click me to google",anotherUser    // we cannot use if else here because it is evaluated expression and getting onverted to object and object does not contain if else
)   //it takes object and first parameter is tag, second is object all properties  , then at last we pass the string inner child text  
//now we can directly pass the reactElement to the render function


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<MyApp/>   // < /> ke andar function pass kiya ja raha hai , agar app object pass kar rahe hai to </> na likhe 
            //Where is this syntax coming from so all react uses a bundler 
            //vite , the work of this bundler is improvinf syntax enhancoing it , 
            //react does not under stand html syntax , it only understande tree so is pure html jo return hua hai iski parsing hoti hai 
            //ise tree me convert kiya jata hai . MyApp bhi convert ho raha hoga. agar mai previously created object ko direct upar likh ke idhar pass kar du to mai compiler ka 
            //time ka bacha sakt hu, 
            //lekin nai chalega kyoki jo object ham create kiye hai vo custom react tha aur recat ka jo apna rrender function hai 
            //vo alag type ke argument aur parameter leta hai 
            // just use reactElement
)
   