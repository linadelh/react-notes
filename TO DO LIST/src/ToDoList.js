import { useState } from "react"


let Index = 0 ; 
export default function ToDoList (){
    
    const [mood , setmood] = useState("normal");
    const [index , setIndex] = useState();
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
                {/* <span id="click" onClick={()=>{handledeleteclick(e)}} style={{"cursor" : "pointer"}}>
                      ❌​
                </span> */}

                 <div className="click">
                     <button onClick={()=>{handleeditclick(e)}}>EDIT</button>
                     <div onClick={()=> {handledeleteclick(e)}} style={{"cursor" : "pointer"}}>❌​</div>
                 </div>
              
                </li>
        )
    })

    

    function handleclick (e){

         console.log(e);
         const Listsoftask = [...Lists] ;
         Index++ ; 
         const task = {id : Index, task : Input , finished : false } 
         Listsoftask.push(task);
         setLists(Listsoftask);
         setInputs("");
         if(mood==="edit"){
          setmood("normal");
          console.log(index);  
          const secondlist = [...Lists];
          let temp = 0 ; 
          secondlist.forEach((e)=>{
            if(e.id === index){
                secondlist[temp].task = Input ; 
            }else{
              temp++; 
            }
          })
          setLists(secondlist);
         }
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

    function handleeditclick(e){
        setmood("edit");
        console.log(e);
        let object = e ;  
        Lists.forEach((e=>{
          if(e.id === object.id){
            console.log("it is the one");
            setInputs(object.task); 
            setIndex(e.id);
          }
        }))
    }

    console.log(mood);
    console.log(index);


  return (
    <div className="container">
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
            <button onClick={handleclick}>{mood === "normal" ? "ADD" : "UPDATE"}</button>
            </div>
        </div>

        <div className="disclaimer">
         <h3>disclaimer</h3> 
         <p>When you complete a task, simply click on it to mark it as done</p>
        </div>
    </div>
  )
}