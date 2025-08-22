
import { useState } from "react"

export default function MyForm (){

    const [Inputs , setInputs] = useState({name :"" , age :"" , email:"" , generalinfo:"" , isstudent : false , country : "" , status :""})
    return(


        // form 

        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <lable>Name</lable>
            <input value={Inputs.name} onChange={(e)=>{
                setInputs({...Inputs , name : e.target.value})
            }}/>
            <hr></hr>

             <lable>age</lable>
            <input value={Inputs.age}  onChange={(e)=>{
                setInputs({...Inputs , age : e.target.value})
            }}/> 
            <hr></hr>

             <lable>Email</lable>
            <input value={Inputs.email}  onChange={(e)=>{
                setInputs({...Inputs , email : e.target.value})
            }}/> 
            <hr></hr>

           {/* text area */}

            <label>general info</label>
            <textarea onChange={
                (e)=> {
                    setInputs({...Inputs , generalinfo : e.target.value})
                }
            }></textarea>

            <hr></hr>
            <label>are you a student </label>
            <input type="checkbox" checked = {Inputs.isstudent} onChange={(e)=>{
                if(Inputs.isstudent === false ){
                setInputs({...Inputs , isstudent : true})
                }else {
                     setInputs({...Inputs , isstudent : false})
                }
            }}/>

              <hr></hr>

               {/* select  */}

               <label>choose your country</label>
               <select  onChange={(e)=>{
                setInputs({...Inputs , country :e.target.value })
               }}>
                <option>algerie</option>
                <option>UK</option>
                <option>PALESTINE</option>
                <option>CANADA</option>
                <option>SAUDIE ARABIC</option>
               </select>


               <hr>
               </hr>
 
                <div>
               <input type="radio" onChange={()=>{
                    setInputs({...Inputs ,  status : "student"})
               }} checked = {
                Inputs.status === "student" ? true : false
               }/>Student
                <input type="radio"  onChange={()=>{
                    setInputs({...Inputs ,  status : "teacher"})
               }} checked = {
                Inputs.status === "teacher" ? true : false
               } />teacher
                </div>



        </form>




        
    )
}