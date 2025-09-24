
import './App.css';
import FormCard from './FormCard';
import { useContext } from 'react';
import { UserData } from './contexts/UserContex';

function App() {

  return (

    <UserData.Provider value = {{ UserName : "Lina" , UserAge : 20 , UserEmail : "lina@gmail.com"}}>
    <div className="App">
    <FormCard/>
    </div>
    </UserData.Provider>
  );
}

export default App;
