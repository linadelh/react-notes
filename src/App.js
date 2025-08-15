
import './App.css';
import Header from "./header"
import LeftSection from "./leftsection"
import Rightsection from "./rightsection"

function App() {

  return (
    <div className="App">
     
     <Header/>

     <div className = "sections">
       <div className = "sec">
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
     <LeftSection/>
          </div>
     <Rightsection/>
      </div>






    </div>
  );
}





export default App;
