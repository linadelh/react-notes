import { useState } from "react"


export default function Calculatrice (){
      const [currentNumber , setcurrentNumber] = useState("");
      const [prevNumber , setPrevNumber] = useState(""); 
      const [operation , setOperation] = useState("");





    function HandleClick(number){
    if(operation === ""){
        setcurrentNumber(currentNumber.toString() + number); 
    }else{
        if(prevNumber ===""){
            setPrevNumber(currentNumber);
            setcurrentNumber("" + number) ;
        }else{
        setcurrentNumber(currentNumber.toString() + number );
        }
    }
    }



    function HandleOperationClick(op){
        let total ; 
       

        if(op === "="){
            if(operation === "+"){
                total = parseFloat(prevNumber) + parseFloat(currentNumber) ;
            }
        
            if(operation ==="-"){
                total = parseFloat(prevNumber) - parseFloat(currentNumber)  ; 
            }

            
            if(operation ==="/"){
                total = parseFloat(prevNumber) / parseFloat(currentNumber)  ; 
            }

            
            if(operation ==="*"){
                total = parseFloat(prevNumber) * parseFloat(currentNumber)  ; 
            }

        setcurrentNumber(total.toString());
        }else if(op === "+"){
            setOperation("+");
        }else if(op === "-"){
            setOperation("-");
        }else if(op === "*"){
             setOperation("*");
        }else if(op === "/"){
           setOperation("/")
        }
    }


    function handleResetButton(){
        setcurrentNumber("0");
        setPrevNumber("");
        setOperation("");
    }
   

   
    return (
        <>
         <h1>CALCULATRICE DE LINA</h1>
         <div className="calculatrice">
            <div className="Inputs">
                <button>Reset</button>
            <input type="text" disabled={true} value={currentNumber}></input>
            </div>
            <div className="oprations">
                <button onClick={()=>{HandleClick(7)}} >7</button>
                <button onClick={()=>{HandleClick(8)}} >8</button>
                <button onClick={()=>{HandleClick(9)}} >9</button>
                <button onClick={()=>{HandleOperationClick("/")}} >/</button>
                <button onClick={()=>{HandleClick(4)}} >4</button>
                <button onClick={()=>{HandleClick(5)}} >5</button>
                <button onClick={()=>{HandleClick(6)}} >6</button>
                <button onClick={()=>{HandleOperationClick("-")}}>-</button>
                <button onClick={()=>{HandleClick(1)}} >1</button>
                <button onClick={()=>{HandleClick(2)}} >2</button>
                <button onClick={()=>{HandleClick(3)}} >3</button>
                <button onClick={()=>{HandleOperationClick("+")}} >+</button>
                <button onClick={()=>{HandleClick(0)}}>0</button>
                <button >.</button>
                <button  onClick={()=>{HandleOperationClick("=")}} >=</button>
                <button  onClick={()=>{HandleOperationClick("*")}} >*</button>
            </div>

         </div>
        </>
    )
}