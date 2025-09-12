import { useState } from "react"


export default function Calculatrice (){


   
   const [firstNumber , setFirstnumber] = useState(0);
   const [SecondNumber , setSecondNumber] = useState(0);
   const [operation , setOperation] = useState(""); 
   const [Total , setTotal] = useState(0); 
   const [currentInput , setcurrentInput] = useState(0);
    

    function HandleClick(e){

        let total ; 

       if(operation==="" && !(["+" , "/" , "*" , "=" , "-"].includes(e.target.value))){
        if(firstNumber !== 0 ){
        setFirstnumber(firstNumber.toString() + e.target.value);
        setcurrentInput(firstNumber.toString() + e.target.value);
        }else{
            setFirstnumber(e.target.value);
        }

       } else if(["+" , "/" , "*" , "=" , "-"].includes(e.target.value)){
        setOperation(e.target.value);
          
        if(e.target.value === "="){

        if(operation === "-"){
             total = parseFloat(firstNumber) - parseFloat(SecondNumber);

        } else if(operation === "/"){
            total = parseFloat(firstNumber) / parseFloat(SecondNumber);
        }else if(operation === "+"){
            total = parseFloat(firstNumber) + parseFloat(SecondNumber);

        }else if(operation === "*"){
            total = parseFloat(firstNumber) * parseFloat(SecondNumber);
        }
            setTotal(total); 
            setcurrentInput(total);
             setFirstnumber(total);
            setSecondNumber(0);
              setOperation("");
           
        }
       }else{
         if(SecondNumber !== 0 ){
        setSecondNumber(SecondNumber.toString() + e.target.value);
        setcurrentInput(SecondNumber.toString() + e.target.value);
        }else{
            setSecondNumber(e.target.value);
        }
       }

    }
   

    function handleclickreset (){
        setcurrentInput(0);
        setFirstnumber(0);
        setSecondNumber(0);
        setOperation("");
        setTotal(0);
    }
    return (
        <>
         <h1>CALCULATRICE DE LINA</h1>

         <div className="calculatrice">

            <div className="Inputs">
                <button onClick={handleclickreset}>Reset</button>
            <input type="text" disabled={true} value = {currentInput} ></input>
            </div>

              

            <div className="oprations">
                <button value={7} onClick={HandleClick}>7</button>
                <button value={8} onClick={HandleClick} >8</button>
                <button value={9} onClick={HandleClick} >9</button>
                <button value={"/"} onClick={HandleClick} >/</button>
                <button value={4} onClick={HandleClick} >4</button>
                <button value={5} onClick={HandleClick} >5</button>
                <button value={6} onClick={HandleClick}>6</button>
                <button value={"-"} onClick={HandleClick} >-</button>
                <button value={1} onClick={HandleClick} >1</button>
                <button value={2} onClick={HandleClick} >2</button>
                <button value={3}onClick={HandleClick} >3</button>
                <button value={"+"}onClick={HandleClick} >+</button>
                <button value={0}onClick={HandleClick} >0</button>
                <button value={"."} onClick={HandleClick} >.</button>
                <button value={"="}onClick={HandleClick} >=</button>
                <button value={"*"}onClick={HandleClick} >*</button>
            </div>

         </div>
        </>
    )
}