
import { useState } from 'react';


let index = 5 ; 


export default function ListOfNames(){

   const [mood, setMood] = useState("normal");
   const [indexedit, setIndexedit] = useState(0);

   let [inputvalue , setInput] = useState("");
  const [names , setnames] = useState(
    [ 
      {name : "lina" , id : 1},
      {name : "nori" , id : 2},
      {name : "yopi" , id : 3},
      {name : "kiko" , id : 4},
      {name : "loli" , id : 5},
     ],
  )

   const namesList = names.map((name)=>{
    return (
      <li key={name.id}>{name.name}<button style={{margin:"10px"}} onClick={()=>{
        handleclickdelete(name.id)
      }}>delete</button><button style={{margin:"10px"}} onClick={()=>{
        handleeditclick(name.id)
      }}>Edit</button></li>
    )
   })




    //  handle the click 
   function handleclickbutton (){
      if(mood==="normal"){
      index++;
      const newnames = [...names];
      newnames.push({name:inputvalue , id:index});
      setnames(newnames);
      setInput("");
      }else{
        
        const update = names.map((m)=>{
          if(m.id === indexedit){
            return ( {...m , name : inputvalue}); 
          }
          return m 
        })
         setnames(update);
         setMood("normal");
         setIndexedit(0);
      }
   }



   // handle the delete 
   function handleclickdelete(id){

           //first method 

      // console.log(id);
      // const Tableafterdelete = names.filter((name)=>{
      //   if(name.id === id ) return false 
      //   return true 
      // })
      // setnames(Tableafterdelete);

      // second method 
      let index = 0 ; 
      const Tableafterdelete = [...names];
      names.forEach((name)=>{
        if(name.id === id){
          Tableafterdelete.splice(index , 1);
        }else {
          index++ ; 
        }
      })
      setnames(Tableafterdelete);
   }


  //edit 
  
  function handleeditclick(id){
     names.forEach((e)=>{
      if (e.id === id ){
        setInput(e.name);
        setIndexedit(id);
        setMood("edit");
      }else{
        console.log("hello");
      }
     })
  }
  
return (
  <div style={{margin : "150px 500px" , fontFamily :"sans-serif"}}>
    <h1 style={{marginRight:"20px" , letterSpacing : "2px"}}>LIST OF NAMES</h1> 
    {namesList}
   <input placeholder='enter name' value={inputvalue}  type="text" onChange={(e)=>{
         setInput(e.target.value);
   }}/>
   <button onClick={handleclickbutton}>{mood === "normal" ? "ADD" : "EDIT"}</button>
  </div>
  
)
}
