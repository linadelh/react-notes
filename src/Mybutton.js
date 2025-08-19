import { useState } from "react";




export default function MyButton (){

  const [ value , setvalue ] = useState("welcome");
  console.log(value);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>{
            if(value === "welcome"){
            setvalue("changed weeee"); 
            console.log(useState[0]);
            }else{
                setvalue("welcome"); 
            }
        }}>click here</button>

          
    </div>
      
  )
  
}
 
     
   

