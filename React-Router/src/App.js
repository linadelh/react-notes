

import './App.css';
import Posts from './ReactDynamicRoutes/Posts';
import { Route , Routes } from 'react-router-dom';
import PostsDetails from './ReactDynamicRoutes/PostsDetails';
import { postcontex } from './Contex/PostsContex';


function App() {
  return (

  

    <postcontex.Provider value={[
    {
        id : 1 ,
        title : "HARRY POTTER" ,
        paragraph : "a young, orphaned wizard, recognized by his signature round glasses, untidy black hair, and a lightning-shaped scar on his forehead, a remnant of his encounter with the dark wizard Lord Voldemort as a baby" 
    },
    {
        id : 2 ,
        title : "MARVEL SERIES" ,
        paragraph : " the Marvel Cinematic Universe (MCU) isn’t just about movies it has a whole lineup of series too. These shows dive deeper into specific characters and corners of the universe that the big films don’t always have time for " 
    },
    {
        id : 3 ,
        title : "BACK TO THE FUTURE" ,
        paragraph : "Back to the Future is a 1985 sci-fi adventure film about Marty McFly, a teenager who accidentally travels from 1985 to 1955 in a time machine built by his eccentric friend, Doc Brown" 
    }
]}>
    <div>
   
     <Routes>
      <Route path="/" element = {<Posts/>} />
      <Route  path="/PostsDetails/:postId"  element ={<PostsDetails/>} /> 
     </Routes>
  
    </div>
    </postcontex.Provider>
  )
}



export default App;
