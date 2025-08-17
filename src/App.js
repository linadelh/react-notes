
import './App.css';
import Header from "./header"
import leftsection from './leftsection';
import LeftSection from "./leftsection"
import Rightsection from "./rightsection"

function App() {


    const content = [
       {content : "happy cat" ,  title : "harrypotter" } ,
       {content : "happy dog" , title : "story" } ,
        {content : "happy elephant" ,  title : "film" } ,
         {content : "happy fish" ,  title : "youtube" } ,
          {content : "happy me" ,  title : "easy" }
    ]

    const one = content.map((el) => {
      return ( <LeftSection content={el.content}  title={el.title}/> )
    });





  return (
    <div className="App">
     
     <Header/>

     <div className = "sections">
       <div className = "sec">
     {one} ; 
          </div>
     <Rightsection/>
      </div>






    </div>
  );
}





export default App;