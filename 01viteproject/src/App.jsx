
import New from "./new"

//since jsx is a framework so we cannot name the the javascript file as js so we have to name it as JSX
//app is a fucnton which can be declarte inside the main.jsx as well 
function App() {
  const username="chai aur code"
  return ( 
    <>
        <h1>result of importing jsx and using it inside another component {username}</h1>
       <New/>  
    </>
   )
}
//need to use upper case in order to make it a upper case 
export default App


//now how do we inject javascript insdie this jsx , java bhi variable use karna hai just use the {} curly braces inside the curly braces 
//inside the curly braces we cannot perform operation perform operations before the return