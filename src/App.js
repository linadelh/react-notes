
import { useState } from 'react';
import './App.css';


   let nextid = 5 ; 
function App() {

  function handleclick(){
     setfruits([...fruits ,{ id : nextid , name : fruitName } ]);
     nextid = nextid + 1 ; 
  }

   function handledeleteclick(id) {
    // const newFruits = [...fruits];
    // --first method-- 
  //  let index = 0 ;
  //  for( let fruit of newFruits){
  //   if(fruit.id === id){
  //     newFruits.splice(index , 1);
  //     setfruits(newFruits);
  //   }else{
  //     index++; 
  //   }
  //  }

    // --Second method

    const newFruits = 
    fruits.filter((fruit)=>{
      if (fruit.id === id) return false ;
      else return true ; 
    })
    setfruits(newFruits);
}

  const [fruitName , setFruitName] = useState(""); 
  const [fruits , setfruits ] = useState(
    [    
      {id: 1 , name : "phone"} ,
      {id: 2 , name : "phone1"},
      {id: 3 , name : "phone2"},
      {id: 4 , name : "phone3"}
    
    ]
  );
  const fruitstable = fruits.map((fruit)=>{
    return (
      <li key={fruit.id}>{fruit.name}<button onClick={()=>{
        handledeleteclick(fruit.id)
      }
      }>Delete</button></li>
    )
  })

  return ( 
    <div className="App"  style={{padding:"150px" , fontSize :"40px"}}>
          {fruitstable}
          <input type='text' value={fruitName} onChange={(e)=>{
                  setFruitName(e.target.value);
          }}/>
          <button onClick={handleclick}>add</button>
    </div>
  );
}
export default App;