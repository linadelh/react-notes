import { useState } from "react"


let Index = 0 ; 
export default function ToDoList (){



    const [Lists , setLists] = useState(
        [
            
        ]
        
    ); 

    const [Input , setInputs] = useState("");
    

     const listoftask =  Lists.map((e)=>{
        return (
                <li key = {e.id}>
                        <span className = { e.finished=== true ? "finished" : "" } onClick={()=>{
                    finishedTask(e)} 
                    }>
                  ➡️  { e.task}  
                  </span>
                <span id="click" onClick={()=>{handledeleteclick(e)}} style={{"cursor" : "pointer"}}>
                      ❌​
                </span>
                </li>
        )
    })

    

    function handleclick (){
         const Listsoftask = [...Lists] ;
         Index++ ; 
         const task = {id : Index, task : Input , finished : false } 
         Listsoftask.push(task);
         setLists(Listsoftask);
         setInputs("");
    }

     function finishedTask (e){
          const obj = e ; 
          let index = 0 ; 
          const listoftask = [...Lists] ;
          listoftask.forEach((e)=>{
            if(e.id === obj.id){
                if(e.finished === false ){
              e.finished = true ; 
                }else{
                  e.finished = false ;   
                }
            }else{
                index++ ;
            }
          })
          setLists(listoftask);
     }
    


    function handledeleteclick (e){
         console.log(e);
         const obj = e ; 
         console.log(obj.id);
         const listoftask = [...Lists];
         let index = 0 ; 
         listoftask.forEach((e)=>{
            if(e.id === obj.id){
               listoftask.splice(index , 1)
            }else{
                index++ ;
            }
         })
         setLists(listoftask);
         console.log(Lists);
    }


  return (
    <div>
        <div className="ToDolist">
            <h1> TO DO LIST </h1>
            <div>
                <ul>
              {listoftask}
              </ul>
            </div>
            <div className="Inputs">
            <input placeholder="add a new task" value={Input} onChange={(e)=>{
                setInputs(e.target.value);
            }} ></input>
            <button onClick={handleclick}>Add</button>
            </div>
        </div>
    </div>
  )
}