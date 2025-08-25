import { useState } from "react"

export default function Counter(){

    function handleaddclick(){
       thescore ++ ; 
       setscore(thescore);
    }

    function handlesubclick(){
        if(score>0){
            thescore -- ; 
            setscore(thescore);
        }else{
            alert("enough MONSIEUR/MADAME");
        }
    }


    const [score , setscore] = useState("0");
    let thescore = score ; 
    return (
   <div style={{margin:"200px 100px"}}>
    <h1 style={{marginLeft:"40px"}}>Counter : {thescore} </h1>
    <div style={{margin:"20px 50px"}}>
        <label> ADD </label>
        <button style={{cursor:"pointer"}} onClick={handleaddclick}> + </button>

        <label> SUB </label>
        <button style={{cursor:"pointer"}} onClick={handlesubclick}> - </button>
    </div>

    
   </div>
    )
}