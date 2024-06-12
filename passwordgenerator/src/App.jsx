import { useState ,useCallback, useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)   //we have a hook so use useState to track the length
  const [numberAllowed,setNumberAllowed]=useState(false) //we have a hook so use useState to track the number allowed or not
  const [specialAllowed,setSpecialAllowed]=useState(false) //we have a hook so use useState to track the special char allowed or not 
  const [password,setPassword]=useState("")    //here by default we will generate the password 
  //ref hook 
  const passwordRef=useRef(null)//to assign the reference to it go inside the input tag and use ref={passwordRef} 
  //this passes the reference of the password to the passwordRef, koi bhi element hai aap uska reference le sakte hai 
  //and usko used kar sakte hai 

  const copyPasswordToClipboard = useCallback(()=>{ //we can also optimize this variable 
    //we could also let the used know that this is selected and high lighted we need to used the passwordRef
    passwordRef.current?.select();
    passwordRef.current?.setSelection.range(0,3)
    window.navigator.clipboard.writeText
  },[password])  //password jaise change hoga aur jo bhi chiz interralted hai vo sabhi app pass kardo dependecy me 


//this hook will also be used in the same way 
//we are basically calling this method multiple times so 
//there must be someway using which we'oll be able to call this multiple times
//so we will use the function use call back in react function  
//9it lets you cache a fucntion definition duruing re renders 
//useCallback() first argument in function reference and second thing is the dependecies which could be passed using the 
//array of allthe vriable on chaneg of which the function will be called 
const passwordGenerator = useCallback(()=>{   //here useCallback is used for optimizing the function by memorizing fully or partially 
let password=""
let str="AABCDEFGHIJKLMNOPQRSTUVWXYKabcdefghijklmnopqrstuvwxyz"
if(numberAllowed)
  {
      str+="0123456789"
  }
if(specialAllowed)
  {
    str+="!@#$%^&*()"
  }
  let i
  //now we need to make a pass which pics the random of the str , using a loop and loop will run length number of tuimes 
    for(i=1;i<=length;i++)
    {
      let char = Math.floor(Math.random() * str.length+1) //we have picked a random index form he str
      password+=str[char] //append it in the pass 
    }
    setPassword(password)
},[length,numberAllowed,specialAllowed,setPassword,setPassword])    //why did we used setPassword , it is used for optimization using memoization 


//  passwordGenerator() // we cannot call password geenratro directly like this beacuase we have used useCallback () fucntion here
//because what will render when this is not decided by me this is decided by the react itself , kahi set value control karta hia 
//kabhi set state call karta hai , correct way is use button click and call it , another way is 

//new kind of hook useEffect() hook lets you synchronize the componenets the 



useEffect(()=>{
passwordGenerator()
},[length,numberAllowed,specialAllowed,passwordGenerator]) //one is callback and then depedency array, this is used to call the function when 
                                                            //any of the dependecny changes , it just used for calling 
                                                            //while running 


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-10'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-10'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  ref={passwordRef} onClick={
              //we are usign the use Ref , kabhi bhi kisi chiz ka reference lena hota hai 
              copyPasswordToClipboard

        }>copy</button>
      </div>
      <div className='flex text-sm gap-x-1'>
      <div className='flex items-center gap-x-1'>
        /
          <input type="range" defaultChecked={length} min={8} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkBox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkBox" defaultChecked={specialAllowed} id="numberInput" onChange={()=>{
            setNumberAllowed((prev)=>!prev)//to do operation like this we can do a callback so hame previous value ka 
            //ka access milta hai to previous jo bhi value hai use ham prev karke use kar sakte hai, to jo bhi previous value thi uska
            //not ho jaega 
          }}/>
          <label>Characters</label>
      </div>

      </div>
     </div>
    </>
  )
}

export default App
