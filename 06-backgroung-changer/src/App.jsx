import {Button} from "./components/ui/button"
import { useState } from 'react'
import './App.css'

function App() {

  const [color , setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor : color}}>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 

     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-2xl'>
       <Button variant="ghost"style={{backgroundColor: "red"}} className="text-amber-50" onClick={() => setColor("red")}>Red</Button>
       <Button variant="ghost"style={{backgroundColor: "green"}} className="text-amber-50"onClick={() => setColor("green")}>Green</Button>
       <Button variant="ghost"style={{backgroundColor: "blue"}} className="text-amber-50"onClick={() => setColor("blue")}>Blue</Button>
       <Button variant="ghost"style={{backgroundColor: "black"}} className="text-amber-50  hover:text-amber-50"onClick={() => setColor("black")}>Black</Button>
       <Button variant="ghost"style={{backgroundColor: "pink"}} className="text-amber-50"onClick={() => setColor("pink")}>pink</Button>
       <Button variant="ghost"style={{backgroundColor: "purple"}} className="text-amber-50"onClick={() => setColor("purple")}>purple</Button>
       <Button variant="ghost"style={{backgroundColor: "gray"}} className="text-black"onClick={() => setColor("gray")}>gray</Button>
       <Button variant="ghost"style={{backgroundColor: "yellow"}} className="text-amber-50"onClick={() => setColor("yellow")}>yellow</Button>
       <Button variant="ghost"style={{backgroundColor: "white"}} className="text-black"onClick={() => setColor("white")}>white</Button>
       <Button variant="ghost"style={{backgroundColor: "lavender"}} className="text-black"onClick={() => setColor("lavender")}>lavender</Button>
      </div> 
     
     </div>
    </>
  )
}

export default App
