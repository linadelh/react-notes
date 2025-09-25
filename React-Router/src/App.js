

import './App.css';
import Posts from './ReactDynamicRoutes/Posts';
import { Route , Routes } from 'react-router-dom';
import PostsDetails from './ReactDynamicRoutes/PostsDetails';


function App() {
  return (
    <div>
    
    
    
     <Routes>
      <Route path="/" element = {<Posts/>} />
      <Route  path="/PostsDetails"  element ={<PostsDetails/>} /> 
     </Routes>
   
        
    </div>
  )
}



export default App;
