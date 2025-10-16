
import { useCallback, useState , useEffect , useRef } from 'react'
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'


import './App.css'

function App() {
 
  const [length , setLength] = useState(0)
  const [number , setNumber] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false);


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVUXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()~{}[]`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor( Math.random() * str.length + 1 )

      pass += str.charAt(char)
      
    }

    setPassword(pass)
  },[length, number,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{  // memorise krta hai 
    passwordRef.current?.select();
    // passwordRef.current?setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    //  alert("Password copied to clipboard!");
    setShowAlert(true);
    setTimeout(()=> setShowAlert(false),2000);
  },[password])

  useEffect (()=>{passwordGenerator()},[length,number, charAllowed,passwordGenerator])

  return (
    <>
    <h1 className='text-white text-4xl'><strong> Secure password Generator</strong> </h1>

   <div className="max-w-md w-auto mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black bg-blue-200">
  <div className="flex justify-between items-center">
    <Input
      type="text"
      value={password}
      placeholder="password"
      className="w-full py-1 px-3 mr-2"
      readOnly
      ref={passwordRef}
    />
    <Button variant="outline"className='bg-amber-50 text-black px-3 py-0.5 rounded-md border
     border-gray-300 hover:bg-amber-100 transition duration-150' onClick={copyPasswordToClipboard}>
      copy
    </Button>
  </div>

  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <Input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}></Input>
      <label> length:{length} </label>
    </div>

    <div className='flex items-center gap-x-1'>
      <Input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{
        setNumber((prev) => !prev)
      }}/>
      <label htmlFor='numberInput'>Numbers</label>
       <Input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
        setCharAllowed((prev) => !prev)
      }}/>
       <label htmlFor='charInput'>Character</label>
    </div>
  </div>
</div>  
{showAlert && (
 <div className="fixed right-4 top-4 bg-blue-200 text-black text-sm px-3 py-1 rounded-md shadow-md transition-opacity duration-300 z-50">
   Password copied!
 </div>
)}

</>
  )
}

export default App

