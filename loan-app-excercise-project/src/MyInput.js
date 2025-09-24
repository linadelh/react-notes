
import { useContext } from "react";
import { loanInputContex } from "./contexts/LoanformInput";
import { UserData } from "./contexts/UserContex";


export default function MyInput(){

    let userdata = useContext(UserData);
    const Contex = useContext(loanInputContex);
    console.log("the contex is : ");
    console.log(Contex);
    
    return (
        <>
          <label>{userdata.UserName}'s  {Contex.Inputlabel}</label>
            <br></br>
            <input type="" value={Contex.value} onChange={(e)=>{
               Contex.handle(e.target.value);
            }}/>
        </>
    )
}