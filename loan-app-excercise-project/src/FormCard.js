

import {useState } from "react"
import PopUp from "./PopUp"

export default function FormCard (){

    const [Inputs , setInputs] = useState({name: "" , age:"" , phonenumber:"" , select:"" , employee:false});


    function handleclick (){
        alert("hi");
    }

    const btndisable = Inputs.name ==="" || Inputs.age ==="" || Inputs.phonenumber ===""

    let btndisablestyle = "" ;

    if (btndisable){
       btndisablestyle = "btn-not"
    }

    
    return (
        <div className="formCard">
         <form>
            <h1>Requesting a Loan</h1>
            <hr></hr>

            <label>Name</label>
            <br></br>
            <input type="text"  onChange={(e)=>{
                setInputs( {...Inputs , name: e.target.value});
            }}/>

            <br></br>

            <label>Phone number</label>
            <br></br>
            <input type="number" onChange={(e)=>{
                const NewInput = {...Inputs};
                NewInput.phonenumber = e.target.value ; 
                setInputs(NewInput);
                
            }}/>
            
            

             
            <br></br>

            <label>Age</label>
            <br></br>
            <input type="number" onChange={(e)=>{
        
                const newInputs = {...Inputs};
                newInputs.age = e.target.value ;  
                setInputs(newInputs);
            }}/>

            <p>Are you an employee?</p>
            <input  type="checkbox" checked= {Inputs.employee} onClick={()=>{
                if(Inputs.employee === false ){
                    setInputs({...Inputs , employee : true }) ; 
                }else {
                    setInputs({...Inputs , employee : false }) ; 
                }
            }}/>

            {Inputs.employee}

            <br></br>
            <label>salary</label>
            <br></br>
            <select style={{padding :"10px" , width:"90%" , marginLeft:"8px"}} onChange={(e)=>{
                setInputs( {...Inputs , select: e.target.value});
            }}>
                <option></option>
                <option>LESS THAN 500dollar</option>
                <option>MORE THAN 500dollar</option>
                <option> 500dollar</option>
            </select>

            <br></br>
            <button className= {btndisablestyle} disabled = {btndisable} onClick={handleclick}>SUBMIT</button>

           
            </form>
            {/* <PopUp/> */}
        </div>
    )
}