
import { useContext } from "react";
import { loanInputContex } from "./contexts/LoanformInput";


export default function MyInput(){

    const Contex = useContext(loanInputContex);
    console.log("the contex is : ");
    console.log(Contex);
    
    return (
        <>
          <label>{Contex.Inputlabel}</label>
            <br></br>
            <input type="" value={Contex.value} onChange={(e)=>{
               Contex.handle(e.target.value);
            }}/>
        </>
    )
}