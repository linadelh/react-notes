import { useState } from "react";




export default function MyButton (){

  const [ value , setvalue ] = useState("welcome,  click here if you want to change this sentence");
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>{
            setvalue("changed weeee"); 
        }}>click here</button>
    </div>

  )
  
}
 
     
   

