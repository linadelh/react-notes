

import './App.css';
import Loginpage from './LoginPage';
import Signup from './SignUp';
import { Routes , Route   } from 'react-router-dom';
import Welcome from './WelcomeHome';


function App() {
  return (
    <>
    
    

    <Routes>
      <Route path='/Login' element = {<Loginpage/>}/>
      <Route path='/SignUp' element = {<Signup/>}/>
      <Route path='/' element = {<Loginpage/>}/>
      <Route path='/Welcome' element = {<Welcome/>}/>
    </Routes>

   
        
    </>
  )
}



export default App;
