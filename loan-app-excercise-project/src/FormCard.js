

import {useState } from "react"
import PopUp from "./PopUp"
import Component from "./Component";
import { loanInputContex } from "./contexts/LoanformInput";

export default function FormCard (){

    const [Inputs , setInputs] = useState({name: "" , age:"" , phonenumber:"" , select:"" , employee:false});
    


     const isDesabled = Inputs.name === "" || Inputs.age === "" || Inputs.phonenumber ===""
     

     const [isVisible , setvisibility] = useState(false);
     const [content , setContent ] = useState("");
     const [id , setId ] = useState("popup-content");




     let desabledclass = ""

     if(isDesabled){
        desabledclass = "" ; 
     }else{
        desabledclass = "disabled" 
     }


     function handleclick (){
        if( Inputs.phonenumber.length !== 10 && (Inputs.age < 18 || Inputs.age > 100)){
             setvisibility(true);
            setContent("THE NUMBER MUST CONTAINS 10 DIGITS ONLY AND THE AGE MUST BE BETWEEN 18 AND 100 ");
            setId("error");
        } else 
       
        if(Inputs.phonenumber.length !== 10){
            setvisibility(true);
            setContent("THE NUMBER MUST CONTAINS 10 DIGITS ONLY ");
            setId("error");
        }else if(Inputs.age < 18 || Inputs.age > 100){
            setvisibility(true);
            setContent(" AGE INVALID , PLEASE ENTER AN AGE BETWEEN 18 AND 100 ");
            setId("error");
        } 
        else {
            setvisibility(true);
            setContent(" THE FORM IS WELL SUBMITTED ");
            setId("correct");
        }
     }

    

    function Handlename (e){
          setInputs({...Inputs , name : e}) ; 
    }

    function Handleage (e){
          setInputs({...Inputs , age : e}) ; 
    }

    function Handlephonenumber (e){
          setInputs({...Inputs , phonenumber : e}) ; 
    }

    
    return (
        <div className="formCard">
         <form onSubmit={(e)=>{
            e.preventDefault();
         }}>
            <h1>Requesting a Loan</h1>
            <hr></hr>

            <loanInputContex.Provider value={{value :Inputs.name , handle :Handlename , Inputlabel : "Name"} }>
                 <Component/>
            </loanInputContex.Provider>
            
            <br></br>

             <loanInputContex.Provider value={{value :Inputs.phonenumber , handle :Handlephonenumber , Inputlabel : "Phone Number"} }>
                 <Component/>
            </loanInputContex.Provider>
            <br></br>

              <loanInputContex.Provider value={{value :Inputs.age , handle :Handleage , Inputlabel : "Age"} }>
                 <Component/>
            </loanInputContex.Provider>

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
            

           




          <button className={desabledclass} disabled = {isDesabled} onClick={handleclick}>SUBMIT</button>

     
           
            </form>
        
            <PopUp isVisible={isVisible} content={content} id={id}/>
        </div>
    )
}